import { useState } from "react";
import emailjs from "@emailjs/browser";

function LegacyContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


      if (!serviceId || !templateId || !publicKey) {
        console.error("Missing EmailJS environment variables");
        setStatus({
          type: "error",
          message:
            "Email service is not configured correctly. Please try again later.",
        });
        setIsSending(false);
        return;
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      console.log("EmailJS response:", response);

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent.",
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
        message:
          "Something went wrong while sending your message. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
        Contact
      </p>
      <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>

      <p className="text-slate-300 text-sm mb-4">
        I'm open to software development roles, data roles, internships, and
        interesting project collaborations. Email is the best way to reach me —
        and you can also find me on LinkedIn and GitHub.
      </p>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <a
          href="mailto:gauravpsingh720@gmail.com"
          className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition w-max"
        >
          Email Me
        </a>
        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href="https://www.linkedin.com/in/gauravpramodsingh/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 text-slate-300 hover:text-indigo-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/gauravpsingh07"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 text-slate-300 hover:text-indigo-300"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <form
        className="grid md:grid-cols-2 gap-4 max-w-xl"
        onSubmit={handleSubmit}
      >
        <div className="md:col-span-1">
          <label className="block text-xs text-slate-400 mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
            placeholder="Your Name"
          />
        </div>
        <div className="md:col-span-1">
          <label className="block text-xs text-slate-400 mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
            placeholder="you@example.com"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs text-slate-400 mb-1">Message</label>
          <textarea
            rows="4"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
            placeholder="Write your message..."
          ></textarea>
        </div>
        <div className="md:col-span-2 flex flex-col gap-2">
          <button
            type="submit"
            disabled={isSending}
            className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed transition w-max"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`text-xs ${
                status.type === "success"
                  ? "text-emerald-400"
                  : "text-red-400"
              }`}
            >
              {status.message}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("Missing EmailJS environment variables");
        setStatus({
          type: "error",
          message:
            "Email service is not configured correctly. Please try again later.",
        });
        setIsSending(false);
        return;
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      console.log("EmailJS response:", response);

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent.",
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
        message:
          "Something went wrong while sending your message. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="rounded-[2rem] border border-white/70 bg-white/72 p-6 shadow-[var(--shadow)] backdrop-blur-xl"
    >
      <div className="grid gap-8 lg:grid-cols-[0.88fr,1.12fr]">
        <div className="rounded-[2rem] bg-[#173743] p-6 text-[#fdf4ea] shadow-[0_24px_60px_rgba(23,55,67,0.24)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f2c078]">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Let&apos;s Build Something Thoughtful
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#d6e8e5]">
            I&apos;m open to software engineering roles, internships, data work,
            and collaborative projects. If you have an opportunity or just want
            to connect, email is the fastest way to reach me.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <a
              href="mailto:gauravpsingh720@gmail.com"
              className="flex items-center justify-between rounded-[1.5rem] bg-white/10 px-4 py-4 text-[#fdf4ea] hover:bg-white/14"
            >
              <span className="font-semibold">Email</span>
              <span className="text-[#cfe4e0]">gauravpsingh720@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/gauravpramodsingh/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-[1.5rem] bg-white/10 px-4 py-4 text-[#fdf4ea] hover:bg-white/14"
            >
              <span className="font-semibold">LinkedIn</span>
              <span className="text-[#cfe4e0]">/in/gauravpramodsingh</span>
            </a>
            <a
              href="https://github.com/gauravpsingh07"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-[1.5rem] bg-white/10 px-4 py-4 text-[#fdf4ea] hover:bg-white/14"
            >
              <span className="font-semibold">GitHub</span>
              <span className="text-[#cfe4e0]">@gauravpsingh07</span>
            </a>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#a84b32]">
            Send a Message
          </p>
          <h3 className="text-3xl font-semibold">Tell me what you&apos;re building</h3>
          <p className="mt-2 text-sm leading-6 text-stone-600">
            Share the role, project, or idea you have in mind, and I&apos;ll get
            back to you as soon as I can.
          </p>

          <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
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
                className="w-full rounded-[1.2rem] border border-[#e3d3c4] bg-[#fffaf4] px-4 py-3 text-sm text-stone-700 outline-none focus:border-[#cd6a4d] focus:ring-2 focus:ring-[#f5d0c3]"
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
                className="w-full rounded-[1.2rem] border border-[#e3d3c4] bg-[#fffaf4] px-4 py-3 text-sm text-stone-700 outline-none focus:border-[#cd6a4d] focus:ring-2 focus:ring-[#f5d0c3]"
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
                className="w-full rounded-[1.4rem] border border-[#e3d3c4] bg-[#fffaf4] px-4 py-3 text-sm leading-7 text-stone-700 outline-none focus:border-[#cd6a4d] focus:ring-2 focus:ring-[#f5d0c3]"
                placeholder="Tell me about the role, project, or collaboration."
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-3">
              <button
                type="submit"
                disabled={isSending}
                className="inline-flex w-max items-center rounded-full bg-[#cd6a4d] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(205,106,77,0.22)] hover:-translate-y-0.5 hover:bg-[#b8573c] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p
                  role="status"
                  className={`w-fit rounded-full px-4 py-2 text-sm font-medium ${
                    status.type === "success"
                      ? "bg-[#e6f5f0] text-[#1e7a74]"
                      : "bg-[#fdecea] text-[#b8573c]"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
