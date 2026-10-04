# TwoStack website

Next.js App Router portfolio, service pages, case studies, articles and contact forms.

## Local setup

```bash
npm ci
npm run dev
```

The development server runs on `http://localhost:4000`. Run `npm run lint` and `npm run build` before deployment.

## Production setup

1. Deploy this project to Vercel and assign `twostack.lk` as the primary domain. Keep the `www` redirect to the apex in `next.config.ts`; check that Vercel's domain-level settings do not redirect apex back to `www`.
2. Copy `.env.example` values into Vercel environment variables. Verify your sending domain in Resend and create an API key. Set `CONTACT_FROM_EMAIL` to a sender on the verified domain and `CONTACT_TO_EMAIL` to a monitored inbox. Until these are configured, `/api/contact` returns 503 and the page offers WhatsApp/email alternatives. Do not commit credentials.
3. Optional: add `twostack.lk` in Plausible and set `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` to its site-specific script URL from the installation settings. Page views and `contact_submit_success`, `whatsapp_click`, `email_click`, `contact_page_click` can then be inspected there. A click does not mean a lead sent a message; qualify actual inquiries separately.
4. Verify `/robots.txt`, `/sitemap.xml`, the OG image, logo URL and direct article routes on the deployment. Submit `https://twostack.lk/sitemap.xml` to a Search Console domain property and inspect canonical/indexing for a representative service, case study and article.
5. Check mobile PageSpeed Insights using field data when available. The site has image optimizations but no fabricated Lighthouse score is claimed.

## Daily publishing with the admin panel

The project includes Sanity Studio at `/studio`. Sanity manages editor accounts, drafts, publication, scheduling (when available in the project plan), image uploads and revision history. The page is excluded from the sitemap and marked `noindex`. The Studio shell is public, but content editing requires a Sanity project member login.

1. Create a Sanity project with a **public dataset** named `production` (or update the dataset variable). Add the project ID and dataset as `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in Vercel. These are public identifiers, not secrets. Add `https://twostack.lk`, your preview domain if used, and `http://localhost:4000` as allowed Studio CORS origins with credentials in the Sanity project settings.
2. Create a temporary Sanity token with permission to create documents. Put it in your local `.env.local` as `SANITY_WRITE_TOKEN` alongside the project ID and dataset, then run `npm run import:articles`. The command uses stable IDs and can be rerun safely. Remove the write token after import. **Never add a write token to the public environment or source control.**
3. Deploy this updated project. Open `https://twostack.lk/studio`, sign in as a project member, create an Article, add a cover and inline images with descriptive alt text, write the body, check SEO fields and publish. The public blog, service-page links, homepage and sitemap update from published content, with a cache of up to roughly 60 seconds. Drafts and future-dated posts do not appear publicly. Sanity's scheduling action can publish a draft at a later date if enabled for your project.
4. Keep actual publication dates, author names and claims accurate. Preview in Studio and check the live article before sharing it. Give only trusted editors access to the Sanity project.

When Sanity is not configured, the four existing code-authored articles in `src/lib/blog.ts` remain visible. Once configured, Sanity becomes the source for all articles. Import those four before deploying the environment variables, or the blog will be empty until the first article is published.

**Images:** Sanity retains the uploaded original and its CDN transforms public blog images to responsive WebP URLs. The loader produces appropriately sized variants for different screens. This is deliberate: keeping the original allows you to crop or re-export later. Social preview images are generated separately by the application as PNG.

## Admin setup reference

- Embedded Studio: `sanity.config.ts`, `src/sanity/schemaTypes/post.ts`, and `src/app/studio/[[...tool]]/`.
- Public fetch: `src/lib/sanity.ts`. The published dataset is read-only from the public site. Content refreshes within about one minute; no write token is used for rendering.
- The schema supports title, slug, category, summary, author, publication date, cover with alt text, headings, lists, links, inline images and SEO title/description. It requires the key fields before publishing.
- A small team can use `/studio` without building its own auth, database or file storage. Verify the Sanity account plan and usage limits before a high-volume publishing workflow.

## Site operations

- The organization logo used in schema and navigation is `/images/logo.png` (lowercase). The source ZIP's `/images/Logo.png` was a blank white image; the new mark is derived from the original TwoStack social artwork.
- The generic Open Graph image is a real 1200 × 630 JPEG. Add contextual per-article/case-study images when you have approved assets.
- `src/app/sitemap.ts` derives service and case study paths from their corresponding data modules and blog URLs from published articles. Only article entries include a verified editorial date.
- The contact endpoint validates input, uses a hidden honeypot field and sends mail server-side. For sustained spam or high traffic, add provider-backed rate limiting and CAPTCHA/challenge appropriate to observed abuse. Monitor delivery errors and keep a separate WhatsApp path.
