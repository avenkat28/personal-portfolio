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

- Confirm the resume files exist at `public/resume.pdf` and `public/business-resume.pdf`.
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

## Updating the resume

The site serves the supplied CS resume, `VenkatAryaResume.pdf`, at `public/resume.pdf`, and the business resume, `AryaVenkatResume.pdf`, at `public/business-resume.pdf`. Replace the corresponding file with your latest PDF to update its links in the hero and resumes sections.

`resume.md` is an older editable draft. To deliberately replace the supplied PDF with a generated version of that draft on macOS, run:

```bash
swift -module-cache-path /tmp/portfolio-swift-cache scripts/build-resume.swift
```

The generator writes `public/resume.pdf` and checks that the content fits on one page.
