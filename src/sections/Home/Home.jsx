export default function Home() {
  return (
    <section id="home" className="hero" aria-labelledby="home-title">
      <img
        className="avatar"
        src="/images/daniya-profile.png"
        alt="Portrait of Daniya Asefa"
      />
      <h1 id="home-title">Daniya Asefa</h1>
      <p className="tagline">Learner | AI-Powered Full-Stack Developer</p>
      <div className="socials">
        <a
          href="https://github.com/daniyacodes"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/daniya-asefa-08462433a"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:contact@daniyaasefa.com">Email</a>
        <a href="/cv.pdf" download>
          Resume
        </a>
      </div>
    </section>
  );
}
