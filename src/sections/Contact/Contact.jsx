import { useState } from "react";

let endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "/forms/contact.php";
export default function Contact() {
  let [status, setStatus] = useState("");
  let [sending, setSending] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    let form = event.currentTarget;
    if (!form.reportValidity()) return;
    setSending(true);
    setStatus("");
    try {
      let response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "text/plain" },
      });
      let message = (await response.text()).trim();
      if (!response.ok || message !== "OK")
        throw new Error(
          "The message could not be sent. Please try again or email me directly.",
        );
      setStatus("Thanks for reaching out. Your message has been sent.");
      form.reset();
    } catch (error) {
      setStatus(
        error.message ||
          "Something went wrong. Please email me directly instead.",
      );
    } finally {
      setSending(false);
    }
  }
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <p className="sub">
        Working on something interesting, or just want to talk about web
        development and AI? Email{" "}
        <a href="mailto:contact@daniyaasefa.com">contact@daniyaasefa.com</a> or
        use the form.
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="c-name">Name</label>
        <input
          id="c-name"
          name="name"
          autoComplete="name"
          required
          minLength="2"
          maxLength="100"
        />
        <label htmlFor="c-email">Email</label>
        <input
          id="c-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          maxLength="254"
        />
        <label htmlFor="c-subject">Subject</label>
        <input
          id="c-subject"
          name="subject"
          required
          minLength="2"
          maxLength="150"
        />
        <label htmlFor="c-message">Message</label>
        <textarea
          id="c-message"
          name="message"
          rows="5"
          required
          minLength="10"
          maxLength="5000"
        />
        <div className="actions">
          <button className="btn" type="submit" disabled={sending}>
            {sending ? "Sending…" : "Send message"}
          </button>
        </div>
        <p className="status" role="status" aria-live="polite">
          {status}
        </p>
      </form>
    </section>
  );
}
