export type Locale = "et" | "en" | "ru";

export const locales: { code: Locale; label: string }[] = [
  { code: "et", label: "EST" },
  { code: "en", label: "ENG" },
  { code: "ru", label: "РУС" },
];

export const defaultLocale: Locale = "et";

export interface FeatureItem {
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ReviewItem {
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
}

export interface Dictionary {
  nav: { links: string[]; cta: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    phoneLabel: string;
    detailsLabel: string;
    details: string[];
  };
  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    photoAlts: string[];
    photoCaptions: string[];
    journeyTitle: string;
    journey: { title: string; detail: string }[];
  };
  suitedFor: { title: string; items: string[] };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    adaptabilityTitle: string;
    adaptabilityText: string;
    stages: string[];
    timelineStart: string;
    timelineEnd: string;
    items: FeatureItem[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    storySubtitle: string;
    storyNote: string;
    curatedCaptions: string[];
    curatedAlts: string[];
    viewFull: string;
    archiveTitle: string;
    filters: { all: string; photo: string; video: string };
    photoLabel: string;
    videoLabel: string;
    note: string;
    showAll: string;
    showLess: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    lead: string;
    factors: FeatureItem[];
    offerEyebrow: string;
    offerTitle: string;
    offerText: string;
    responseNote: string;
    packageName: string;
    priceNote: string;
    includes: string[];
    cta: string;
    durationNote: string;
  };
  trust: { eyebrow: string; title: string; items: FeatureItem[] };
  faq: { eyebrow: string; title: string; items: FaqItem[] };
  reviews: {
    eyebrow: string;
    title: string;
    badge: string;
    leaveReview: string;
    prev: string;
    next: string;
    pageOf: string;
    modalTitle: string;
    formName: string;
    formNamePlaceholder: string;
    formRole: string;
    formRolePlaceholder: string;
    formRating: string;
    formText: string;
    formTextPlaceholder: string;
    formSubmit: string;
    formCancel: string;
    thankYouTitle: string;
    thankYouText: string;
    thankYouClose: string;
    items: ReviewItem[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    telegramCta: string;
    callLabel: string;
  };
  location: {
    eyebrow: string;
    title: string;
    addressLabel: string;
    addressText: string;
    howToLabel: string;
    howToText: string;
    parkingLabel: string;
    parkingText: string;
    openInMaps: string;
  };
  footer: {
    tagline: string;
    linksTitle: string;
    contactTitle: string;
    rights: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  et: {
    nav: {
      links: ["Programm", "Galerii", "Hind", "Miks meie", "KKK", "Kontakt"],
      cta: "Küsi pakkumist",
    },
    hero: {
      eyebrow: "SUVINE RANNAÜRITUS · STROOMI RAND",
      title: "Suvine firmapidu rannas — SUP, tiimitöö ja päikeseloojang",
      subtitle:
        "Selle aasta firmaüritus ei ole igav bankett. Meri, liiv ja päike — ning tiim, kes naeratab sellele veel aasta pärastki.",
      ctaPrimary: "Broneeri kuupäev",
      ctaSecondary: "Vaata programmi",
      phoneLabel: "Kiire vastus",
      detailsLabel: "Ürituse põhiinfo",
      details: ["Stroomi rand, Tallinn", "3–4 tundi", "Personaalne programm"],
    },
    intro: {
      eyebrow: "TIME TO SURF",
      title: "Kõik on valmis — tulge lihtsalt kohale",
      paragraphs: [
        "Aitab igavatest restoranidest ja formaalsest istumisest. On aeg tiim päriselt taaskäivitada — läbi hoo, liikumise, mere ja naeru.",
        "Loome teie firmale unustamatu suvepäeva Tallinna Stroomi rannas: tiimitöö, SUP-lauasõit merel ja soe õhtu lõkketule ääres.",
        "Individuaalne programm on alati võimalik — helistage ja leiame koos parima lahenduse.",
      ],
      photoAlts: ["Meeskond valmistub koos SUP-lauasõiduks", "Valmis rannapaviljon külalistega"],
      photoCaptions: ["Päev algab koos", "Kõik on teie jaoks valmis"],
      journeyTitle: "Teie päev mere ääres",
      journey: [
        { title: "Saabumine", detail: "Teie meeskond saabub — kõik on juba valmis." },
        { title: "Ühine päev", detail: "Hoiame programmi, tempot ja kõiki detaile." },
        { title: "Soe õhtu", detail: "Aega vestelda, puhata ja lihtsalt koos olla." },
      ],
    },
    suitedFor: {
      title: "Sobib suurepäraselt:",
      items: [
        "Sünnipäevad",
        "Firmapäevad",
        "Oma üritused, mille eesmärk on lihtsalt hästi aega veeta",
      ],
    },
    features: {
      eyebrow: "PROGRAMM",
      title: "Mis teid ees ootab",
      subtitle:
        "Keskmine kestus 3–4 tundi. Programmi saab alati täiendada ja kohandada vastavalt soovile.",
      adaptabilityTitle: "Alati paindlik",
      adaptabilityText: "Valime tegevused vastavalt ilmale, grupi tempole ja teie meeskonna iseloomule.",
      stages: ["Algus", "Hoog", "Meri", "Looming", "Päikeseloojang", "Finaal"],
      timelineStart: "Kohtume rannas",
      timelineEnd: "Lahkute ühise looga",
      items: [
        {
          title: "Rannatiimitöö vau-efektiga",
          desc: "Jaotumine meeskondadesse, lõbus jäälõhkuja „Merisõlm“, hasartsed teatevõistlused ja ühismissioonid, mis toovad esile tõelise meeskonnanaeru ja usalduse.",
        },
        {
          title: "Väljakutsed, kus kõik avanevad",
          desc: "Mängud „Pime surfar“, „Usaldustorn“, „Kookospähkli-jooks“, köieveab liival — ja palju muud!",
        },
        {
          title: "SUP-sõit merel (Stand Up Paddle)",
          desc: "Instruktorite juhendamine ja ühine veeleminek — koos fotosessiooniga laualt ja/või droonilt. Need pole lihtsalt pildid, vaid elamused, mida tahad ikka ja jälle vaadata.",
        },
        {
          title: "Loominguline blokk „Meeskonna toteem“",
          desc: "Loome teie tiimi sümboli looduslikest materjalidest. Lõbus ja sügavamõtteline tegevus, mis tuleb alati hingestatud ja unikaalne.",
        },
        {
          title: "Päikeseloojang, lõke, kerged suupisted ja muusika",
          desc: "Lõpetuseks hubane õhkkond, kus saab lõõgastuda, vestelda, süüa head-paremat ja lihtsalt nautida hetke koos kolleegidega.",
        },
        {
          title: "Autasustamine ja mälestusfotod",
          desc: "Päeva parima meeskonna auhinna üleandmine, sümboolsed suveniirid, ühine foto vee ääres — särav punkt teie firma elu peatükile.",
        },
      ],
    },
    gallery: {
      eyebrow: "HETKED RANNAST",
      title: "Galerii",
      subtitle: "63 fotot ja 4 videot varasematest üritustest. Klõpsa suurendamiseks.",
      storySubtitle: "Üks päev mere ääres — esimesest kohtumisest kuni sooja õhtuni koos.",
      storyNote: "Mitte lihtsalt fotod. Hetked, millest saab teie meeskonna ühine lugu.",
      curatedCaptions: ["Atmosfäär", "Inimesed", "Detailid", "Varustus", "Päeva finaal"],
      curatedAlts: ["Time to Surf ürituse atmosfäär mere ääres", "Meeskond valmistub SUP-sõiduks", "Ettevalmistatud rannapaviljoni detailid", "SUP-lauad on meeskonnale valmis", "Ürituse soe finaal rannas"],
      viewFull: "Vaata kogu galeriid",
      archiveTitle: "Kogu sündmuste arhiiv",
      filters: { all: "Kõik", photo: "Fotod", video: "Videod" },
      photoLabel: "Foto",
      videoLabel: "Video",
      note: "Lisage oma failid kausta /public/gallery — pildid ilmuvad siia automaatselt.",
      showAll: "Näita kõiki",
      showLess: "Näita vähem",
    },
    pricing: {
      eyebrow: "INVESTEERING",
      title: "Mitte pakett. Teie meeskonna päev.",
      lead: "Kaks meeskonda ei ole kunagi ühesugused. Seepärast kujuneb hind teie grupi, eesmärgi ja soovitud päevaformaadi järgi — maksate ainult selle eest, mis loob teie tiimile väärtust.",
      factors: [
        { title: "Personaalne programm", desc: "Paneme päeva kokku teie eesmärgi, tempo ja meeskonna iseloomu järgi." },
        { title: "Tegevuste valik", desc: "SUP, tiimitöö, loominguline osa või rahulikum formaat — ainult sobiv kombinatsioon." },
        { title: "Grupi suurus", desc: "Arvestame osalejate arvu, instruktorite meeskonna ja vajaliku varustusega." },
        { title: "Lisateenused", desc: "Toitlustus, foto ja video, pikem õhtu või erilahendus lisanduvad ainult soovi korral." },
      ],
      offerEyebrow: "Personaalne pakkumine",
      offerTitle: "Koostame teie meeskonnale täpse päeva ja hinna",
      offerText: "Kirjutage meile kuupäev, osalejate arv ja paar sõna oma soovidest. Vastame konkreetse, läbipaistva ettepanekuga.",
      responseNote: "Kiire vastus Telegramis. Kohustusi ei kaasne.",
      packageName: "Pakkumine sisaldab",
      priceNote: "Baaspakett alates",
      includes: [
        "Teie meeskonnale loodud stsenaarium ja ajakava",
        "Sobivate tegevuste ning varustuse valik",
        "Arvestus kogu grupile ilma varjatud lisadeta",
        "Võimalikud lisateenused eraldi välja toodud",
      ],
      cta: "Küsi pakkumist Telegramis",
      durationNote: "Lõplik hind selgub pärast lühikest briifi",
    },
    trust: {
      eyebrow: "USALDUS",
      title: "Miks meid usaldada?",
      items: [
        {
          title: "10+ aastat kogemust",
          desc: "Oleme korraldanud rannaüritusi alates 2013. aastast. Teame, kuidas tiimi inspireerida ja pakkuda unustamatuid elamusi.",
        },
        {
          title: "Professionaalne meeskond",
          desc: "Sertifitseeritud instruktorid, saatejuhid ja tiimitöö-koolitajad — kogemus, karisma ja tähelepanu detailidele igas liigutuses.",
        },
        {
          title: "Valmis stsenaariumid + paindlikkus",
          desc: "Kasutame läbiproovitud formaate, kuid oskame kõike kohandada vastavalt teie soovidele.",
        },
        {
          title: "Ohutus ennekõike",
          desc: "Ainult kontrollitud varustus, ala nähtavus, kogenud saatjad ning ohutusstandardite täielik järgimine.",
        },
      ],
    },
    faq: {
      eyebrow: "KKK",
      title: "Korduma kippuvad küsimused",
      items: [
        {
          q: "Mis saab, kui ilm on halb või sajab vihma?",
          a: "Jälgime ilma pidevalt ja anname teile teada juba mõni päev enne üritust. Programmi saab kohandada (nt SUP asemel rohkem rannamänge varjualuses) või leppida kokku uue kuupäeva. Kerge tuul ja pilves ilm ei sega — Eesti suvi on ju Eesti suvi.",
        },
        {
          q: "Kui palju inimesi saab osaleda?",
          a: "Tavaliselt 10–60 inimest ühe grupina. Suurema seltskonna puhul jagame mitmeks paralleelseks meeskonnaks, et kõik jõuaksid päriselt kaasa lüüa — kirjutage meile oma numbriga ja paneme kokku sobiva formaadi.",
        },
        {
          q: "Kas keegi peab oskama ujuda või varasemalt SUP-i proovinud olema?",
          a: "Ei. Kõik saavad põhjaliku instruktaaži enne vette minekut, päästevestid on alati olemas ja instruktorid on kogu aeg läheduses. Eelnevat kogemust pole vaja.",
        },
        {
          q: "Mida peaksime endaga kaasa võtma?",
          a: "Mugavad riided, mida ei karda niiskust, vahetuspaari ja head tuju. Käterätikud, päästevestid ja SUP-varustuse tagame meie. Toitlustuse osas leppige eraldi kokku — soovi korral aitame ka selle korraldada.",
        },
        {
          q: "Kas programmi saab kohandada vastavalt meie soovidele?",
          a: "Jah, alati. Baaspakett on hea lähtepunkt, aga sageli lisame sooviküsitud aktiivsusi, pikendame kestust või muudame rõhuasetust — helistage ja arutame teie eesmärgid läbi.",
        },
        {
          q: "Kuidas ürituse broneerimine käib?",
          a: "Kirjutage meile Telegramis või helistage numbril +372 55 512 872. Täpsustame kuupäeva, grupi suuruse ja soovid, saadame hinnapakkumise ning kuupäev on teie, kui kinnitate.",
        },
      ],
    },
    reviews: {
      eyebrow: "TAGASISIDE",
      title: "Mida kliendid ütlevad",
      badge: "Kinnitatud klient",
      leaveReview: "Jäta arvustus",
      prev: "Eelmised",
      next: "Järgmised",
      pageOf: "lk",
      modalTitle: "Jäta arvustus",
      formName: "Sinu nimi",
      formNamePlaceholder: "Nt Kadri Tamm",
      formRole: "Firma / üritus (valikuline)",
      formRolePlaceholder: "Nt Acme OÜ firmapäev",
      formRating: "Hinnang",
      formText: "Sinu kogemus",
      formTextPlaceholder: "Räägi meile, milline oli teie üritus...",
      formSubmit: "Saada arvustus",
      formCancel: "Loobu",
      thankYouTitle: "Aitäh!",
      thankYouText:
        "Sinu arvustus on saadetud ja ilmub siia pärast ülevaatamist. Hindame iga tagasisidet!",
      thankYouClose: "Sulge",
      items: [
        {
          name: "Kadri Tamm",
          role: "HR-juht, tehnoloogiaettevõte",
          rating: 5,
          text: "Kogu tiim rääkis sellest veel nädalaid hiljem. SUP-fotosessioon droonilt oli täielik üllatus ja tõstis kogu päeva teisele tasandile.",
          date: "2026-06-02",
        },
        {
          name: "Marek Ilves",
          role: "Meeskonnajuht, ehitusfirma",
          rating: 5,
          text: "Kartsime, et meie mehed ei võta tiimitöömänge tõsiselt, aga „Usaldustorn“ tõi välja päris ehtsa naeru ja koostöö. Korraldus oli laitmatu.",
          date: "2026-05-20",
        },
        {
          name: "Liina Sepp",
          role: "Turundusjuht",
          rating: 4,
          text: "Väga hea päev, ainult tuul oli meie jaoks veidi tugev SUP-i osas — aga instruktorid kohandasid programmi kiirelt ja kõik said siiski vette.",
          date: "2026-05-11",
        },
        {
          name: "Toomas Rebane",
          role: "Tegevjuht, väikeettevõte",
          rating: 5,
          text: "Broneerisime sünnipäevaks 25 inimesele. Kõik alates esimesest kõnest kuni lõkke ääres istumiseni oli hoolikalt läbi mõeldud.",
          date: "2026-04-28",
        },
        {
          name: "Anna Koval",
          role: "Projektijuht, IT-firma",
          rating: 5,
          text: "„Meeskonna toteem“ oli meie üllatuslemmik — tundus algul veidi lapsik idee, aga tulemus rippus meie kontoris nädalaid.",
          date: "2026-04-15",
        },
        {
          name: "Peeter Org",
          role: "Osakonnajuhataja, logistika",
          rating: 5,
          text: "Kõik läks täpselt graafikus ja instruktorid olid tõeliselt professionaalsed. Soovitame kindlasti teistelegi firmadele.",
          date: "2026-03-30",
        },
      ],
    },
    finalCta: {
      title: "Kas teil on omad ideed, kuidas üritust läbi viia?",
      subtitle: "Võtke julgelt ühendust — leiame koos teie jaoks ideaalse lahenduse!",
      telegramCta: "Kirjuta Telegramis",
      callLabel: "või helista",
    },
    location: {
      eyebrow: "ASUKOHT",
      title: "Kus me asume",
      addressLabel: "Aadress",
      addressText: "Stroomi rand, Tallinn — ranna lõpuosa, Rocca al Mare poolne ots.",
      howToLabel: "Kuidas kohale jõuda",
      howToText: "Bussid nr 40 ja 48, peatus „Stroomi rand“ — u 20 minutit kesklinnast.",
      parkingLabel: "Parkimine",
      parkingText: "Tasuta parkla ranna ääres. Nädalavahetustel võib täis olla — tulge varem.",
      openInMaps: "Ava Google Maps'is",
    },
    footer: {
      tagline: "Suverannaüritused Tallinnas alates 2013.",
      linksTitle: "Lingid",
      contactTitle: "Kontakt",
      rights: "Kõik õigused kaitstud.",
    },
  },
  en: {
    nav: {
      links: ["Program", "Gallery", "Pricing", "Why us", "FAQ", "Contact"],
      cta: "Get a quote",
    },
    hero: {
      eyebrow: "SUMMER BEACH EVENT · STROOMI BEACH",
      title: "A Summer Corporate Day at the Beach — SUP, Teamwork & Sunset",
      subtitle:
        "This year, no boring banquets. Just the sea, the sand, the sun — and a team that will still be smiling about it a year from now.",
      ctaPrimary: "Book your date",
      ctaSecondary: "See the program",
      phoneLabel: "Fast reply",
      detailsLabel: "Event essentials",
      details: ["Stroomi Beach, Tallinn", "3–4 hours", "Tailored program"],
    },
    intro: {
      eyebrow: "TIME TO SURF",
      title: "Everything is arranged — just show up",
      paragraphs: [
        "Enough of dull restaurants and stiff formal dinners. It's time to truly reset your team — through drive, movement, the sea and real laughter.",
        "We build an unforgettable summer day for your company at Stroomi beach in Tallinn: team-building, SUP on the open water, and a warm evening by the fire.",
        "A fully custom program is always possible — call us and we'll find the best solution together.",
      ],
      photoAlts: ["A team getting ready for SUP together", "A prepared beach pavilion with guests"],
      photoCaptions: ["The day begins together", "Everything is ready for you"],
      journeyTitle: "Your day by the sea",
      journey: [
        { title: "Arrival", detail: "Your team arrives — everything is already prepared." },
        { title: "A day together", detail: "We take care of the program, pace and every detail." },
        { title: "A warm evening", detail: "Time to talk, unwind and simply be together." },
      ],
    },
    suitedFor: {
      title: "Perfect for:",
      items: [
        "Birthdays",
        "Company days",
        "Any event whose only goal is a genuinely good time",
      ],
    },
    features: {
      eyebrow: "THE PROGRAM",
      title: "What's waiting for you",
      subtitle:
        "Average duration 3–4 hours. The program can always be extended and tailored to your wishes.",
      adaptabilityTitle: "Always flexible",
      adaptabilityText: "We select activities around the weather, the group's pace and your team's personality.",
      stages: ["Arrival", "Momentum", "The sea", "Create", "Sunset", "Finale"],
      timelineStart: "Meet at the beach",
      timelineEnd: "Leave with a shared story",
      items: [
        {
          title: "Beach team-building with a wow-effect",
          desc: "Split into teams, a playful icebreaker called 'Sea Knot', high-energy relay races and team missions that spark real laughter and trust.",
        },
        {
          title: "Challenges that bring everyone out of their shell",
          desc: "'Blind Surfer', 'Trust Tower', 'Coconut Race', tug-of-war in the sand — and there's more!",
        },
        {
          title: "SUP on the sea (Stand Up Paddle)",
          desc: "Instructor-led training and a group launch onto the water — with a photo shoot from the board and/or a drone. Not just photos — memories you'll want to relive.",
        },
        {
          title: "Creative block: 'Team Totem'",
          desc: "We build your team's symbol out of natural materials. Playful and surprisingly meaningful — it always turns out heartfelt and unique.",
        },
        {
          title: "Sunset, bonfire, light snacks and music",
          desc: "A cozy closing atmosphere to unwind, talk, eat something good, and simply enjoy the moment with your colleagues.",
        },
        {
          title: "Awards and keepsake photos",
          desc: "The final 'trophy' handover to the team of the day, symbolic souvenirs, a group photo by the water — a bright closing chapter of company life.",
        },
      ],
    },
    gallery: {
      eyebrow: "MOMENTS FROM THE BEACH",
      title: "Gallery",
      subtitle: "63 photos and 4 videos from past events. Click to enlarge.",
      storySubtitle: "One day by the sea — from the first hello to a warm evening together.",
      storyNote: "More than photographs. Moments that become your team's shared story.",
      curatedCaptions: ["Atmosphere", "People", "Details", "Equipment", "The finale"],
      curatedAlts: ["The atmosphere of a Time to Surf event by the sea", "A team getting ready for SUP", "Details of a prepared beach pavilion", "SUP boards ready for the team", "A warm event finale on the beach"],
      viewFull: "View the full gallery",
      archiveTitle: "Full event archive",
      filters: { all: "All", photo: "Photos", video: "Videos" },
      photoLabel: "Photo",
      videoLabel: "Video",
      note: "Drop your files into /public/gallery — they'll appear here automatically.",
      showAll: "Show all",
      showLess: "Show less",
    },
    pricing: {
      eyebrow: "INVESTMENT",
      title: "Not a package. Your team's day.",
      lead: "No two teams are the same. Your price reflects the group, the goal and the shape of the day you want — so you only pay for what creates real value for your team.",
      factors: [
        { title: "A tailored program", desc: "We shape the day around your objective, pace and team personality." },
        { title: "The right activities", desc: "SUP, team challenges, a creative block or a calmer format — only the mix that fits." },
        { title: "Group size", desc: "We account for participant numbers, the instructor team and all required equipment." },
        { title: "Optional services", desc: "Catering, photo and video, a longer evening or special requests are added only when needed." },
      ],
      offerEyebrow: "Personal proposal",
      offerTitle: "A precise plan and price for your team",
      offerText: "Send us your date, group size and a few words about what you want. We will reply with a clear, transparent proposal.",
      responseNote: "Fast reply in Telegram. No obligation.",
      packageName: "Your proposal includes",
      priceNote: "Base format from",
      includes: [
        "A scenario and schedule designed for your team",
        "The right mix of activities and equipment",
        "A complete group calculation with no hidden extras",
        "Optional services shown separately and clearly",
      ],
      cta: "Get a proposal in Telegram",
      durationNote: "Final price follows a short briefing",
    },
    trust: {
      eyebrow: "TRUST",
      title: "Why you can trust us",
      items: [
        {
          title: "10+ years of experience",
          desc: "We've been running beach events since 2013. We know how to inspire a team and deliver an experience nobody forgets.",
        },
        {
          title: "A professional team",
          desc: "Certified instructors, hosts and team-building facilitators — experience, charisma and attention to detail in every move.",
        },
        {
          title: "Proven formats + flexibility",
          desc: "We work from polished, tested formats, but we know how to adapt everything to what you want.",
        },
        {
          title: "Safety first",
          desc: "Only checked equipment, clear sightlines across the site, experienced staff, and full compliance with safety standards.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          q: "What happens if the weather is bad?",
          a: "We track the forecast closely and let you know a few days in advance. The program can flex (more shaded activities instead of SUP, for example) or we agree on a new date together. Light wind or a cloudy sky won't stop us — this is the Baltic summer, after all.",
        },
        {
          q: "How many people can join?",
          a: "Usually 10–60 people as one group. For larger groups we split into parallel teams so everyone genuinely gets to take part — tell us your headcount and we'll put together the right format.",
        },
        {
          q: "Does anyone need to know how to swim or have SUP experience?",
          a: "No. Everyone gets a full briefing before getting on the water, life vests are always provided, and instructors stay close by the whole time. No prior experience needed.",
        },
        {
          q: "What should we bring?",
          a: "Comfortable clothes you don't mind getting a little wet, a change of clothes, and good energy. We provide towels, life vests and all SUP equipment. Catering is arranged separately — we're happy to help organise that too.",
        },
        {
          q: "Can the program be customized?",
          a: "Always. The base package is a strong starting point, but we regularly add requested activities, extend the duration, or shift the focus — call us and we'll talk through your goals.",
        },
        {
          q: "How do we book a date?",
          a: "Message us on Telegram or call +372 55 512 872. We'll confirm the date, group size and any special requests, send over a quote, and the date is yours once you confirm.",
        },
      ],
    },
    reviews: {
      eyebrow: "FEEDBACK",
      title: "What clients are saying",
      badge: "Verified client",
      leaveReview: "Leave a review",
      prev: "Previous",
      next: "Next",
      pageOf: "page",
      modalTitle: "Leave a review",
      formName: "Your name",
      formNamePlaceholder: "e.g. Kadri Tamm",
      formRole: "Company / event (optional)",
      formRolePlaceholder: "e.g. Acme Ltd company day",
      formRating: "Rating",
      formText: "Your experience",
      formTextPlaceholder: "Tell us about your event...",
      formSubmit: "Submit review",
      formCancel: "Cancel",
      thankYouTitle: "Thank you!",
      thankYouText:
        "Your review has been submitted and will appear here after a quick check. We appreciate every piece of feedback!",
      thankYouClose: "Close",
      items: [
        {
          name: "Kadri Tamm",
          role: "HR Manager, tech company",
          rating: 5,
          text: "The whole team was still talking about it weeks later. The SUP drone photo shoot was a complete surprise and lifted the whole day to another level.",
          date: "2026-06-02",
        },
        {
          name: "Marek Ilves",
          role: "Team lead, construction company",
          rating: 5,
          text: "We worried our guys wouldn't take the team games seriously, but the 'Trust Tower' brought out genuine laughter and real teamwork. Flawless organisation.",
          date: "2026-05-20",
        },
        {
          name: "Liina Sepp",
          role: "Marketing manager",
          rating: 4,
          text: "Great day, the wind was a bit strong for SUP for us — but the instructors adapted the program quickly and everyone still got on the water.",
          date: "2026-05-11",
        },
        {
          name: "Toomas Rebane",
          role: "CEO, small business",
          rating: 5,
          text: "We booked this for a birthday with 25 people. Everything from the first call to sitting by the bonfire was carefully thought through.",
          date: "2026-04-28",
        },
        {
          name: "Anna Koval",
          role: "Project manager, IT company",
          rating: 5,
          text: "The 'Team Totem' was our surprise favourite — sounded a bit silly at first, but the result hung in our office for weeks.",
          date: "2026-04-15",
        },
        {
          name: "Peeter Org",
          role: "Department head, logistics",
          rating: 5,
          text: "Everything ran exactly on schedule and the instructors were genuinely professional. Would definitely recommend to other companies.",
          date: "2026-03-30",
        },
      ],
    },
    finalCta: {
      title: "Have your own idea for the event?",
      subtitle: "Reach out — together we'll find the perfect solution for you!",
      telegramCta: "Message us on Telegram",
      callLabel: "or call",
    },
    location: {
      eyebrow: "LOCATION",
      title: "Where we're located",
      addressLabel: "Address",
      addressText: "Stroomi Beach, Tallinn — the far end of the beach, toward Rocca al Mare.",
      howToLabel: "How to get there",
      howToText: "Bus routes 40 and 48, stop 'Stroomi rand' — about 20 minutes from the city centre.",
      parkingLabel: "Parking",
      parkingText: "Free parking right by the beach. Can fill up on weekends — arrive early.",
      openInMaps: "Open in Google Maps",
    },
    footer: {
      tagline: "Summer beach events in Tallinn since 2013.",
      linksTitle: "Links",
      contactTitle: "Contact",
      rights: "All rights reserved.",
    },
  },
  ru: {
    nav: {
      links: ["Программа", "Галерея", "Стоимость", "Почему мы", "Вопросы", "Контакты"],
      cta: "Получить предложение",
    },
    hero: {
      eyebrow: "ЛЕТНИЙ ПЛЯЖНЫЙ КОРПОРАТИВ · STROOMI RAND",
      title: "Летний корпоратив на пляже — SUP, тимбилдинг и закат",
      subtitle:
        "В этом году никаких скучных банкетов — только драйв, море и солнце. Команда, которая будет вспоминать это с улыбкой весь год.",
      ctaPrimary: "Забронировать дату",
      ctaSecondary: "Смотреть программу",
      phoneLabel: "Быстрый ответ",
      detailsLabel: "Главная информация",
      details: ["Пляж Штромка, Таллинн", "3–4 часа", "Персональная программа"],
    },
    intro: {
      eyebrow: "TIME TO SURF",
      title: "Всё под ключ — просто приезжайте",
      paragraphs: [
        "Хватит скучных ресторанов и формальных посиделок. Пора по-настоящему перезагрузить команду — через драйв, движение, море и смех.",
        "Мы создаём незабываемый летний день для вашей команды на Stroomi rand в Таллинне: тимбилдинг, SUP-прогулка по морю и тёплый вечер у костра.",
        "Есть возможность создать индивидуальную программу под ваш запрос — позвоните, и мы вместе найдём лучшее решение.",
      ],
      photoAlts: ["Команда вместе готовится к выходу на SUP", "Подготовленный пляжный павильон с гостями"],
      photoCaptions: ["День начинается вместе", "Всё уже готово для вас"],
      journeyTitle: "Ваш день у моря",
      journey: [
        { title: "Приезд", detail: "Ваша команда приезжает — всё уже готово." },
        { title: "День вместе", detail: "Мы ведём программу, держим ритм и следим за деталями." },
        { title: "Тёплый вечер", detail: "Время общаться, отдыхать и просто быть вместе." },
      ],
    },
    suitedFor: {
      title: "Отлично подходит для:",
      items: [
        "Дни рождения",
        "Фирменные дни",
        "Свои мероприятия с целью просто хорошо провести время",
      ],
    },
    features: {
      eyebrow: "ПРОГРАММА",
      title: "Что вас ждёт",
      subtitle:
        "Средняя длительность 3–4 часа. Программу всегда можно дополнить и подстроить под ваш запрос.",
      adaptabilityTitle: "Всегда гибко",
      adaptabilityText: "Подбираем активности под погоду, темп группы и характер именно вашей команды.",
      stages: ["Старт", "Драйв", "Море", "Творчество", "Закат", "Финал"],
      timelineStart: "Встречаемся на пляже",
      timelineEnd: "Уезжаете с общей историей",
      items: [
        {
          title: "Пляжный тимбилдинг с вау-эффектом",
          desc: "Разделение на команды, весёлый Ice Breaker «Морской узел», азартные эстафеты и командные миссии, которые вызывают настоящий командный смех и доверие.",
        },
        {
          title: "Челленджи, в которых все раскрываются",
          desc: "Игра «Слепой сёрфер», «Башня доверия», «Кокосовая гонка», канат в песке — и это далеко не всё!",
        },
        {
          title: "SUP-прогулка по морю (Stand Up Paddle)",
          desc: "Обучение от инструкторов и коллективный выход на воду — с фотосессией с доски и/или с дрона! Это не просто фото, это впечатления, которые хочется пересматривать.",
        },
        {
          title: "Творческий блок «Тотем команды»",
          desc: "Создаём символ вашей команды из природных материалов. Это и весело, и глубоко — всегда выходит очень душевно и уникально.",
        },
        {
          title: "Закат, костёр, лёгкие закуски и музыка",
          desc: "В финале — уютная атмосфера, где можно расслабиться, пообщаться, поесть вкусного и просто насладиться моментом рядом с коллегами.",
        },
        {
          title: "Награждение и фото на память",
          desc: "Финальное вручение «трофея» команде дня, символические сувениры, общее фото у воды — как точка в яркой главе корпоративной жизни.",
        },
      ],
    },
    gallery: {
      eyebrow: "МОМЕНТЫ С ПЛЯЖА",
      title: "Галерея",
      subtitle: "63 фото и 4 видео с прошлых мероприятий. Нажмите, чтобы увеличить.",
      storySubtitle: "Один день у моря — от первой встречи до тёплого вечера вместе.",
      storyNote: "Не просто фотографии. Моменты, которые становятся общей историей команды.",
      curatedCaptions: ["Атмосфера", "Люди", "Детали", "Экипировка", "Финал дня"],
      curatedAlts: ["Атмосфера мероприятия Time to Surf у моря", "Команда готовится к выходу на SUP", "Детали подготовленного пляжного павильона", "SUP-доски готовы для команды", "Тёплый финал мероприятия на пляже"],
      viewFull: "Посмотреть всю галерею",
      archiveTitle: "Полный архив мероприятий",
      filters: { all: "Все", photo: "Фото", video: "Видео" },
      photoLabel: "Фото",
      videoLabel: "Видео",
      note: "Добавьте свои файлы в папку /public/gallery — они появятся здесь автоматически.",
      showAll: "Показать все",
      showLess: "Свернуть",
    },
    pricing: {
      eyebrow: "СТОИМОСТЬ",
      title: "Не пакет. День вашей команды.",
      lead: "Не бывает двух одинаковых команд. Поэтому стоимость зависит от состава группы, вашей цели и желаемого формата дня — вы платите только за то, что действительно создаёт ценность.",
      factors: [
        { title: "Индивидуальная программа", desc: "Собираем день под вашу цель, темп и характер команды." },
        { title: "Разные активности", desc: "SUP, тимбилдинг, творчество или спокойный формат — только подходящее сочетание." },
        { title: "Размер группы", desc: "Учитываем число участников, количество инструкторов и необходимую экипировку." },
        { title: "Дополнительные услуги", desc: "Кейтеринг, фото и видео, продлённый вечер или особые пожелания добавляются только при необходимости." },
      ],
      offerEyebrow: "Персональное предложение",
      offerTitle: "Соберём точный сценарий и стоимость для вашей команды",
      offerText: "Напишите дату, количество участников и пару слов о пожеланиях. Мы ответим конкретным и прозрачным предложением.",
      responseNote: "Быстрый ответ в Telegram. Без обязательств.",
      packageName: "В предложении будет",
      priceNote: "Базовый формат от",
      includes: [
        "Сценарий и тайминг, созданные для вашей команды",
        "Подходящий набор активностей и оборудования",
        "Полный расчёт на группу без скрытых доплат",
        "Дополнительные услуги отдельными понятными пунктами",
      ],
      cta: "Получить предложение в Telegram",
      durationNote: "Финальная цена после короткого брифа",
    },
    trust: {
      eyebrow: "ДОВЕРИЕ",
      title: "Почему можно нам доверять?",
      items: [
        {
          title: "10+ лет опыта",
          desc: "Мы проводим пляжные мероприятия с 2013 года. Знаем, как вдохновить команду и подарить незабываемые впечатления.",
        },
        {
          title: "Профессиональная команда",
          desc: "Сертифицированные инструкторы, ведущие и тимбилдеры — опыт, харизма и внимание к деталям в каждом движении.",
        },
        {
          title: "Готовые сценарии + гибкость",
          desc: "Работаем по отточенным форматам, но умеем адаптировать всё под ваши желания.",
        },
        {
          title: "Безопасность прежде всего",
          desc: "Только проверенное оборудование, видимость зоны, опытные сопровождающие и полное соблюдение стандартов безопасности.",
        },
      ],
    },
    faq: {
      eyebrow: "ВОПРОСЫ",
      title: "Часто задаваемые вопросы",
      items: [
        {
          q: "Что будет, если погода подведёт?",
          a: "Мы внимательно следим за прогнозом и предупредим вас за несколько дней. Программу можно адаптировать (например, больше активностей под навесом вместо SUP) или согласовать новую дату. Лёгкий ветер и облачность нам не помеха — это же эстонское лето.",
        },
        {
          q: "Сколько человек может участвовать?",
          a: "Обычно 10–60 человек одной группой. Для больших коллективов делим на параллельные команды, чтобы каждый реально был вовлечён — напишите нам количество людей, и мы подберём формат.",
        },
        {
          q: "Нужно ли уметь плавать или иметь опыт SUP?",
          a: "Нет. Перед выходом на воду все проходят подробный инструктаж, спасательные жилеты выдаются всегда, а инструкторы находятся рядом всё время. Опыт не требуется.",
        },
        {
          q: "Что взять с собой?",
          a: "Удобную одежду, которую не жалко немного намочить, сменную одежду и хорошее настроение. Полотенца, жилеты и SUP-оборудование предоставляем мы. Питание обсуждается отдельно — с радостью поможем его организовать.",
        },
        {
          q: "Можно ли адаптировать программу под нас?",
          a: "Всегда. Базовый пакет — хорошая отправная точка, но мы регулярно добавляем активности по запросу, продлеваем длительность или смещаем акценты — звоните, обсудим ваши цели.",
        },
        {
          q: "Как забронировать дату?",
          a: "Напишите нам в Telegram или позвоните на +372 55 512 872. Согласуем дату, размер группы и пожелания, вышлем предложение — и дата ваша после подтверждения.",
        },
      ],
    },
    reviews: {
      eyebrow: "ОТЗЫВЫ",
      title: "Что говорят клиенты",
      badge: "Проверенный клиент",
      leaveReview: "Оставить отзыв",
      prev: "Назад",
      next: "Далее",
      pageOf: "стр.",
      modalTitle: "Оставить отзыв",
      formName: "Ваше имя",
      formNamePlaceholder: "Например, Кадри Тамм",
      formRole: "Компания / мероприятие (необязательно)",
      formRolePlaceholder: "Например, фирменный день Acme OÜ",
      formRating: "Оценка",
      formText: "Ваши впечатления",
      formTextPlaceholder: "Расскажите, каким было ваше мероприятие...",
      formSubmit: "Отправить отзыв",
      formCancel: "Отмена",
      thankYouTitle: "Спасибо!",
      thankYouText:
        "Ваш отзыв отправлен и появится здесь после проверки модератором. Ценим каждую обратную связь!",
      thankYouClose: "Закрыть",
      items: [
        {
          name: "Кадри Тамм",
          role: "HR-директор, IT-компания",
          rating: 5,
          text: "Вся команда обсуждала это ещё несколько недель. Фотосессия с дрона на SUP стала полной неожиданностью и подняла весь день на другой уровень.",
          date: "2026-06-02",
        },
        {
          name: "Марек Ильвес",
          role: "Тимлид, строительная компания",
          rating: 5,
          text: "Боялись, что наши ребята не воспримут тимбилдинг всерьёз, но «Башня доверия» вызвала настоящий смех и сплочённость. Организация была безупречной.",
          date: "2026-05-20",
        },
        {
          name: "Лийна Сепп",
          role: "Директор по маркетингу",
          rating: 4,
          text: "Отличный день, только ветер был для нас слегка сильноват для SUP — но инструкторы быстро адаптировали программу, и все всё равно вышли на воду.",
          date: "2026-05-11",
        },
        {
          name: "Тоомас Ребане",
          role: "Директор, малый бизнес",
          rating: 5,
          text: "Бронировали на день рождения для 25 человек. Всё, от первого звонка до посиделок у костра, было продумано до мелочей.",
          date: "2026-04-28",
        },
        {
          name: "Анна Коваль",
          role: "Проектный менеджер, IT-компания",
          rating: 5,
          text: "«Тотем команды» стал нашим неожиданным фаворитом — сначала казалось немного по-детски, но результат провисел в нашем офисе несколько недель.",
          date: "2026-04-15",
        },
        {
          name: "Пеэтер Орг",
          role: "Руководитель отдела, логистика",
          rating: 5,
          text: "Всё прошло точно по графику, инструкторы — настоящие профессионалы. Обязательно порекомендуем другим компаниям.",
          date: "2026-03-30",
        },
      ],
    },
    finalCta: {
      title: "Есть свои идеи, как провести мероприятие?",
      subtitle: "Смело связывайтесь — вместе найдём идеальное решение для вас!",
      telegramCta: "Написать в Telegram",
      callLabel: "или позвоните",
    },
    location: {
      eyebrow: "МЕСТО ПРОВЕДЕНИЯ",
      title: "Где мы находимся",
      addressLabel: "Адрес",
      addressText: "Stroomi rand, Таллинн — конец пляжа, ближе к Рокка-аль-Маре.",
      howToLabel: "Как добраться",
      howToText: "Автобусы №40, 48 до остановки «Stroomi rand» — около 20 минут от центра.",
      parkingLabel: "Парковка",
      parkingText: "Бесплатная парковка у пляжа. В выходные может быть занята — приезжайте заранее.",
      openInMaps: "Открыть в Google Maps",
    },
    footer: {
      tagline: "Пляжные мероприятия в Таллинне с 2013 года.",
      linksTitle: "Ссылки",
      contactTitle: "Контакты",
      rights: "Все права защищены.",
    },
  },
};
