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

Shared: `styles.css` (tokens, header, menu, social dock, footer, buttons, dropdown), `nav.js` (translates the menu and footer lists), `select.js` (the site's own dropdown, used by the forms), `assets/`.

## How the pages connect

- **One menu** on every page: Home · Flavors · The company · White label · Contact · Request a quote. The current page is marked.
- **Request a quote** (header, menu, footer, buttons) opens the Contact page on the business path: `contact.html?path=trade#help`. `?path=` also takes `questions` and `label`.
- The language (`?lang=ar` or the language button) is remembered across pages.
- The footer repeats the pages, the four flavors (each goes to its chapter on the Flavors page) and the contact details.

## Not wired yet

The two forms (Contact message, White label enquiry) check their fields and show a preview message; **nothing is sent**. Where messages go is the Dashboard's job, in a later phase.
The pages are marked `noindex` (a concept, not the live site).
