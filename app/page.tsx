"use client";

import { useMemo, useState } from "react";

type Lang = "et" | "en" | "ru";

const content = {
  et: {
    nav: ["Programm", "Tegevused", "Kuidas toimub?", "KKK", "Kontakt"],
    cta: "Küsi pakkumist",
    contact: "Võta ühendust",
    heroTag: "Firmasündmused ja tiimiüritused",
    heroTitle: "Suvepäev rannas BBQ ja surfiga",
    heroText: "Sel aastal ei mingeid igavaid bankette — ainult energia, meri ja päike.",
    heroSub: "Time to Surf kutsub teie tiimi suvisele mereäärsele tiimipäevale.",
    turnkey: "Kõik on valmis võtmed kätte. Tulge kohale — meie loome päeva, mida teie tiim meenutab naeratusega terve aasta.",
    stats: ["10+ aastat kogemust", "Professionaalsed juhendajad", "Kõik ühest kohast", "Stroomi rand", "Individuaalne pakkumine"],
    fitTitle: "Kellele meie üritused sobivad?",
    fitNote: "Sobib tiimile, kes tahab veeta aega värskelt, aktiivselt ja mere ääres.",
    fit: ["Sünnipäevad", "Firmapäevad", "Oma sündmused hea aja veetmiseks"],
    quote: "Unustage tavalised restoranid ja kontor. Loome päeva, mida teie meeskond mäletab kaua.",
    activitiesTitle: "Mida saab teie päev sisaldada?",
    activitiesSub: "Kõik tegevused toimuvad kogenud juhendajate toel ja on kohandatavad teie grupile.",
    activities: ["SUP", "Beach Games & Team Challenges", "BBQ / Catering", "Foto & Video", "Loov blokk"],
    programTitle: "Kuidas päev möödub?",
    programSub: "Näidisprogramm. Saab kohandada.",
    program: [
      ["09:30", "Kogunemine ja brifing"],
      ["10:00", "Ice Breaker “Meresõlm”"],
      ["10:30", "Võistlused ja missioonid"],
      ["12:30", "SUP ja meri"],
      ["13:30", "Meeskonna totem"],
      ["15:30", "Zakuski, muusika, lõke"],
      ["16:30", "Autasustamine ja foto"]
    ],
    whyTitle: "Miks see töötab?",
    whyIntro: "Me ei loo lihtsalt üritust. Me loome kogemuse, mis toob meeskonna kokku.",
    why: [
      ["Inimesed suhtlevad rohkem", "Värske õhk, liikumine ja ühine seiklus."],
      ["Tekib usaldus ja koostöö", "Ühised ülesanded loovad sidet."],
      ["Emotsioonid jäävad meelde", "Naer, meri ja uued muljed."],
      ["Aktiivne puhkus", "Liikumine, värske õhk ja mereenergia."],
      ["Midagi täiesti uut", "Eriline, mitte järjekordne tavaline õhtu."]
    ],
    priceTitle: "Hind",
    priceName: "Suvepäev rannas Time to Surfilt",
    includedTitle: "Hinnas:",
    included: ["Jaama rent 3,5 tundi", "Ürituse ettevalmistus", "Tiimibuildingu blokk", "SUP-laudade rent", "SUP-laudade rendi juhendamine kooli poolt", "Hüdroülikond lepitakse eraldi kokku - vastavalt ilmale"],
    trustTitle: "Miks meid usaldada?",
    trust: [
      ["10+ aastat kogemust", "Korraldame rannasündmusi alates 2013. aastast."],
      ["Professionaalne tiim", "Sertifitseeritud instruktorid, juhid ja tiimibuildingu läbiviijad."],
      ["Valmis stsenaariumid + paindlikkus", "Töötame läbimõeldud formaatidega ja kohandame neid teie soovidele."],
      ["Turvalisus ennekõike", "Kontrollitud varustus, nähtav ala, kogenud saatjad ja ohutusstandardid."]
    ],
    faqTitle: "KKK",
    faq: [
      ["Kas peab oskama surfata?", "Ei pea. Instruktorid juhendavad ja tegevused sobivad eri tasemetele."],
      ["Mis siis, kui tuul pole ideaalne?", "Programm kohandatakse ilma järgi, tegevusi saab vahetada."],
      ["Kas saab teha oma ideega programmi?", "Jah, saab koostada personaalse pakkumise."],
      ["Kui palju inimesi saab osaleda?", "Sõltub programmist ja tegevustest. Kiireim vastus tuleb telefoni teel."]
    ],
    reviewsTitle: "Arvustused",
    reviewButton: "Jäta arvustus",
    closeForm: "Tagasi arvustuste juurde",
    form: ["Nimi", "Ettevõte", "Arvustus", "Saada"],
    reviews: [
      ["Mark, Pipedrive", "Päev oli lihtne, hästi korraldatud ja tiim rääkis sellest veel järgmisel nädalal."],
      ["Anna, Bolt", "SUP, mängud ja lõkkeõhtu töötasid täpselt nii, nagu tiimipäev peab töötama."],
      ["Kristi, Veriff", "Kõik oli paindlik ja turvaline. Väga mõnus mereäärne formaat."]
    ],
    finalTitle: "Planeerime koos teie ettevõtte suvepäeva",
    finalText: "Võta ühendust ja saame personaalse pakkumise kiiresti kokku.",
    footerText: "Surfskool ja ürituste korraldaja Stroomi rannas, Tallinnas.",
    linksTitle: "Lingid",
    eventTitle: "Ürituse info",
    socialTitle: "Sotsiaal",
    email: "info@timetosurf.ee",
    north: "webpage by northpixel"
  },
  en: {
    nav: ["Program", "Activities", "How it works", "FAQ", "Contact"],
    cta: "Ask for offer",
    contact: "Contact",
    heroTag: "Company events and team days",
    heroTitle: "Summer beach corporate with BBQ and surfing",
    heroText: "No boring banquets this year — only energy, sea and sun.",
    heroSub: "Time to Surf invites your team to a summer team building day by the sea.",
    turnkey: "Everything is turnkey. Just arrive — we will create a day your team will remember with a smile all year.",
    stats: ["10+ years experience", "Professional instructors", "Everything in one place", "Stroomi rand", "Individual offer"],
    fitTitle: "Who is this event for?",
    fitNote: "For teams who want fresh air, movement and a good time by the sea.",
    fit: ["Birthdays", "Company days", "Own events to have a great time"],
    quote: "Forget regular restaurants and offices. We create a day your team will remember for a long time.",
    activitiesTitle: "What can your day include?",
    activitiesSub: "All activities are guided by experienced instructors and can be adapted to your group.",
    activities: ["SUP", "Beach Games & Team Challenges", "BBQ / Catering", "Photo & Video", "Creative block"],
    programTitle: "How does the day flow?",
    programSub: "Sample program. Can be customized.",
    program: [
      ["09:30", "Arrival and briefing"],
      ["10:00", "Ice Breaker “Sea Knot”"],
      ["10:30", "Challenges and missions"],
      ["12:30", "SUP and sea"],
      ["13:30", "Team totem"],
      ["15:30", "Snacks, music, fire"],
      ["16:30", "Awards and photo"]
    ],
    whyTitle: "Why does it work?",
    whyIntro: "We do not just run an event. We create an experience that brings the team closer.",
    why: [
      ["People communicate more", "Fresh air, movement and shared adventure."],
      ["Trust and teamwork grow", "Shared tasks create connection."],
      ["Emotions stay memorable", "Laughter, sea and new impressions."],
      ["Active rest", "Movement, fresh air and sea energy."],
      ["Something really different", "A special format, not another usual evening."]
    ],
    priceTitle: "Price",
    priceName: "Beach corporate by Time to Surf",
    includedTitle: "Included:",
    included: ["Station rental 3.5 hours", "Event preparation", "Team building block", "SUP board rental", "SUP board rental briefing by the school", "Wetsuits are agreed separately - depending on weather"],
    trustTitle: "Why trust us?",
    trust: [
      ["10+ years of experience", "We have been running beach events since 2013."],
      ["Professional team", "Certified instructors, hosts and team builders."],
      ["Ready scenarios + flexibility", "We work with polished formats and adapt them to your wishes."],
      ["Safety first", "Checked equipment, visible area, experienced guides and safety standards."]
    ],
    faqTitle: "FAQ",
    faq: [
      ["Do we need surfing experience?", "No. Instructors guide everyone and activities fit different levels."],
      ["What if the wind is not perfect?", "The program is adapted to the weather and activities can be changed."],
      ["Can we build a custom program?", "Yes, an individual offer can be prepared for your request."],
      ["How many people can join?", "It depends on the program and activities. The fastest answer is by phone."]
    ],
    reviewsTitle: "Reviews",
    reviewButton: "Leave a review",
    closeForm: "Back to reviews",
    form: ["Name", "Company", "Review", "Send"],
    reviews: [
      ["Mark, Pipedrive", "The day was simple, well organized and the team kept talking about it the next week."],
      ["Anna, Bolt", "SUP, games and the fire evening worked exactly like a team day should."],
      ["Kristi, Veriff", "Everything was flexible and safe. A really nice seaside format."]
    ],
    finalTitle: "Let’s plan your company summer day together",
    finalText: "Contact us and we will prepare a personal offer quickly.",
    footerText: "Surf school and event organizer at Stroomi beach, Tallinn.",
    linksTitle: "Links",
    eventTitle: "Event info",
    socialTitle: "Social",
    email: "info@timetosurf.ee",
    north: "webpage by northpixel"
  },
  ru: {
    nav: ["Программа", "Активности", "Как проходит?", "FAQ", "Контакт"],
    cta: "Запросить предложение",
    contact: "Связаться",
    heroTag: "Фирменные дни и тимбилдинг",
    heroTitle: "Летний корпоратив на пляже с BBQ и серфингом",
    heroText: "В этом году никаких скучных банкетов — только драйв, море и солнце.",
    heroSub: "Time to Surf приглашает вашу команду на летний тимбилдинг у моря.",
    turnkey: "Всё под ключ. Просто приезжайте — мы создадим праздник, который ваша команда будет вспоминать с улыбкой весь год!",
    stats: ["10+ лет опыта", "Профессиональные инструкторы", "Всё в одном месте", "Stroomi rand", "Индивидуальное предложение"],
    fitTitle: "Кому подходят наши мероприятия?",
    fitNote: "Для команды, которая хочет провести время свежо, активно и у моря.",
    fit: ["Дни рождения", "Фирменные дни", "Свои мероприятия с целью хорошо провести время"],
    quote: "Забудьте обычные рестораны и офис. Мы создаём день, который ваша команда будет помнить долго.",
    activitiesTitle: "Что может включать ваш день?",
    activitiesSub: "Все активности проходят с опытными инструкторами и адаптируются под вашу группу.",
    activities: ["SUP", "Beach Games & Team Challenges", "BBQ / Catering", "Фото & Видео", "Творческий блок"],
    programTitle: "Как проходит день?",
    programSub: "Примерная программа. Можно адаптировать.",
    program: [
      ["09:30", "Сбор и брифинг"],
      ["10:00", "Ice Breaker “Морской узел”"],
      ["10:30", "Челленджи и миссии"],
      ["12:30", "SUP и море"],
      ["13:30", "Тотем команды"],
      ["15:30", "Закуски, музыка, костёр"],
      ["16:30", "Награждение и фото"]
    ],
    whyTitle: "Почему это работает?",
    whyIntro: "Мы не просто делаем мероприятие. Мы создаём опыт, который сближает команду.",
    why: [
      ["Люди больше общаются", "Свежий воздух, движение и общее приключение."],
      ["Растёт доверие и командность", "Общие задания создают связь."],
      ["Эмоции остаются в памяти", "Смех, море и новые впечатления."],
      ["Активный отдых", "Движение, свежий воздух и энергия моря."],
      ["Что-то действительно новое", "Особенный формат, а не очередной обычный вечер."]
    ],
    priceTitle: "Стоимость",
    priceName: "Летний корпоратив на пляже от TimetoSurf",
    includedTitle: "В цене:",
    included: ["Аренда станции 3,5 часа", "Подготовка мероприятия", "Тимбилдинг-блок", "аренда SUP-досок", "Инструктаж от школы по аренде САП-досок", "гидроодежда оговаривается отдельно - по погоде"],
    trustTitle: "Почему можно нам доверять?",
    trust: [
      ["10+ лет опыта", "Мы проводим пляжные мероприятия с 2013 года."],
      ["Профессиональная команда", "Сертифицированные инструкторы, ведущие и тимбилдеры."],
      ["Готовые сценарии + гибкость", "Работаем по отточенным форматам, но адаптируем всё под ваши желания."],
      ["Безопасность прежде всего", "Проверенное оборудование, видимость зоны, опытные сопровождающие и стандарты безопасности."]
    ],
    faqTitle: "FAQ",
    faq: [
      ["Нужно уметь серфить?", "Нет. Инструкторы всё объясняют, активности подходят разным уровням."],
      ["Что если ветер не идеальный?", "Программа адаптируется по погоде, активности можно менять."],
      ["Можно сделать программу под свои идеи?", "Да, можно составить персональное предложение под запрос."],
      ["Сколько человек может участвовать?", "Зависит от программы и активностей. Быстрее всего уточнить по телефону."]
    ],
    reviewsTitle: "Отзывы",
    reviewButton: "Оставить отзыв",
    closeForm: "Назад к отзывам",
    form: ["Имя", "Компания", "Отзыв", "Отправить"],
    reviews: [
      ["Mark, Pipedrive", "День был простым, хорошо организованным, и команда обсуждала его ещё неделю."],
      ["Anna, Bolt", "SUP, игры и вечер у костра сработали именно так, как должен работать тимбилдинг."],
      ["Kristi, Veriff", "Всё было гибко и безопасно. Очень приятный формат у моря."]
    ],
    finalTitle: "Планируем вместе летний день вашей компании",
    finalText: "Свяжитесь, и мы быстро подготовим персональное предложение.",
    footerText: "Школа серфинга и организатор мероприятий на Stroomi rand, Tallinn.",
    linksTitle: "Переходы",
    eventTitle: "Информация",
    socialTitle: "Соцсети",
    email: "info@timetosurf.ee",
    north: "webpage by northpixel"
  }
};

const icons = ["sun", "team", "waves", "gift", "tools"];
const galleryPositions = ["50% 42%", "28% 35%", "72% 40%", "44% 72%", "66% 62%"];

export default function Home() {
  const [lang, setLang] = useState<Lang>("et");
  const [reviewMode, setReviewMode] = useState(false);
  const t = content[lang];
  const otherLangs = useMemo(() => (["et", "en", "ru"] as Lang[]), []);

  return (
    <main className="site">
      <header className="hero" id="top">
        <nav className="nav">
          <a className="logo" href="#top" aria-label="Time to Surf">
            <span className="logoMark">≈</span>
            <span>TIME TO SURF</span>
          </a>
          <div className="navLinks">
            {t.nav.map((item, index) => (
              <a key={item} href={["#program", "#activities", "#program", "#faq", "#contact"][index]}>
                {item}
              </a>
            ))}
          </div>
          <div className="rightNav">
            <div className="langs" aria-label="Language switcher">
              {otherLangs.map((code) => (
                <button className={lang === code ? "active" : ""} key={code} onClick={() => setLang(code)}>
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <a className="navBtn" href="https://t.me/Andrei_Time_to_Surf">{t.cta}</a>
          </div>
        </nav>

        <div className="heroInner shell">
          <div className="tag">{t.heroTag}</div>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>
          <p>{t.heroSub}</p>
          <div className="heroActions">
            <a className="primary" href="https://t.me/Andrei_Time_to_Surf">{t.cta}</a>
            <a className="secondary" href="#program">{t.nav[0]}</a>
          </div>
        </div>
      </header>

      <section className="underHero shell">
        {t.stats.map((stat, index) => (
          <div className="stat" key={stat}>
            <span className={`lineIcon ${icons[index]}`} />
            <strong>{stat}</strong>
          </div>
        ))}
      </section>

      <section className="section shell fitSection">
        <div className="sectionHead">
          <h2>{t.fitTitle}</h2>
          <p>{t.fitNote}</p>
        </div>
        <div className="fitGrid">
          {t.fit.map((item, index) => (
            <article className="fitCard" key={item}>
              <span className={`bigIcon ${icons[index]}`} />
              <h3>{item}</h3>
            </article>
          ))}
          <aside className="quoteCard">
            <p>{t.quote}</p>
            <span />
          </aside>
        </div>
      </section>

      <section className="section shell" id="activities">
        <div className="sectionHead compact">
          <h2>{t.activitiesTitle}</h2>
          <p>{t.activitiesSub}</p>
        </div>
        <div className="activityRow">
          {t.activities.map((item, index) => (
            <article className="activityCard" key={item}>
              <div className="thumb" style={{ backgroundPosition: galleryPositions[index] }} />
              <span className={`miniBadge ${icons[index]}`} />
              <strong>{item}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell programGrid" id="program">
        <aside>
          <h2>{t.programTitle}</h2>
          <p>{t.programSub}</p>
          <a className="outlineBtn" href="https://t.me/Andrei_Time_to_Surf">{t.cta}</a>
        </aside>
        <div className="timeline">
          {t.program.map(([time, text]) => (
            <div className="timeItem" key={time}>
              <b>{time}</b>
              <span />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell whyGrid">
        <aside>
          <h2>{t.whyTitle}</h2>
          <p>{t.whyIntro}</p>
        </aside>
        <div className="whyCards">
          {t.why.map(([title, text], index) => (
            <article className="whyCard" key={title}>
              <span className={`bigIcon ${icons[index]}`} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="photoMosaic shell" aria-label="Gallery">
        <div className="photoTile tall" />
        <div className="photoTile wide">
          <span>Stroomi rand, Tallinn</span>
        </div>
        <div className="photoTile" />
        <div className="photoTile" />
        <div className="photoTile" />
      </section>

      <section className="section shell priceTrust">
        <article className="priceCard">
          <div>
            <h2>{t.priceTitle}</h2>
            <p>{t.priceName}</p>
          </div>
          <div className="price"><span>€</span>350</div>
          <a className="primary" href="https://t.me/Andrei_Time_to_Surf">{t.contact}</a>
        </article>
        <article className="includedCard">
          <h2>{t.includedTitle}</h2>
          <ul>
            {t.included.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </section>

      <section className="section shell trustOnly">
        <h2>{t.trustTitle}</h2>
        <div className="trustGrid">
          {t.trust.map(([title, text], index) => (
            <article className="trustCard" key={title}>
              <span className={`lineIcon ${icons[index]}`} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell faqReviews" id="faq">
        <div className="faqBox">
          <h2>{t.faqTitle}</h2>
          {t.faq.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
        <div className="reviewBox">
          <div className="reviewTop">
            <h2>{t.reviewsTitle}</h2>
            <button onClick={() => setReviewMode((value) => !value)}>
              {reviewMode ? t.closeForm : t.reviewButton}
            </button>
          </div>
          {reviewMode ? (
            <form className="reviewForm">
              <input placeholder={t.form[0]} />
              <input placeholder={t.form[1]} />
              <textarea placeholder={t.form[2]} />
              <button type="button">{t.form[3]}</button>
            </form>
          ) : (
            <div className="reviews">
              {t.reviews.map(([name, text]) => (
                <blockquote key={name}>
                  <div>★★★★★</div>
                  <p>{text}</p>
                  <cite>{name}</cite>
                </blockquote>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="finalCta" id="contact">
        <div className="shell finalInner">
          <h2>{t.finalTitle}</h2>
          <p>{t.finalText}</p>
          <a className="whiteBtn" href="https://t.me/Andrei_Time_to_Surf">{t.cta}</a>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footerGrid">
          <div>
            <a className="footerLogo" href="#top"><span className="logoMark">≈</span> TIME TO SURF</a>
            <p>{t.footerText}</p>
            <div className="socials">
              <a href="https://www.facebook.com/timetosurf.ee">Facebook</a>
              <a href="https://www.instagram.com/timetosurf.ee/">Instagram</a>
              <a href="https://t.me/Andrei_Time_to_Surf">Telegram</a>
            </div>
          </div>
          <div>
            <h3>{t.linksTitle}</h3>
            {t.nav.map((item, index) => <a key={item} href={["#program", "#activities", "#program", "#faq", "#contact"][index]}>{item}</a>)}
          </div>
          <div>
            <h3>{t.eventTitle}</h3>
            <p>Stroomi rand, Tallinn</p>
            <p>3-4 h</p>
            <p>€350</p>
          </div>
          <div>
            <h3>{t.socialTitle}</h3>
            <a href="tel:+37255512872">+372 55 512 872</a>
            <a href={`mailto:${t.email}`}>{t.email}</a>
            <a href="https://t.me/Andrei_Time_to_Surf">Telegram</a>
          </div>
        </div>
        <a className="northpixel" href="https://northpixel.ee" target="_blank" rel="noreferrer">{t.north}</a>
      </footer>
    </main>
  );
}
