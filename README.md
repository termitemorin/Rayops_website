# Rayops — Website

Bilingual (FR / EN) static site for **Rayops**, built to be hosted on GitHub Pages.

> *Mettre la lumière au service de l'action. / Putting light at the service of action.*

## Structure

```
/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/            logo + hero image
├── .nojekyll              disables Jekyll on GitHub Pages
└── .gitignore
```

The site is a single-page layout with a FR/EN toggle in the header. All translatable strings live in [assets/js/main.js](assets/js/main.js) under the `translations` object — edit there to update copy in either language.

## Local preview

Any static server works, for example:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying to GitHub Pages

1. Push to the `main` branch of `termitemorin/Rayops_website`.
2. In the repo settings → **Pages**, set the source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site will be available at `https://termitemorin.github.io/Rayops_website/`.

When a custom domain is purchased later, add it via **Settings → Pages → Custom domain** and create a `CNAME` file at the repo root containing the domain.

## Contact

**Jean-François Daigle** — Founder & CEO
[JFDaigle@rayops.ca](mailto:JFDaigle@rayops.ca) • [LinkedIn](https://www.linkedin.com/in/jean-françois-daigle-76a625262/)
