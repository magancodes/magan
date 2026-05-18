# maganjot singh — digital notebook

A black, editorial portfolio. Built like a founder/operator's notebook at 3am, not a CV.

## design system

| token             | value                       |
| ----------------- | --------------------------- |
| background        | `#000000`                   |
| primary text      | `#F5F5F5`                   |
| secondary text   | `#9A9A9A`                   |
| lines             | `rgba(255,255,255,0.12)`    |
| container width   | `520px`                     |
| left padding      | `18vw`                      |
| top spacing       | `120px`                     |
| body              | `15–17px / 1.7` thin sans   |
| hero name         | serif, line-height `0.88`, font-weight `200` |

No gradients. No accent colors. No glowing buttons. Dark mode only.

## stack

- **Next.js 14** (App Router)
- **Tailwind CSS** for tokens + atoms
- **Framer Motion** for opacity / translateY / blur reveals
- **GSAP** for SplitText-style char/word reveals
- **Lenis** for heavy, cinematic smooth scroll
- SVG grain overlay + soft vignette
- Custom soft-lag cursor (difference blend)

## fonts

The spec calls for Canela / Cormorant Garamond / PP Editorial New (serif) and Gilroy / Suisse Intl / Neue Montreal Thin (sans). This repo ships with their closest free analogs loaded over Google Fonts:

- **Cormorant Garamond** (serif)
- **Inter Tight Thin** (sans)

Drop the paid faces into `/public/fonts` and update the `@font-face` declarations in `app/globals.css` whenever you license them.

## run

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## structure

```
app/
  layout.tsx        root layout + grain + cursor + smooth scroll
  page.tsx          composes all 8 sections
  globals.css       design tokens, typography primitives, grain, cursor
components/
  Cursor.tsx        soft-lag white-bordered cursor (difference blend)
  SmoothScroll.tsx  Lenis provider
  Reveal.tsx        opacity + blur + translateY reveal
  SplitTextReveal.tsx   GSAP char/word reveal (no paid plugin)
  Column.tsx        the narrow 520px column with 18vw left padding
  sections/
    Hero.tsx        MAGANJOT / SINGH — dominating the page
    Intro.tsx       hey, i'm maganjot
    Saturn.tsx      some problems don't come with job descriptions.
    InterIIT.tsx    2000 people. 23 IITs. one shot.
    Philosophy.tsx  chaos wastes human potential.
    Projects.tsx    minimal floating underlined links
    Thoughts.tsx    poetic fragments
    Contact.tsx     email / linkedin / github — still building.
```

## what this is not

- not a CV
- not a hire-me page
- not testimonials, skill bars, gradients, or floating blobs

it is a notebook for someone who builds whether anyone watches or not.
