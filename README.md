# The Instagram Network Playbook

An illustrated, single-page decision manual for building and managing a brand's Instagram footprint: when to split one brand page into several, which interests deserve a page, which structure to use, which shows to make, how to run it and how it pays back.

The header has a toggle between two views:

- **Marketer**: the full, detailed playbook.
- **Non-marketer**: a shorter, plain-English version for clients and non-technical readers, with a 5-question quiz. Link straight to it with `?view=simple`, e.g. `https://abhisheknid.github.io/brand-ig-footprint/?view=simple`.

Both views have a "How brands decide" carousel of 14 brand examples. Each card opens a detail page with its own link, e.g. `#brand-redbull`.

The Marketer view includes an interactive "Should you split?" check, an interest scorer, a launch checklist and infographics (feed relevance, the gap between purchases, an audience map, a model matrix, a 90-day plan and the media-network flywheel).

Everything is in `index.html`: plain HTML, CSS and JavaScript, with no build step. Fonts load from Google Fonts. Illustrations are drawn in code as inline SVG.

## Hosting

Settings → Pages → *Deploy from a branch* → `main` and `/ (root)`.
The site is served at `https://abhisheknid.github.io/brand-ig-footprint/`.

Adapted from the ideas in "Everyone Wants a Media Network", episode 2.

## Lead form

Both views end with a "Get in touch" form (name, work email, optional Instagram handle, strategy goal). Submissions are emailed to the address set in the `TO` constant near the end of `index.html`, using the free [FormSubmit](https://formsubmit.co) service. No database and nothing is stored on this site.

**One-time setup:** the first real submission makes FormSubmit email an activation link to that address. Submit a test entry yourself and click the link, otherwise visitors' submissions are not delivered.

## Lead form: Google Sheet and email

Each submission is added as a row in a Google Sheet and also emailed to hellowork.abhi@gmail.com, by a small Google Apps Script (`apps-script/Code.gs`).

1. Sign in as hellowork.abhi@gmail.com and create a new Google Sheet (sheets.new).
2. In the sheet, open Extensions, then Apps Script. Paste in the contents of `apps-script/Code.gs`.
3. Click Deploy, then New deployment, then type Web app. Set Execute as: Me and Who has access: Anyone. Authorise when asked.
4. Copy the web app URL and set `SCRIPT_URL` in `index.html`.

If you change the script later, deploy a new version so the change goes live. Until `SCRIPT_URL` is set, the form falls back to FormSubmit.
