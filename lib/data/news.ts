export interface NewsItem {
  id: string
  title: string
  excerpt: string
  content: string
  category: "trg" | "zakonodaja" | "nasveti" | "investicije"
  date: string
  isFeatured: boolean
}

export const newsCategoryLabels: Record<string, string> = {
  trg: "Trg",
  zakonodaja: "Zakonodaja",
  nasveti: "Nasveti",
  investicije: "Investicije",
}

export const news: NewsItem[] = [
  {
    id: "1",
    title: "Cene stanovanj v Ljubljani ponovno narasle za 8 % v zadnjem četrtletju",
    excerpt: "Statistični urad RS poroča o nadaljnji rasti cen nepremičnin v prestolnici. Povprečna cena kvadratnega metra stanovanja v Ljubljani je dosegla 3.850 €, kar je 8 % več kot v enakem obdobju lani.",
    content: "Podrobna analiza trga nepremičnin v Ljubljani kaže na nadaljnjo rast cen stanovanj...",
    category: "trg",
    date: "2026-03-01",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Vlada napoveduje spremembe davčne zakonodaje za nepremičnine",
    excerpt: "Ministrstvo za finance je objavilo predlog sprememb Zakona o dohodnini, ki bi vplivale na obdavčitev kapitalskih dobičkov iz prodaje nepremičnin. Spremembe naj bi začele veljati s 1. januarjem 2027.",
    content: "Predlagane spremembe zakonodaje vključujejo znižanje obdobja za oprostitev davka...",
    category: "zakonodaja",
    date: "2026-02-25",
    isFeatured: false,
  },
  {
    id: "3",
    title: "5 napak, ki jih naredite pri prvem nakupu nepremičnine",
    excerpt: "Strokovnjaki opozarjajo na najpogostejše napake prvih kupcev — od precenjevanja lastnega proračuna do zanemarjanja skritih stroškov. Preberite, kako se jim izogniti.",
    content: "Pri prvem nakupu nepremičnine je ključno poznavanje celotnega postopka...",
    category: "nasveti",
    date: "2026-02-20",
    isFeatured: false,
  },
  {
    id: "4",
    title: "Investicije v nepremičnine na obali prinašajo najvišji donos",
    excerpt: "Analiza trga kratkoročnih najemov kaže, da nepremičnine na slovenski obali prinašajo do 7 % letnega donosa, kar jih uvršča med najdonosnejše investicije v državi.",
    content: "Kratkoročni najemi preko platform kot je Airbnb so na slovenski obali izjemno donosni...",
    category: "investicije",
    date: "2026-02-15",
    isFeatured: false,
  },
  {
    id: "5",
    title: "ECB napoveduje nadaljnje zniževanje obrestnih mer",
    excerpt: "Evropska centralna banka je napovedala postopno zniževanje referenčne obrestne mere v letu 2026, kar bi lahko pozitivno vplivalo na dostopnost stanovanjskih kreditov.",
    content: "Napoved ECB o nižanju obrestnih mer je dobra novica za vse, ki načrtujejo nakup nepremičnine...",
    category: "trg",
    date: "2026-02-10",
    isFeatured: false,
  },
  {
    id: "6",
    title: "Novi stanovanjski projekti v Mariboru — kaj pričakovati v 2026",
    excerpt: "V Mariboru je v gradnji več kot 500 novih stanovanjskih enot. Pregled najpomembnejših projektov in pričakovanih cen na kvadratni meter.",
    content: "Maribor doživlja stanovanjski razcvet z več velikimi projekti v gradnji...",
    category: "investicije",
    date: "2026-02-05",
    isFeatured: false,
  },
]
