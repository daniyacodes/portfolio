import { useState } from "react";
import { projects } from "../../data/projects.js";

let filters = ["All", "Live", "In Development"];
export default function Portfolio() {
  let [filter, setFilter] = useState("All");
  let shown = projects.filter((p) => filter === "All" || p.status === filter);
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <h2 id="projects-title">Projects</h2>
      <p className="sub">Where I put new ideas into practice.</p>
      <div className="pills" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className="pill"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      {shown.map((p) => (
        <article className="project" key={p.number}>
          <div className="poster" aria-hidden="true">
            {p.title}
          </div>
          <div className="pinfo">
            <h3>{p.title}</h3>
            <span className="badge">
              {p.type} · {p.status}
            </span>
            <p>{p.description}</p>
            <ul className="chips">
              {p.stack.map((t) => (
                <li className="chip" key={t}>
                  {t}
                </li>
              ))}
            </ul>
            <div className="actions">
              {p.url ? (
                <a
                  className="btn"
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
              ) : (
                <span className="muted">Live preview coming soon</span>
              )}
              {p.source ? (
                <a
                  className="btn ghost"
                  href={p.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              ) : (
                <span className="muted">GitHub link to be added</span>
              )}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
