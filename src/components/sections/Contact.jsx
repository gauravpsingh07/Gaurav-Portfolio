import { useState } from "react";
import emailjs from "@emailjs/browser";

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

export default Contact;
