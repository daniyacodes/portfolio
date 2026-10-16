import { useState } from 'react';
import styles from './PortfolioAssistant.module.css';

let quickQuestions = ['What projects has Daniya built?', 'What technologies does she use?', 'How can I contact Daniya?'];
function getAnswer(question) {
  let text = question.toLowerCase();
  if (text.includes('project') || text.includes('built') || text.includes('work')) return 'Daniya’s current projects include a GPT-inspired chat app at chat.daniyaasefa.com, the Evangadi Forum at forum.daniyaasefa.com, and a Netflix-inspired interface that is still in development. She plans to add the individual GitHub repository links when she updates the portfolio.';
  if (text.includes('skill') || text.includes('technology') || text.includes('stack') || text.includes('react') || text.includes('rag')) return 'Daniya works with React, JavaScript, Next.js, Tailwind CSS, Node.js, Express, MySQL, and MongoDB. She’s also exploring AI application concepts, including RAG, embeddings, and semantic search, through practical project work.';
  if (text.includes('contact') || text.includes('email') || text.includes('hire') || text.includes('linkedin')) return 'You can email Daniya at contact@daniyaasefa.com, visit github.com/daniyacodes, or connect on LinkedIn at linkedin.com/in/daniya-asefa-08462433a.';
  if (text.includes('education') || text.includes('pharmacy') || text.includes('evangadi') || text.includes('study') || text.includes('graduate')) return 'Daniya graduated in Clinical Pharmacy from Dream Science and Technology College in 2025. She has since focused on software development through the Evangadi Networks learning program and is preparing the final project required for certification.';
  if (text.includes('about') || text.includes('daniya') || text.includes('who')) return 'Daniya Asefa is an aspiring AI-powered full-stack developer in Ethiopia. After graduating in Clinical Pharmacy, she turned her focus to building web applications. She enjoys understanding how frontend, backend, databases, and AI features work together.';
  return 'I can answer questions about Daniya’s background, skills, projects, education, and contact details. Try asking about her projects or technologies.';
}

export default function PortfolioAssistant() {
  let [open, setOpen] = useState(false);
  let [question, setQuestion] = useState('');
  let [messages, setMessages] = useState([{ role: 'assistant', text: 'Hi! I can help you explore Daniya’s work. Ask me about a project, the technologies she’s learning, or her path into development.' }]);
  function sendQuestion(value) {
    let cleanQuestion = value.trim();
    if (!cleanQuestion) return;
    setMessages((current) => [...current, { role: 'user', text: cleanQuestion }, { role: 'assistant', text: getAnswer(cleanQuestion) }]);
    setQuestion('');
  }
  return <>
    {open && <section className={styles.panel} aria-label="Portfolio assistant chat">
      <div className={styles.panelHead}><div><strong>Portfolio assistant</strong><span>About Daniya and her work</span></div><button type="button" onClick={() => setOpen(false)} aria-label="Close assistant">×</button></div>
      <div className={styles.messages} aria-live="polite">{messages.map((message, index) => <p key={`${message.role}-${index}`} className={message.role === 'user' ? styles.userMessage : styles.assistantMessage}>{message.text}</p>)}</div>
      {messages.length === 1 && <div className={styles.quickQuestions}>{quickQuestions.map((item) => <button type="button" key={item} onClick={() => sendQuestion(item)}>{item}</button>)}</div>}
      <form className={styles.inputRow} onSubmit={(event) => { event.preventDefault(); sendQuestion(question); }}><input aria-label="Ask a question" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask about my work…" maxLength={400} /><button type="submit" aria-label="Send question">↗</button></form>
      <p className={styles.disclaimer}>Answers use the portfolio’s saved information; this demo does not call an AI service.</p>
    </section>}
    <button className={styles.launcher} type="button" onClick={() => setOpen(!open)} aria-expanded={open}><span aria-hidden="true">{open ? '×' : '✳'}</span>{open ? 'Close chat' : 'Ask about me'}</button>
  </>;
}
