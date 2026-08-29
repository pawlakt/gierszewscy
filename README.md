# Masarnia Brusy Gierszewscy — portal zamówień B2B

Wersja poglądowa (demo dla klienta) portalu zamówień hurtowych masarni:
portal klienta (katalog, zamówienie, historia, komunikaty) oraz panel
administracyjny (zamówienia, produkty, klienci, komunikaty, wydruk karty
zamówienia). Logowanie bez hasła — dwa przyciski wyboru roli. Dane są
przykładowe i zaszyte w kodzie (`src/lib/data.ts`); koszyk trzymany jest
w `localStorage`.

**Produkcja:** https://gierszewscy.vercel.app

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- `next/image` ze statycznymi importami zdjęć (blur placeholder, AVIF/WebP, CDN)
- Hosting: Vercel

## Rozwój lokalny

```bash
npm install
npm run dev
```

Aplikacja wstaje na [http://localhost:3000](http://localhost:3000).

## Deploy

```bash
vercel deploy --prod
```

## Struktura

```
src/
  app/            # routing: / (logowanie), /portal/* (klient), /admin/* (panel)
  components/     # wspólne komponenty UI (przyciski, karty, tabele…)
  lib/            # dane demo, koszyk, toasty, mapa zdjęć
  images/         # zdjęcia produktów i grafiki (statyczne importy)
```

---

© nublado · designed & engineered by Tomasz Pawlak
