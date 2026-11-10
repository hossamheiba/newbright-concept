# New Bright website: design concept

A five-page design concept for **New Bright** (Asian-style noodles made in Saudi Arabia), in Arabic (RTL) and English.
Isolated from the main website repo: plain HTML + CSS + JS, no build step, no dependencies.
Content comes from the New Bright Company Profile and Brand Guideline (2026); Arabic is a proposed translation for review.

    cd /Users/hossamheiba/Documents/GitHub/newbright-concept
    python3 -m http.server 4390 --bind 127.0.0.1     # → http://127.0.0.1:4390/   (add ?lang=ar for Arabic)

## Pages

| Page | File | What it is |
| --- | --- | --- |
| Home | `index.html` · `app.js` | The flavor stage, the house behind the brand, the range, the idea, made in Saudi, white label, partners |
| Flavors | `flavors.html` · `flavors.css` · `flavors.js` | The four flavors, a chapter each, and everyday versatility |
| The company | `company.html` · `company.css` · `company.js` | The group, brand foundation, vision and mission, values, logo story, product concept, range, manufacturing, market, partnerships |
| White label | `whitelabel.html` · `whitelabel.css` · `whitelabel.js` | A box that folds and restyles (four design directions), then the enquiry form |
| Contact | `contact.html` · `contact.css` · `contact.js` | Channels, three ways in (questions, business, white label) with the message form, head office, social accounts |

Shared: `styles.css` (tokens, header, menu, social dock, footer, buttons, dropdown, opening film), `nav.js` (translates the menu and footer lists), `select.js` (the site's own dropdown, used by the forms), `intro.js` (the opening film, home page only), `assets/`.

## The opening film (home page only)

`intro.js` plays `assets/video/intro.mp4` (a WebM copy is the fallback) full screen, silent, with a *Skip intro* button; when it ends, or is skipped, the page opens behind an iris that narrows on the middle of the screen while the hero moves in.
It shows on a fresh visit and on every refresh. It does not replay when a visitor clicks *Home* from another page, and it is skipped for visitors who ask their device for reduced motion, or when the browser will not autoplay or the film stalls (a slow connection opens the site after a few seconds).

## How the pages connect

- **One menu** on every page: Home · Flavors · The company · White label · Contact · Request a quote. The current page is marked.
- **Request a quote** (header, menu, footer, buttons) opens the Contact page on the business path: `contact.html?path=trade#help`. `?path=` also takes `questions` and `label`.
- The language (`?lang=ar` or the language button) is remembered across pages.
- The footer repeats the pages, the four flavors (each goes to its chapter on the Flavors page) and the contact details.

## Accessibility and the company's review (Nov 2026)

- The moving strips (Company, Contact) have a pause/play button; the box on White label and the 3D pack on Home have turn buttons and arrow-key control; pictures carry descriptions in both languages; the section rail on Home names each stop on hover and focus.
- The tagline is said once, in the Home hero. The closing band on every page asks "Ready to partner with us?"; the footer carries the logo and the two lines only.
- Home's range panels end in **See the flavor**, which opens that flavor's chapter on the Flavors page.
- The footer on every page carries the phone, email and head-office address (one list, translated in `nav.js`); no page repeats them above it.
- The 3D boxes (Home and White label) keep the angle where they are let go, and show every side (no blend modes on the box: Chrome stops drawing a 3D box whose front turns away when a face uses one).
- The Home's facts (2021 · Saudi Arabia · Al Khobar …) are a spec card: label above value.
- Contact → business path holds a real quote form (business, order, person) with a "what happens next" list.

## Not wired yet

The three forms (Contact message, Contact quote request, White label enquiry) check their fields and show a preview message; **nothing is sent**. Where messages go is the Dashboard's job, in a later phase.
The pages are marked `noindex` (a concept, not the live site).
