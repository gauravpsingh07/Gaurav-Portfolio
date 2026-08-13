# Gaurav Singh Portfolio

A responsive software engineering portfolio built with React, Vite, Tailwind CSS, Framer Motion, and EmailJS.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

## Contact form

The EmailJS form expects these environment variables:

```text
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

If they are not configured, the portfolio keeps the direct email link available and shows a clear form error state.
