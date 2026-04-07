import { useState } from "react";
import { motion as Motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { MotionSection, Reveal } from "../ui/Reveal";

const contactLinks = [
  {
    label: "Email",
    value: "gauravpsingh720@gmail.com",
    href: "mailto:gauravpsingh720@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "/in/gauravpramodsingh",
    href: "https://www.linkedin.com/in/gauravpramodsingh/",
  },
  {
    label: "GitHub",
    value: "@gauravpsingh07",
    href: "https://github.com/gauravpsingh07",
  },
];

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        setStatus({
          type: "error",
          message: "Email service is not configured correctly. Please try again later.",
        });
        setIsSending(false);
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setStatus({
        type: "success",
        message: "Thank you. Your message has been sent.",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: "Something went wrong while sending your message. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <MotionSection id="contact" className="section-shell h-full overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="ambient-orb absolute left-[-4rem] top-0 h-48 w-48 rounded-full bg-[#b9d6dd]/24 blur-3xl" />
        <div className="ambient-orb-slow absolute bottom-[-5rem] right-[-3rem] h-56 w-56 rounded-full bg-[#d8cdef]/22 blur-3xl" />
      </div>

      <div className="relative">
        <Reveal>
          <p className="section-label">Contact</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-stone-900 sm:text-4xl">
            End the scroll with a conversation, not just a contact form.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-600">
            I am open to software engineering roles, internships, and thoughtful
            product collaborations. If you have an opportunity in mind, I would
            love to hear about it.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 xl:grid-cols-[0.9fr,1.1fr]">
          <Reveal className="glass-card overflow-hidden p-5 sm:p-6" delay={0.08}>
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(85,114,216,0.1),transparent_40%,rgba(203,132,101,0.1))]" />
            <div className="relative">
              <div className="rounded-[1.5rem] border border-[rgba(132,112,94,0.12)] bg-white/78 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#5572d8]">
                  Reach out
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-stone-900">
                  Best for roles, referrals, or project conversations
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  Email is the fastest way to reach me, and LinkedIn is a great
                  place to connect for longer-term opportunities.
                </p>
              </div>

              <div className="mt-5 space-y-3">
                {contactLinks.map((link) => (
                  <Motion.a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    whileHover={{ y: -4 }}
                    className="glass-card flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                        {link.label}
                      </p>
                      <p className="mt-2 max-w-full break-all text-sm font-medium text-stone-800 sm:break-words">
                        {link.value}
                      </p>
                    </div>
                    <span className="button-ghost shrink-0 self-start px-3 py-2 text-xs sm:self-auto">
                      Open
                    </span>
                  </Motion.a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="glass-card overflow-hidden p-5 sm:p-6" delay={0.14}>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.4),transparent_28%)]" />
            <div className="relative">
              <div className="mb-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                  Send a message
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-stone-900">
                  Tell me what you are building or hiring for
                </h3>
              </div>

              <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-stone-500"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-stone-500"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-stone-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows="6"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="field-input resize-none py-4 leading-7"
                    placeholder="Tell me about the role, team, or collaboration."
                  />
                </div>

                <div className="md:col-span-2 flex flex-col gap-3">
                  <button type="submit" disabled={isSending} className="button-primary w-max">
                    {isSending ? "Sending..." : "Send Message"}
                  </button>

                  {status ? (
                    <p
                      role="status"
                      className={`w-fit rounded-full px-4 py-2 text-sm font-medium ${
                        status.type === "success"
                          ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                          : "border border-rose-400/20 bg-rose-400/10 text-rose-300"
                      }`}
                    >
                      {status.message}
                    </p>
                  ) : null}
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </MotionSection>
  );
}

export default ContactSection;
