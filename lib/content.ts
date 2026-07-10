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

export interface Dictionary {
  nav: { links: string[]; cta: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    phoneLabel: string;
  };
  intro: { eyebrow: string; title: string; paragraphs: string[] };
  suitedFor: { title: string; items: string[] };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
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
    packageName: string;
    priceNote: string;
    includes: string[];
    cta: string;
    durationNote: string;
  };
  trust: { eyebrow: string; title: string; items: FeatureItem[] };
  finalCta: { title: string; subtitle: string; cta: string; phone: string };
  footer: { tagline: string; address: string; rights: string };
}

export const dictionaries: Record<Locale, Dictionary> = {
  et: {
    nav: {
      links: ["Programm", "Galerii", "Hind", "Miks meie", "Kontakt"],
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
    },
    intro: {
      eyebrow: "TIME TO SURF",
      title: "Kõik on valmis — tulge lihtsalt kohale",
      paragraphs: [
        "Aitab igavatest restoranidest ja formaalsest istumisest. On aeg tiim päriselt taaskäivitada — läbi hoo, liikumise, mere ja naeru.",
        "Loome teie firmale unustamatu suvepäeva Tallinna Stroomi rannas: tiimitöö, SUP-lauasõit merel ja soe õhtu lõkketule ääres.",
        "Individuaalne programm on alati võimalik — helistage ja leiame koos parima lahenduse.",
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
      filters: { all: "Kõik", photo: "Fotod", video: "Videod" },
      photoLabel: "Foto",
      videoLabel: "Video",
      note: "Lisage oma failid kausta /public/gallery — pildid ilmuvad siia automaatselt.",
      showAll: "Näita kõiki",
      showLess: "Näita vähem",
    },
    pricing: {
      eyebrow: "INVESTEERING",
      title: "Hind",
      packageName: "Suvine rannafirmaüritus Time to Surf'ilt",
      priceNote: "alates",
      includes: [
        "Rannaala rent 3,5 tundi",
        "Ürituse ettevalmistus",
        "Tiimitöö programm",
        "SUP-laudade rent",
        "Instrueerimine SUP-koolilt",
        "Märgvarustus eraldi kokkuleppel — vastavalt ilmale",
      ],
      cta: "Küsi hinnapakkumist",
      durationNote: "Keskmine kestus 3–4 tundi",
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
    finalCta: {
      title: "Kas teil on omad ideed, kuidas üritust läbi viia?",
      subtitle: "Võtke julgelt ühendust — leiame koos teie jaoks ideaalse lahenduse!",
      cta: "Võta ühendust",
      phone: "+372 55 512 872",
    },
    footer: {
      tagline: "Suverannaüritused Tallinnas alates 2013.",
      address: "Stroomi rand, Tallinn",
      rights: "Kõik õigused kaitstud.",
    },
  },
  en: {
    nav: {
      links: ["Program", "Gallery", "Pricing", "Why us", "Contact"],
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
    },
    intro: {
      eyebrow: "TIME TO SURF",
      title: "Everything is arranged — just show up",
      paragraphs: [
        "Enough of dull restaurants and stiff formal dinners. It's time to truly reset your team — through drive, movement, the sea and real laughter.",
        "We build an unforgettable summer day for your company at Stroomi beach in Tallinn: team-building, SUP on the open water, and a warm evening by the fire.",
        "A fully custom program is always possible — call us and we'll find the best solution together.",
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
      filters: { all: "All", photo: "Photos", video: "Videos" },
      photoLabel: "Photo",
      videoLabel: "Video",
      note: "Drop your files into /public/gallery — they'll appear here automatically.",
      showAll: "Show all",
      showLess: "Show less",
    },
    pricing: {
      eyebrow: "INVESTMENT",
      title: "Pricing",
      packageName: "Summer Beach Corporate Event by Time to Surf",
      priceNote: "from",
      includes: [
        "3.5-hour beach station rental",
        "Event preparation",
        "Team-building program block",
        "SUP board rental",
        "Instruction from the SUP school",
        "Wetsuits negotiated separately, depending on weather",
      ],
      cta: "Request a quote",
      durationNote: "Average duration 3–4 hours",
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
    finalCta: {
      title: "Have your own idea for the event?",
      subtitle: "Reach out — together we'll find the perfect solution for you!",
      cta: "Get in touch",
      phone: "+372 55 512 872",
    },
    footer: {
      tagline: "Summer beach events in Tallinn since 2013.",
      address: "Stroomi Beach, Tallinn",
      rights: "All rights reserved.",
    },
  },
  ru: {
    nav: {
      links: ["Программа", "Галерея", "Стоимость", "Почему мы", "Контакты"],
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
    },
    intro: {
      eyebrow: "TIME TO SURF",
      title: "Всё под ключ — просто приезжайте",
      paragraphs: [
        "Хватит скучных ресторанов и формальных посиделок. Пора по-настоящему перезагрузить команду — через драйв, движение, море и смех.",
        "Мы создаём незабываемый летний день для вашей команды на Stroomi rand в Таллинне: тимбилдинг, SUP-прогулка по морю и тёплый вечер у костра.",
        "Есть возможность создать индивидуальную программу под ваш запрос — позвоните, и мы вместе найдём лучшее решение.",
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
      filters: { all: "Все", photo: "Фото", video: "Видео" },
      photoLabel: "Фото",
      videoLabel: "Видео",
      note: "Добавьте свои файлы в папку /public/gallery — они появятся здесь автоматически.",
      showAll: "Показать все",
      showLess: "Свернуть",
    },
    pricing: {
      eyebrow: "СТОИМОСТЬ",
      title: "Стоимость",
      packageName: "Летний корпоратив на пляже от Time to Surf",
      priceNote: "от",
      includes: [
        "Аренда станции 3,5 часа",
        "Подготовка мероприятия",
        "Тимбилдинг-блок",
        "Аренда SUP-досок",
        "Инструктаж от школы по аренде SUP-досок",
        "Гидроодежда оговаривается отдельно — по погоде",
      ],
      cta: "Получить предложение",
      durationNote: "Средняя длительность 3–4 часа",
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
    finalCta: {
      title: "Есть свои идеи, как провести мероприятие?",
      subtitle: "Смело связывайтесь — вместе найдём идеальное решение для вас!",
      cta: "Связаться",
      phone: "+372 55 512 872",
    },
    footer: {
      tagline: "Пляжные мероприятия в Таллинне с 2013 года.",
      address: "Stroomi rand, Таллинн",
      rights: "Все права защищены.",
    },
  },
};
