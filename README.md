# Arya Venkat Portfolio

A clean one-page portfolio built with Next.js, React, TypeScript, and Tailwind CSS for job and co-op applications.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Update Before Publishing

- Confirm the resume file exists at `public/resume.pdf`.
- Update the email and any remaining project links in `app/page.tsx`.

## Deploying on Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New Project** and import the GitHub repository.
3. Keep the default framework preset as **Next.js**.
4. Use the default commands:
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Deploy.
