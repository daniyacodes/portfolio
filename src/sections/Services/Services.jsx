let groups = [
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Responsive design'] },
  { title: 'Backend & databases', items: ['Node.js', 'Express.js', 'REST APIs', 'MySQL', 'MongoDB'] },
  { title: 'AI & developer tools', items: ['RAG workflows', 'Embeddings', 'Semantic search', 'Git & GitHub', 'Postman'] }
];
export default function Services() {
  return <section id="skills" className="section" aria-labelledby="skills-title">
    <h2 id="skills-title">Skills</h2>
    <p className="sub">The tools I’ve worked with and the areas I’m still exploring.</p>
    <div className="grid">{groups.map((g) => <article className="card" key={g.title}><h3>{g.title}</h3><ul className="chips">{g.items.map((i) => <li className="chip" key={i}>{i}</li>)}</ul></article>)}</div>
  </section>;
}
