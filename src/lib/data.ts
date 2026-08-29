export const CATS = [
  "Wędliny",
  "Kiełbasy",
  "Mięso",
  "Wyroby garmażeryjne",
  "Produkty sezonowe",
] as const;

export type Product = {
  id: string;
  name: string;
  cat: (typeof CATS)[number];
  units: string[];
  badges: string[];
  desc: string;
};

export const PRODUCTS: Product[] = [
  { id: "p1", name: "Szynka wędzona swojska", cat: "Wędliny", units: ["kg", "szt."], badges: ["80% mięsa", "bez MOM"], desc: "Wędzona tradycyjnie na drewnie olchowym, peklowana na sucho. Krojona lub w kawałku." },
  { id: "p2", name: "Baleron pieczony", cat: "Wędliny", units: ["kg", "szt."], badges: ["bez MOM"], desc: "Karkówka pieczona w naturalnej osłonce, delikatnie przyprawiona." },
  { id: "p3", name: "Polędwica sopocka", cat: "Wędliny", units: ["kg", "szt."], badges: ["80% mięsa"], desc: "Schab wędzony, chudy, o łagodnym smaku." },
  { id: "p4", name: "Boczek wędzony parzony", cat: "Wędliny", units: ["kg"], badges: [], desc: "Warstwowy boczek wędzony i parzony, idealny na kanapki." },
  { id: "p5", name: "Kiełbasa żywiecka", cat: "Wędliny", units: ["kg", "szt."], badges: ["80% mięsa"], desc: "Gruba kiełbasa wędzona, o wyrazistym smaku." },
  { id: "p6", name: "Kiełbasa swojska podwędzana", cat: "Kiełbasy", units: ["kg", "szt."], badges: ["80% mięsa", "bez MOM"], desc: "Nasza sztandarowa kiełbasa — grubo mielona, mocno wędzona." },
  { id: "p7", name: "Kiełbasa myśliwska", cat: "Kiełbasy", units: ["kg", "paczka"], badges: ["bez MOM"], desc: "Sucha, wędzona kiełbasa w cienkiej osłonce." },
  { id: "p8", name: "Kabanosy wieprzowe", cat: "Kiełbasy", units: ["kg", "paczka"], badges: ["80% mięsa"], desc: "Cienkie, suche kabanosy o intensywnym aromacie." },
  { id: "p9", name: "Kiełbasa biała parzona", cat: "Kiełbasy", units: ["kg", "szt."], badges: ["bez MOM"], desc: "Klasyczna biała, parzona — do gotowania i pieczenia." },
  { id: "p10", name: "Krakowska sucha", cat: "Kiełbasy", units: ["kg", "szt."], badges: ["80% mięsa"], desc: "Podsuszana, w grubej osłonce, z wyraźnym kawałkiem mięsa." },
  { id: "p11", name: "Karkówka wieprzowa b/k", cat: "Mięso", units: ["kg"], badges: ["bez MOM"], desc: "Świeża karkówka bez kości, do pieczenia i grillowania." },
  { id: "p12", name: "Schab środkowy b/k", cat: "Mięso", units: ["kg"], badges: [], desc: "Chudy schab bez kości, równo krojony." },
  { id: "p13", name: "Łopatka wieprzowa", cat: "Mięso", units: ["kg"], badges: [], desc: "Łopatka do mielenia, duszenia i pieczenia." },
  { id: "p14", name: "Żeberka paski", cat: "Mięso", units: ["kg"], badges: [], desc: "Żeberka wieprzowe cięte w paski." },
  { id: "p15", name: "Golonka tylna", cat: "Mięso", units: ["kg", "szt."], badges: [], desc: "Golonka tylna, świeża." },
  { id: "p16", name: "Pasztet pieczony domowy", cat: "Wyroby garmażeryjne", units: ["szt.", "kg"], badges: ["bez MOM"], desc: "Pieczony pasztet z wątróbką, w formie." },
  { id: "p17", name: "Salceson ozorkowy", cat: "Wyroby garmażeryjne", units: ["kg", "szt."], badges: [], desc: "Salceson z dodatkiem ozorków." },
  { id: "p18", name: "Kaszanka gryczana", cat: "Wyroby garmażeryjne", units: ["kg", "szt."], badges: [], desc: "Kaszanka na kaszy gryczanej, tradycyjna receptura." },
  { id: "p19", name: "Smalec ze skwarkami", cat: "Wyroby garmażeryjne", units: ["szt."], badges: [], desc: "Domowy smalec z cebulą i skwarkami, w słoiku 300 g." },
  { id: "p20", name: "Kiełbasa z grilla", cat: "Produkty sezonowe", units: ["kg", "paczka"], badges: ["80% mięsa"], desc: "Sezonowa kiełbasa grillowa, grubo mielona." },
  { id: "p21", name: "Karczek marynowany", cat: "Produkty sezonowe", units: ["kg"], badges: ["bez MOM"], desc: "Plastry karczku w marynacie ziołowej, gotowe na grill." },
  { id: "p22", name: "Biała kiełbasa wielkanocna", cat: "Produkty sezonowe", units: ["kg", "szt."], badges: ["80% mięsa"], desc: "Sezonowa biała kiełbasa, dostępna wiosną." },
];

export type OrderStatus = "Oczekuje" | "Przyjęte" | "Zrealizowane";

export type Order = {
  id: string;
  no: string;
  date: string;
  term: string;
  status: OrderStatus;
  pos: number;
  user: string;
  shop: string;
  branch: string;
  source: "portal" | "telefon" | "e-mail";
};

export const ORDERS: Order[] = [
  { id: "0158", no: "ZAM/2026/0158", date: "23.07.2026 08:12", term: "26.07.2026", status: "Oczekuje", pos: 15, user: "Marek Nowak", shop: "Delikatesy „U Marka”", branch: "Brusy, ul. Gdańska 12", source: "portal" },
  { id: "0151", no: "ZAM/2026/0151", date: "22.07.2026 19:44", term: "25.07.2026", status: "Przyjęte", pos: 8, user: "Anna Kowalska", shop: "Sklep spożywczy „Anna”", branch: "Chojnice, ul. Rynek 4", source: "portal" },
  { id: "0149", no: "ZAM/2026/0149", date: "22.07.2026 11:03", term: "24.07.2026", status: "Przyjęte", pos: 11, user: "Obsługa (tel.)", shop: "Market „Grosik”", branch: "Kościerzyna, ul. Długa 8", source: "telefon" },
  { id: "0142", no: "ZAM/2026/0142", date: "21.07.2026 20:15", term: "24.07.2026", status: "Zrealizowane", pos: 12, user: "Anna Kowalska", shop: "Sklep spożywczy „Anna”", branch: "Chojnice, ul. Rynek 4", source: "portal" },
  { id: "0137", no: "ZAM/2026/0137", date: "20.07.2026 17:50", term: "23.07.2026", status: "Zrealizowane", pos: 6, user: "Marek Nowak", shop: "Delikatesy „U Marka”", branch: "Brusy, ul. Gdańska 12", source: "e-mail" },
];

export const ORDER_PRODUCTS: [string, string, string][] = [
  ["Kiełbasa swojska podwędzana", "8 kg", "pakować po 1 kg"],
  ["Szynka wędzona swojska", "5 kg", "plastry"],
  ["Kabanosy wieprzowe", "12 paczka", ""],
  ["Pasztet pieczony domowy", "6 szt.", ""],
];

export type Message = {
  id: string;
  title: string;
  date: string;
  important: boolean;
  unread: boolean;
  excerpt: string;
  body: string;
};

export const MESSAGES: Message[] = [
  {
    id: "m1",
    title: "Zmiana godzin przyjmowania zamówień",
    date: "20.07.2026",
    important: true,
    unread: true,
    excerpt: "Od 1 sierpnia zamówienia przyjmujemy do godziny 23:00…",
    body: "Szanowni Państwo, od 1 sierpnia 2026 zamówienia na kolejny dzień roboczy przyjmujemy do godziny 23:00. Zamówienia złożone po tej godzinie zostaną zrealizowane w następnym cyklu produkcyjnym. Prosimy o uwzględnienie zmiany przy planowaniu dostaw.",
  },
  {
    id: "m2",
    title: "Dzień wolny — 15 sierpnia",
    date: "18.07.2026",
    important: false,
    unread: true,
    excerpt: "W dniu 15 sierpnia masarnia będzie nieczynna…",
    body: "Informujemy, że 15 sierpnia (Wniebowzięcie NMP) masarnia oraz sklep firmowy będą nieczynne. Zamówienia z terminem realizacji na 15 sierpnia prosimy składać z terminem na 14 lub 16 sierpnia.",
  },
  {
    id: "m3",
    title: "Nowy produkt: Kiełbasa z grilla",
    date: "15.07.2026",
    important: false,
    unread: false,
    excerpt: "Rozpoczynamy sezon grillowy — zapraszamy…",
    body: "Rozpoczynamy sezon grillowy! W katalogu pojawiła się sezonowa Kiełbasa z grilla oraz Karczek marynowany. Produkty dostępne do odwołania.",
  },
];

export const srcLabel = (s: Order["source"]) =>
  ({ portal: "Portal", telefon: "Telefon", "e-mail": "E-mail" })[s] ?? s;
