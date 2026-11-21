# Saugat Bhattarai — Health, Data & Engineering

A personal portfolio about biomedical engineering, medical imaging, machine learning coursework and data engineering, with a little room for planes, football and geography.

**Live portfolio:** https://saugatme.github.io/
**Separate blog:** https://saugatme.github.io/blog/ · source: https://github.com/saugatme/blog

## What is here

Five selected case studies lead the work: bachelor’s gait-analysis thesis, Healthcare Nanochat, Flight Delay Analysis, whole-slide image preprocessing, and Urban Data Integration. Medical-imaging coursework has its own spotlight; other coursework and early projects are kept compact. Case studies distinguish personal contributions from team work and describe results in their actual experimental context.

The gait-analysis output is highlighted early in its case study. Flight analysis includes a compact, clickable dashboard preview. Supporting charts are deliberately smaller; project figures stay inside project pages. About includes experience, education, a grounded toolkit, interests and certificate links. A small Sporcle football quiz appears with personal projects.

## Simple structure

- `index.html`: selected work, background, personal interests and smaller projects.
- `about.html`: fuller personal and professional background.
- `projects/`: project case studies.
- `notebooks/`: curated technical reading views, rather than complete assignment dumps.
- `assets/figures/`: selected, reviewed project images and diagrams.
- `assets/reports/` and report PDFs in `assets/`: supporting reports.
- `assets/Bhattarai_Saugat_CV.pdf`: current downloadable CV.
- `style.css`: layout, colors, typography, image sizing and mobile rules.
- `theme.js`: local light/dark preference. No tracking.

Inter and Space Grotesk are self-hosted with their licenses. Subset fonts reduce downloads. The site uses plain HTML, CSS and one small theme script: no package installation or build step. `.nojekyll` disables template processing.

## Edit and preview

Edit the relevant HTML file. Keep descriptions in plain language and results linked to their scope; use small report/source links instead of long provenance paragraphs. Preserve full-resolution figure files, but control their displayed size in CSS. Add useful alt text, image dimensions and lazy loading for supporting figures.

From this folder, run `python -m http.server 8894 --bind 127.0.0.1`, then open http://127.0.0.1:8894/. Check desktop and mobile layouts, local links, theme switching and image previews. Commit and push to `main`; GitHub Pages publishes the site.

## Publication and privacy

Only selected public evidence belongs here. The larger local supporting-evidence archive is outside this repository. Do not commit raw clinical datasets, identifiers, credentials, private screenshots or private blog drafts. Original screenshots may represent different runs; avoid combining their numbers into a single result. The site has no analytics, account system, forms or backend. Navigation uses direct links, not redirect services. A Content Security Policy limits scripts to this site.

`robots.txt` asks compliant crawlers to avoid all paths, including `/blog/`. This discourages search indexing too; it does not enforce privacy or prevent access to public files or Git history.
