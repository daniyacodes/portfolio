import { education, experience, certifications } from "../../data/resume.js";

function Timeline({ title, items }) {
  return (
    <>
      <h3 className="sec">{title}</h3>
      <div className="tl">
        {items.map((i) => (
          <article className="tl-item" key={i.title}>
            <span className="tl-date">{i.date}</span>
            <h4>{i.title}</h4>
            <p className="place">{i.place}</p>
            <p>{i.detail}</p>

            {i.link && (
              <p>
                <a href={i.link} target="_blank" rel="noreferrer">
                  View certificate ↗
                </a>
              </p>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
export default function Resume() {
  return (
    <section id="journey" className="section" aria-labelledby="journey-title">
      <h2 id="journey-title">Experience & Education</h2>
      <p className="sub">
        A healthcare education, now growing into full-stack development.
      </p>
      <Timeline title="Experience" items={experience} />
      <Timeline title="Education" items={education} />
      <Timeline title="Certifications" items={certifications} />
      <a className="btn ghost" href="/cv.pdf" download>
        Download resume
      </a>
    </section>
  );
}
