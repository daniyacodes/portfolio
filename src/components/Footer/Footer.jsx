export default function Footer() {
  return <footer className="footer"><div className="wrap">
    <blockquote>Built with curiosity, patience, and a commitment to keep learning.</blockquote>
    <nav aria-label="Footer"><a href="https://github.com/daniyacodes" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/daniya-asefa-08462433a" target="_blank" rel="noreferrer">LinkedIn</a><a href="#home">Back to top</a></nav>
    <span>© {new Date().getFullYear()} Daniya Asefa</span>
  </div></footer>;
}
