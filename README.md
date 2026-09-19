# Qihang (Charlie) Wu — personal site

Personal academic website of Qihang (Charlie) Wu, M.S. student in Electrical Engineering at Arizona State University.

**Zero build tools.** Pure HTML/CSS/JS: every page works by opening the `.html` file directly or serving the folder statically. All content lives in `data/*.js`; to update the site you almost never touch HTML.

## Everyday updates

| Task | File | What to do |
|---|---|---|
| Add a paper | `data/publications.js` | Copy an entry to the top of the array. Set `venue`, `year`, `tags` (research area id: `eda`, `hi`, `architecture`, `circuits`), `links`. Add `selected: true` to show it on the home page and in the Selected filter. `type: "preprint"` renders with a neutral (instead of blue) spine and venue badge. |
| Add news | `data/news.js` | Add an entry at the top. Tags are `Paper`, `Talk`, `Award`, `Milestone`, `Patent`. `[text](url)` inside `text` becomes a link. The home page shows the latest 6. |
| Update the CV page | `data/cv.js` | Six arrays: `education`, `research`, `industry`, `projects`, `presentations`, `honors`. Also replace `assets/Curriculum_Vitae.pdf` so the Download button stays current. |
| Edit research areas | `data/research.js` | Each area has a short blurb (home page), long blurb (research page), keywords, and representative publication ids. Area ids double as publication tags; labels and colors live in the `AREAS` map in `js/render.js`. |
| Change name / title / email / links | `data/site.js` | One place; nav, footer, and banners update everywhere. Page `<title>` tags in each HTML file and the hero bio in `index.html` must be updated by hand. |
| Portrait | `assets/qihang_wu.jpg` | Not in the repo yet: add a square photo at this path (the home page hides the portrait if the file is missing). |

## Preview locally

```bash
python3 -m http.server 8930
```

Then open http://localhost:8930. (Opening `index.html` directly in a browser also works.)

## Publish on GitHub Pages

One-time setup:

1. Create a repository named `hahacharlie.github.io` under the `hahacharlie` GitHub account (custom domain `charliewu.me` via the `CNAME` file).
2. Push this folder to that repository (`main` branch).
3. In the repo: Settings → Pages → Source: “Deploy from a branch”, branch `main`, folder `/ (root)`.
4. The site appears at `https://charliewu.me/` within a minute or two.

After that, publishing an update is just: commit → push.

**Cache busting:** every page loads `css/site.css`, `js/render.js`, and `data/*.js` with a `?v=YYYYMMDD` token. After changing any CSS/JS/data file, bump the token in all five HTML files so visitors do not get stale cached versions:

```bash
LANG=C sed -i 's/?v=[0-9]\{8\}/?v=NEW_DATE_HERE/g' *.html
```

If you later buy a custom domain, add it in Settings → Pages and create a `CNAME` file; also update the URL in `sitemap.xml`.

## Structure

```
index.html …… home (hero + bio, research areas, selected publications, recent news)
research.html … four research areas + representative papers
publications.html … full list, filterable by area, grouped by year
                    (filters sync to the URL: ?area=eda&q=agent is shareable)
news.html …… full news archive
cv.html ……… curriculum vitae (renders from data/cv.js) + PDF download
css/site.css …… the whole design system
js/render.js …… renders nav/footer + data-driven sections
data/*.js …… ALL content lives here
assets/ ……… portrait, CV pdf, favicon
```
