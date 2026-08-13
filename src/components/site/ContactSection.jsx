import { useState } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "../../data/portfolio";
import { MotionSection, Reveal } from "../ui/Reveal";

const initialFormData = {
  name: "",
  email: "",
  message: "",
  company: "",
};

function ContactSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);

    if (formData.company) {
      return;
    }

    if (formData.message.trim().length < 20) {
      setStatus({
        type: "error",
        message: "Please include a little more detail so I can respond helpfully.",
      });
      return;
    }

    setIsSending(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        setStatus({
          type: "error",
          message: "The contact form is temporarily unavailable. Please email me directly.",
        });
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          message: formData.message.trim(),
        },
        publicKey
      );

      setStatus({ type: "success", message: "Thanks. Your message has been sent." });
      setFormData(initialFormData);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: "The message could not be sent. Please email me directly instead.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <MotionSection id="contact" className="section-block contact-section">
      <div className="site-container contact-grid">
        <Reveal className="contact-intro">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s talk about the team, role, or product you&apos;re building.</h2>
          <p>
            I&apos;m currently open to software engineering opportunities. Email is the fastest way
            to reach me, and I&apos;m also available on LinkedIn and GitHub.
          </p>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <span>Email</span>
              <strong>{profile.email}</strong>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <strong>gauravpramodsingh</strong>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <strong>gauravpsingh07</strong>
            </a>
          </div>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={0.06}>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-grid">
              <div className="form-field-group">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="field-input"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="field-input"
                />
              </div>
            </div>

            <div className="form-field-group form-honeypot" aria-hidden="true">
              <label htmlFor="contact-company">Company</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                tabIndex="-1"
                autoComplete="off"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-field-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="7"
                minLength="20"
                required
                value={formData.message}
                onChange={handleChange}
                className="field-input"
                placeholder="Tell me about the role, team, or project."
              />
            </div>

            <div className="form-footer">
              <button type="submit" className="button-primary" disabled={isSending}>
                {isSending ? "Sending..." : "Send message"}
              </button>

              <div aria-live="polite">
                {status ? (
                  <p className={`form-status form-status-${status.type}`}>{status.message}</p>
                ) : null}
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </MotionSection>
  );
}

export default ContactSection;
