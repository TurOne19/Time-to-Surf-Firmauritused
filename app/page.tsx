import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Trust from "@/components/Trust";
import FaqReviews from "@/components/FaqReviews";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "SportsActivityLocation"],
        "@id": "https://time-to-surf-firmauritused.vercel.app/#business",
        name: "Time to Surf",
        url: "https://time-to-surf-firmauritused.vercel.app/",
        logo: "https://time-to-surf-firmauritused.vercel.app/favicon.png",
        image: "https://time-to-surf-firmauritused.vercel.app/gallery/IMG_8818.JPG",
        description: "Veeprogrammid ja ettevõttepäevad Stroomi rannas Tallinnas.",
        telephone: "+37255512872",
        email: "info.timetosurf@gmail.com",
        foundingDate: "2013",
        priceRange: "€€",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Stroomi rand",
          addressLocality: "Tallinn",
          addressRegion: "Harju maakond",
          addressCountry: "EE",
        },
        geo: { "@type": "GeoCoordinates", latitude: 59.4363311, longitude: 24.6806022 },
        hasMap: "https://www.google.com/maps/place/Time+to+Surf+Stroomi/@59.4363311,24.6806022,15z/",
        areaServed: [
          { "@type": "City", name: "Tallinn" },
          { "@type": "Country", name: "Estonia" },
        ],
        sameAs: [
          "https://www.facebook.com/timetosurf.ee/",
          "https://www.instagram.com/timetosurf.ee/",
          "https://t.me/Andrei_Time_to_Surf",
        ],
      },
      {
        "@type": "Service",
        "@id": "https://time-to-surf-firmauritused.vercel.app/#service",
        name: "Ettevõttepäev ja veeprogramm Stroomi rannas",
        alternateName: ["Corporate day by the sea", "Корпоративный день у моря"],
        provider: { "@id": "https://time-to-surf-firmauritused.vercel.app/#business" },
        areaServed: { "@type": "City", name: "Tallinn" },
        serviceType: ["Corporate event", "Water sports program", "Beach event"],
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: "350",
          availability: "https://schema.org/InStock",
          url: "https://time-to-surf-firmauritused.vercel.app/#pricing",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://time-to-surf-firmauritused.vercel.app/#website",
        url: "https://time-to-surf-firmauritused.vercel.app/",
        name: "Time to Surf",
        inLanguage: ["et-EE", "en-GB", "ru-EE"],
        publisher: { "@id": "https://time-to-surf-firmauritused.vercel.app/#business" },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Nav />
      <Hero />
      <Intro />
      <Features />
      <Gallery />
      <Pricing />
      <Trust />
      <FaqReviews />
      <FinalCta />
      <Footer />
    </main>
  );
}
