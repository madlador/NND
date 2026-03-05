export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: "nakup" | "prodaja" | "najem" | "kredit" | "davki" | "postopki" | "pravni"
  readingTime: number
  date: string
  faq: { question: string; answer: string }[]
  tags: string[]
}

export const categoryLabels: Record<string, string> = {
  nakup: "Nakup",
  prodaja: "Prodaja",
  najem: "Najem",
  kredit: "Kredit",
  davki: "Davki",
  postopki: "Postopki",
  pravni: "Pravni vidiki",
}

export const categoryColors: Record<string, { bg: string; text: string }> = {
  nakup: { bg: "bg-gold-light", text: "text-[#92730A]" },
  prodaja: { bg: "bg-emerald-50", text: "text-emerald-800" },
  najem: { bg: "bg-sky-50", text: "text-sky-800" },
  kredit: { bg: "bg-rose-50", text: "text-rose-800" },
  davki: { bg: "bg-stone-100", text: "text-stone-700" },
  postopki: { bg: "bg-orange-50", text: "text-orange-800" },
  pravni: { bg: "bg-stone-200", text: "text-stone-800" },
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "kako-pridobiti-stanovanjski-kredit",
    title: "Kako pridobiti stanovanjski kredit v Sloveniji",
    excerpt: "Vse, kar morate vedeti o postopku pridobivanja stanovanjskega kredita — od priprave dokumentacije do podpisa pogodbe z banko.",
    content: `Pridobitev stanovanjskega kredita je za večino Slovencev ključni korak pri nakupu nepremičnine. Postopek se začne z oceno vaše kreditne sposobnosti, ki jo banka izračuna na podlagi vaših prihodkov, obstoječih obveznosti in življenjskih stroškov.\n\nPred obiskom banke pripravite naslednje dokumente: potrdilo o zaposlitvi, zadnje tri plačilne liste, davčno izjavo za preteklo leto, osebni dokument in dokumentacijo o nepremičnini, ki jo želite kupiti. Priporočljivo je, da imate pripravljenih vsaj 20 % lastnih sredstev.\n\nBanke v Sloveniji ponujajo fiksne in variabilne obrestne mere. Fiksna obrestna mera vam zagotavlja enake mesečne obroke skozi celotno obdobje odplačevanja, medtem ko se variabilna obrestna mera spreminja glede na referenčno obrestno mero EURIBOR.\n\nPred podpisom kreditne pogodbe natančno preučite vse pogoje — efektivno obrestno mero (EOM), stroške odobritve, zavarovanja in morebitne kazni za predčasno odplačilo. Priporočamo, da pridobite ponudbe vsaj treh bank in jih primerjate.\n\nNe pozabite, da je del postopka tudi cenitev nepremičnine s strani pooblaščenega cenilca, ki jo običajno organizira banka. Stroški cenitve so na vaš račun in znašajo med 200 in 500 €.`,
    category: "kredit",
    readingTime: 8,
    date: "2026-02-15",
    faq: [
      { question: "Koliko lastnih sredstev potrebujem?", answer: "Večina bank zahteva vsaj 20 % lastnih sredstev od vrednosti nepremičnine. Nekatere banke ponujajo tudi 90 % financiranje, vendar z višjo obrestno mero." },
      { question: "Kako dolgo traja odobritev kredita?", answer: "Postopek odobritve stanovanjskega kredita običajno traja od 2 do 4 tedne, odvisno od banke in popolnosti vaše dokumentacije." },
      { question: "Ali lahko kredit odplačam predčasno?", answer: "Da, predčasno odplačilo je mogoče, vendar nekatere banke zaračunajo nadomestilo za predčasno odplačilo, ki je zakonsko omejeno na 1 % preostalega dolga." },
    ],
    tags: ["kredit", "banka", "obrestna mera", "financiranje"],
  },
  {
    id: "2",
    slug: "notarski-stroski-pri-nakupu",
    title: "Notarski stroški pri nakupu nepremičnine",
    excerpt: "Podroben pregled notarskih stroškov, ki vas čakajo pri nakupu stanovanja ali hiše v Sloveniji.",
    content: `Notarski stroški so neizogiben del nakupa nepremičnine v Sloveniji. Notar igra ključno vlogo pri overitvi kupoprodajne pogodbe, ki mora biti po zakonu sklenjena v obliki notarskega zapisa ali vsaj overjena pri notarju.\n\nNotarski stroški se izračunajo na podlagi notarske tarife, ki jo določa Zakon o notariatu. Stroški so odvisni od vrednosti pravnega posla — višja kot je cena nepremičnine, višji so notarski stroški, čeprav se odstotek z višjo vrednostjo znižuje.\n\nOrientacijski stroški za nakup nepremičnine v vrednosti 200.000 € znašajo približno 500-800 € za notarski zapis kupoprodajne pogodbe. Dodatno je treba plačati overitev podpisov (približno 30-50 € na podpis) in morebitne prepise pogodb.\n\nPoleg notarskih stroškov ne pozabite na davek na promet nepremičnin, ki znaša 2 % od pogodbene vrednosti, ter na sodno takso za vpis lastninske pravice v zemljiško knjigo.\n\nPriporočamo, da pred podpisom pogodbe zahtevate predračun notarskih stroškov, ki vam ga mora notar pripraviti brezplačno.`,
    category: "postopki",
    readingTime: 6,
    date: "2026-02-10",
    faq: [
      { question: "Kdo plača notarske stroške?", answer: "Po dogovoru, vendar je v praksi najpogosteje, da notarske stroške plača kupec nepremičnine." },
      { question: "Ali si lahko izberem notarja?", answer: "Da, izbira notarja je prosta. Priporočamo, da izberete notarja v kraju, kjer se nepremičnina nahaja." },
      { question: "Kakšen je davek na promet nepremičnin?", answer: "Davek na promet nepremičnin znaša 2 % od pogodbene vrednosti nepremičnine. Plača ga kupec v 15 dneh od overitve pogodbe." },
    ],
    tags: ["notar", "stroški", "pogodba", "davek"],
  },
  {
    id: "3",
    slug: "koraki-do-nakupa-stanovanja",
    title: "Koraki do nakupa stanovanja — vodič od A do Ž",
    excerpt: "Celoten postopek nakupa stanovanja v Sloveniji, korak za korakom — od iskanja do vpisa v zemljiško knjigo.",
    content: `Nakup stanovanja je ena najpomembnejših življenjskih odločitev. Da bo postopek tekel gladko, smo pripravili celovit vodič po vseh korakih, ki vas čakajo.\n\n1. KORAK: Določite proračun. Preden začnete z iskanjem, jasno opredelite, koliko si lahko privoščite. Upoštevajte ne le ceno nepremičnine, ampak tudi dodatne stroške (notar, davek, provizija, selitev).\n\n2. KORAK: Iskanje nepremičnine. Uporabite portale kot je ta, obiščite nepremičninske agencije in spremljajte oglase. Pripravite si seznam prioritet — lokacija, velikost, stanje.\n\n3. KORAK: Ogled in preverjanje. Ko najdete potencialno stanovanje, opravite temeljit ogled. Preverite stanje inštalacij, vlažnost, hrup iz okolice. Zahtevajte energetsko izkaznico.\n\n4. KORAK: Pogajanja in predpogodba. Ko se odločite, začnite pogajanja o ceni. Pogosto se sklene predpogodba (aro pogodba) z are v višini 10 % kupnine.\n\n5. KORAK: Finančna ureditev. Če potrebujete kredit, je zdaj čas za oddajo vloge na banko. Banka bo zahtevala cenitev nepremičnine.\n\n6. KORAK: Kupoprodajna pogodba pri notarju. Pogodba mora biti overjena pri notarju. Notar preveri identiteto strank in zakonitost posla.\n\n7. KORAK: Plačilo davka in vpis. Po overitvi pogodbe plačate davek na promet nepremičnin (2 %). Nato sledi vpis lastninske pravice v zemljiško knjigo.\n\n8. KORAK: Primopredaja. S prodajalcem opravite primopredajo stanovanja, pri čemer zapišete stanje števcev in predate ključe.`,
    category: "nakup",
    readingTime: 12,
    date: "2026-01-28",
    faq: [
      { question: "Koliko časa traja celoten postopek nakupa?", answer: "Od začetka iskanja do vpisa v zemljiško knjigo običajno mine 2-4 mesece, odvisno od hitrosti banke in notarskih postopkov." },
      { question: "Ali potrebujem nepremičninskega agenta?", answer: "Ne nujno, vendar je priporočljivo, posebej za prvič kupce. Agent vam pomaga pri pogajanjih, preverjanju dokumentacije in vodenju postopka." },
      { question: "Kakšni so skupni stroški nakupa poleg cene?", answer: "Računajte na približno 3-5 % dodatnih stroškov: 2 % davek na promet, notarski stroški, provizija agencije (do 4 %), sodna taksa za vpis." },
    ],
    tags: ["nakup", "postopek", "vodič", "stanovanje"],
  },
  {
    id: "4",
    slug: "najemna-pogodba-kaj-mora-vsebovati",
    title: "Najemna pogodba — kaj mora vsebovati",
    excerpt: "Ključne sestavine najemne pogodbe v Sloveniji in na kaj morate biti pozorni pred podpisom.",
    content: `Najemna pogodba je temelj razmerja med najemodajalcem in najemnikom. V Sloveniji mora biti sklenjena v pisni obliki in registrirana pri GURS (Geodetska uprava RS).\n\nVsaka najemna pogodba mora obvezno vsebovati: podatke o pogodbenih strankah (najemodajalec in najemnik), natančen opis nepremičnine (naslov, velikost, oprema), višino najemnine in način plačila, rok trajanja najema, pogoje za odpoved pogodbe ter pravice in obveznosti obeh strank.\n\nPosebno pozornost namenite klavzulam o varščini (kavciji), ki običajno znaša 1-3 mesečne najemnine, pogojem za zvišanje najemnine, obveznostim glede vzdrževanja in popravil ter pogojem za predčasno prekinitev pogodbe.\n\nNajemnik ima zakonsko pravico do minimalnega odpovednega roka 90 dni (razen v primerih hujših kršitev). Najemodajalec ne sme vstopiti v stanovanje brez predhodnega dogovora z najemnikom.\n\nPriporočamo, da pred podpisom pogodbe natančno pregledate stanje stanovanja in sestavite zapisnik o primopredaji z opisom stanja opreme in števcev.`,
    category: "najem",
    readingTime: 7,
    date: "2026-02-05",
    faq: [
      { question: "Ali mora biti najemna pogodba registrirana?", answer: "Da, zakon zahteva registracijo najemne pogodbe pri GURS v 15 dneh od sklenitve. Neregistrirana pogodba je sicer veljavna, a najemodajalec tvega globo." },
      { question: "Koliko znaša varščina?", answer: "Varščina (kavcija) običajno znaša 1-3 mesečne najemnine. Ob koncu najema jo mora najemodajalec vrniti, zmanjšano za morebitne škode." },
      { question: "Kdaj lahko najemodajalec odpove pogodbo?", answer: "Najemodajalec lahko odpove pogodbo le iz zakonsko določenih razlogov (neplačevanje, namerna škoda, podnajemnikarstvo brez soglasja) z odpovednim rokom 90 dni." },
    ],
    tags: ["najem", "pogodba", "najemnik", "pravice"],
  },
  {
    id: "5",
    slug: "energetska-izkaznica-nepremicnine",
    title: "Energetska izkaznica nepremičnine — vse kar morate vedeti",
    excerpt: "Kaj je energetska izkaznica, kdaj jo potrebujete in kako vpliva na vrednost vaše nepremičnine.",
    content: `Energetska izkaznica je javna listina, ki prikazuje energetsko učinkovitost stavbe. V Sloveniji je obvezna pri prodaji ali oddaji nepremičnine od leta 2014.\n\nIzkaznica razvršča stavbe v energetske razrede od A1 (najbolj učinkovita) do G (najmanj učinkovita). Razred se določi na podlagi izračunane letne porabe energije za ogrevanje, hlajenje, pripravo tople vode in razsvetljavo.\n\nEnergertsko izkaznico lahko izdela le pooblaščeni neodvisni strokovnjak, ki je vpisan v register pri ministrstvu. Stroški izdelave znašajo od 150 do 400 € za stanovanje in od 300 do 600 € za hišo.\n\nIzkaznica velja 10 let. Prodajalec jo mora predložiti kupcu pred sklenitvijo pogodbe, najemodajalec pa najemniku pred podpisom najemne pogodbe. Nepredložitev izkaznice je prekršek.\n\nEnergertski razred pomembno vpliva na vrednost nepremičnine. Stanovanja z razredom A ali B dosegajo do 15 % višjo ceno od primerljivih stanovanj z razredom D ali E. Vlaganje v energetsko sanacijo se tako dolgoročno splača.`,
    category: "postopki",
    readingTime: 5,
    date: "2026-01-20",
    faq: [
      { question: "Koliko stane energetska izkaznica?", answer: "Stroški izdelave znašajo od 150 do 400 € za stanovanje in od 300 do 600 € za hišo, odvisno od velikosti in zahtevnosti objekta." },
      { question: "Ali je energetska izkaznica obvezna?", answer: "Da, obvezna je pri vsaki prodaji ali oddaji nepremičnine. Izjema so le stavbe, ki so kulturni spomeniki, in nekatere manjše stavbe." },
      { question: "Kdo lahko izdela energetsko izkaznico?", answer: "Samo pooblaščeni neodvisni strokovnjak, vpisan v register pri Ministrstvu za okolje in prostor." },
    ],
    tags: ["energetska izkaznica", "učinkovitost", "razred", "obveznost"],
  },
  {
    id: "6",
    slug: "davcne-obveznosti-pri-prodaji",
    title: "Davčne obveznosti pri prodaji nepremičnine",
    excerpt: "Pregled davkov, ki jih morate plačati pri prodaji nepremičnine v Sloveniji — od davka na promet do dohodnine od kapitalskega dobička.",
    content: `Pri prodaji nepremičnine v Sloveniji vas čakajo različne davčne obveznosti, ki jih je pomembno poznati vnaprej.\n\nDavek na promet nepremičnin znaša 2 % od pogodbene vrednosti. Formalno ga plača kupec, vendar se v praksi pogosto dogovorita drugače. Davek je treba plačati v 15 dneh od overitve pogodbe pri notarju.\n\nDohodnina od kapitalskega dobička se plača, če nepremičnino prodate z dobičkom. Davčna stopnja je odvisna od časa lastništva: v prvih 5 letih znaša 25 %, po 5 letih 20 %, po 10 letih 15 %, po 15 letih 10 %, po 20 letih pa ste davka oproščeni.\n\nIzjema velja za prodajo stanovanjske nepremičnine, v kateri ste imeli stalno bivališče vsaj zadnja 3 leta pred prodajo — v tem primeru ste oproščeni dohodnine od kapitalskega dobička.\n\nDDV se plača le pri nakupu novogradenj od podjetja (investitorja). Stopnja DDV za stanovanjske nepremičnine je znižana — 9,5 %. Pri rabljenih nepremičninah med fizičnimi osebami DDV ni.`,
    category: "davki",
    readingTime: 9,
    date: "2026-02-20",
    faq: [
      { question: "Ali moram plačati davek, če prodam stanovanje po 20 letih?", answer: "Če ste nepremičnino imeli v lasti več kot 20 let, ste oproščeni dohodnine od kapitalskega dobička. Davek na promet nepremičnin (2 %) pa ostaja." },
      { question: "Kako se izračuna kapitalski dobiček?", answer: "Kapitalski dobiček je razlika med prodajno in nabavno vrednostjo. Od nabavne vrednosti se lahko odštejejo tudi normirani stroški (1 % na leto lastništva) in stroški investicij." },
      { question: "Kdaj se plača DDV namesto davka na promet?", answer: "DDV (9,5 %) se plača pri nakupu novogradnje od investitorja (podjetja). V tem primeru se davek na promet nepremičnin ne plača." },
    ],
    tags: ["davki", "kapitalski dobiček", "promet nepremičnin", "DDV"],
  },
  {
    id: "7",
    slug: "prodaja-nepremicnine-brez-agencije",
    title: "Prodaja nepremičnine brez agencije — je vredno?",
    excerpt: "Prednosti in slabosti samostojne prodaje nepremičnine ter praktični nasveti za uspešno prodajo.",
    content: `Prodaja nepremičnine brez posredovanja nepremičninske agencije vam lahko prihrani od 2 do 4 % provizije, kar pri povprečni ceni stanovanja v Ljubljani pomeni prihranek 5.000-10.000 €.\n\nVendar je treba upoštevati, da samostojna prodaja zahteva čas, znanje in trud. Sami boste morali pripraviti oglas s kakovostnimi fotografijami, voditi oglede, se pogajati s kupci, pripraviti vso dokumentacijo in koordinirati notarski postopek.\n\nKljučni koraki pri samostojni prodaji:\n1. Pripravite nepremičnino — očistite, popravite manjše napake, po možnosti profesionalno fotografirajte.\n2. Določite realno ceno — primerjajte s podobnimi nepremičninami na trgu.\n3. Objavite oglas na več portalih hkrati.\n4. Vodite oglede — bodite pripravljeni odgovarjati na vprašanja kupcev.\n5. Pogajanja — imejte jasno spodnjo mejo, a bodite pripravljeni na kompromis.\n6. Dokumentacija — zagotovite energetsko izkaznico, zemljiškoknjižni izpisek, potrdilo o namembnosti.\n\nSamostojna prodaja je smiselna, če imate čas in osnovno poznavanje nepremičninskega trga. V nasprotnem primeru je provizija agencije dobra investicija.`,
    category: "prodaja",
    readingTime: 7,
    date: "2026-01-15",
    faq: [
      { question: "Koliko znaša provizija nepremičninske agencije?", answer: "Provizija v Sloveniji običajno znaša 2-4 % od prodajne cene, z minimalnim zneskom 2.000-3.000 €. Plača jo naročnik storitve (običajno prodajalec)." },
      { question: "Katere dokumente potrebujem za prodajo?", answer: "Potrebujete: energetsko izkaznico, zemljiškoknjižni izpisek, potrdilo o namembnosti prostora, zadnji račun za komunalne storitve in osebni dokument." },
      { question: "Kako dolgo traja prodaja brez agencije?", answer: "Odvisno od lokacije in cene. V Ljubljani se stanovanja prodajajo v 1-3 mesecih, na podeželju pa lahko traja 6 mesecev ali več." },
    ],
    tags: ["prodaja", "agencija", "provizija", "samostojno"],
  },
  {
    id: "8",
    slug: "pravne-pasti-pri-nakupu",
    title: "Pravne pasti pri nakupu nepremičnine",
    excerpt: "Na katere pravne zadeve morate biti posebej pozorni pri nakupu stanovanja ali hiše v Sloveniji.",
    content: `Nakup nepremičnine je kompleksen pravni posel, pri katerem se skrivajo številne pasti. Poznavanje najpogostejših vas lahko obvaruje pred velikimi težavami.\n\nZemljiškoknjižno stanje: Pred nakupom vedno preverite stanje v zemljiški knjigi. Preverite, ali je prodajalec res lastnik, ali na nepremičnini ni vpisanih hipotek, služnosti, prepovedi odtujitve ali drugih bremen.\n\nGradbeno dovoljenje in uporabno dovoljenje: Preverite, ali je bila nepremičnina zgrajena z veljavnim gradbenim dovoljenjem in ali ima uporabno dovoljenje. Nepremičnina brez teh dovoljenj je pravno problematična.\n\nEtažna lastnina: Pri nakupu stanovanja preverite, ali je vzpostavljena etažna lastnina. Brez nje ne morete biti vpisani kot lastnik posameznega dela stavbe.\n\nSkrite napake: Po zakonodaji imate pravico uveljavljati skrite napake 6 mesecev po odkritju, vendar najkasneje 2 leti po prevzemu. Dokumentirajte stanje ob prevzemu.\n\nPredkupna pravica: Občina ima predkupno pravico pri kmetijskih zemljiščih in nepremičninah v območjih prostorskih aktov. Preverite, ali je potrebno pridobiti potrdilo o neveljavljanju predkupne pravice.`,
    category: "pravni",
    readingTime: 10,
    date: "2026-02-25",
    faq: [
      { question: "Kako preverim stanje v zemljiški knjigi?", answer: "Zemljiško knjigo lahko brezplačno preverite na portalu eSodstvo (https://evlozisce.sodisce.si/). Potrebujete le naslov ali parcelno številko nepremičnine." },
      { question: "Kaj storiti, če na nepremičnini obstaja hipoteka?", answer: "Hipoteka se mora izbrisati pred ali ob prodaji. Običajno se del kupnine nameni za poplačilo kredita, preostanek pa prejme prodajalec." },
      { question: "Ali potrebujem odvetnika pri nakupu?", answer: "Zakonsko ni obvezno, vendar je priporočljivo, zlasti pri dragih nepremičninah ali zapletenih primerih. Odvetnik pregleda pogodbo in varuje vaše interese." },
    ],
    tags: ["pravo", "pasti", "zemljiška knjiga", "dovoljenje"],
  },
]
