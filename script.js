// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Live Gregorian date and time
function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = now.toLocaleDateString(undefined, options);
  const time = now.toLocaleTimeString();
  document.getElementById("datetime").textContent = `Today is ${date}, ${time}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Language translations (No change needed here from your last version, it's correct)
const translations = {
  en: {
    headings: {
      intro: "Introduction",
      home: "Home",
      history: "History",
      gallery: "Gallery",
      map: "Map of Ramaul",
    },
    intro: [
      "Ramaul is a lively village in Siraha Municipality, located in the Madhesh Province of southeastern Nepal. Known for its cultural richness and community spirit, Ramaul is more of a town than a village, with easy access to goods from both the border and Siraha Bazaar.",
    ],
    home: [
      "Geographically, Ramaul lies at 26.80°N 86.09°E and is surrounded by Makhanaha, Basbitta, Manpur, Madar, and the Kamala River. The population ranges between 20,000–25,000, predominantly Muslim, with a unique dialect called Mithila Urdu spoken locally.",
      "The village is divided into five areas: Purab Tola, Uttar Tola, Paschim Tola, Dakshin Tola, and Mansoori Tola. Ramaul Chowk is the central hub, home to the popular Ahmadiya Tea Shop and Eidgah grounds for community prayers.",
    ],
    history: [
      "Previously part of the Village Development Committee, Ramaul now falls under Siraha Municipality Wards 3, 4, and 5. It has a rich tradition of Islamic education with six madrasahs, ten mosques, and both government and private schools. The Kamala River flowing nearby adds to its scenic and strategic significance.",
    ],
  },
  np: {
    headings: {
      intro: "परिचय",
      home: "गृह",
      history: "इतिहास",
      gallery: "ग्यालरी",
      map: "रमौल को नक्सा",
    },
    intro: [
      "रमौल दक्षिणपूर्वी नेपालको मधेश प्रदेशको सिराहा नगरपालिका अन्तर्गतको एक जीवन्त गाउँ हो। आफ्नो सांस्कृतिक समृद्धि र सामुदायिक भावनाका लागि परिचित रमौल गाउँभन्दा बढी सहरजस्तो छ, जहाँ सीमा र सिराहा बजार दुवैबाट सामानहरू सजिलै प्राप्त गर्न सकिन्छ।",
    ],
    home: [
      "भौगोलिक रूपमा, रमौल २६.८०°N ८६.०९°E मा अवस्थित छ र मखानहा, बासबिट्टा, मनपुर, मदार र कमला नदीले घेरिएको छ। यसको जनसंख्या २०,०००-२५,००० बीचमा छ, जसमा मुस्लिम समुदायको बाहुल्यता छ, र स्थानीय रूपमा मिथिला उर्दू नामक एक अद्वितीय बोली बोलिन्छ।",
      "गाउँ पाँच भागमा विभाजित छ: पूरब टोल, उत्तर टोल, पश्चिम टोल, दक्षिण टोल र मंसूरी टोल। रमौल चोक केन्द्रीय केन्द्र हो, जहाँ लोकप्रिय अहमदीया चिया पसल र सामुदायिक प्रार्थनाका लागि ईदगाह मैदानहरू छन्।",
    ],
    history: [
      "पहिले गाउँ विकास समिति अन्तर्गत पर्ने रमौल अहिले सिराहा नगरपालिका वार्ड ३, ४, र ५ मा पर्दछ। यसमा इस्लामिक शिक्षाको समृद्ध परम्परा छ, जसमा छवटा मदरसा, दश मस्जिद, र सरकारी तथा निजी विद्यालयहरू छन्। नजिकै बग्ने कमला नदीले यसको रमणीय र रणनीतिक महत्त्व बढाउँछ।",
    ],
  },
};

function setLanguage(lang) {
  document.getElementById("intro-heading").textContent =
    translations[lang].headings.intro;
  document.getElementById("home-heading").textContent =
    translations[lang].headings.home;
  document.getElementById("history-heading").textContent =
    translations[lang].headings.history;
  document.getElementById("gallery-heading").textContent =
    translations[lang].headings.gallery;
  document.getElementById("map-heading").textContent =
    translations[lang].headings.map;

  // Update paragraphs based on the translations structure
  document.getElementById("intro").querySelector("p").textContent =
    translations[lang].intro[0];
  document.getElementById("history").querySelector("p").textContent =
    translations[lang].history[0];

  const homeParagraphs = document.getElementById("home").querySelectorAll("p");
  translations[lang].home.forEach((paragraphText, index) => {
    if (homeParagraphs[index]) {
      homeParagraphs[index].textContent = paragraphText;
    }
  });

  console.log("Language switched to:", lang);
}

// Keyboard shortcut: Ctrl + L toggles language
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === "l") {
    const currentHeading = document.getElementById("intro-heading").textContent;
    const currentLang =
      currentHeading === translations.np.headings.intro ? "np" : "en";
    const nextLang = currentLang === "en" ? "np" : "en";
    setLanguage(nextLang);
  }
});

// Nepal Standard Time adjusted date generator (No change needed here)
function getNepaliDateISO(daysAgo = 0) {
  const nowUTC = new Date();
  const nepaliOffsetMs = (5 * 60 + 45) * 60 * 1000;
  const nepaliTime = new Date(
    nowUTC.getTime() + nepaliOffsetMs - daysAgo * 86400000
  );
  return nepaliTime.toISOString().split("T")[0];
}

// Forex rate section (No change needed here, assuming you uncommented it in HTML)
const fromDate = getNepaliDateISO(7);
const toDate = getNepaliDateISO(0);

fetch(
  `https://www.nrb.org.np/api/forex/v1/rates?from=${fromDate}&to=${toDate}&page=1&per_page=100`
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const payload = data.payload;
    if (Array.isArray(payload) && payload.length > 0) {
      const sorted = payload.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      for (const entry of sorted) {
        const usdRate = entry.rates.find(
          (rate) => rate.currency.iso3 === "USD"
        );
        if (usdRate) {
          const forexRateElement = document.getElementById("forex-rate");
          if (forexRateElement) {
            forexRateElement.textContent = `USD Buy: ${usdRate.buy} NPR, Sell: ${usdRate.sell} NPR (Date: ${entry.date})`;
          }
          return;
        }
      }
      const forexRateElement = document.getElementById("forex-rate");
      if (forexRateElement) {
        forexRateElement.textContent = "USD rate not available in recent data.";
      }
    } else {
      const forexRateElement = document.getElementById("forex-rate");
      if (forexRateElement) {
        forexRateElement.textContent = "No forex data found in recent range.";
      }
    }
  })
  .catch((error) => {
    console.error("Error fetching forex data:", error);
    const forexRateElement = document.getElementById("forex-rate");
    if (forexRateElement) {
      forexRateElement.textContent = "Unable to load forex rates.";
    }
  });

window.addEventListener("DOMContentLoaded", () => {
  const browserLang = navigator.language || navigator.userLanguage;
  const initialLang = browserLang.startsWith("ne") ? "np" : "en";
  setLanguage(initialLang);

  // Explicit button handling
  document
    .getElementById("btn-en")
    .addEventListener("click", () => setLanguage("en"));
  document
    .getElementById("btn-np")
    .addEventListener("click", () => setLanguage("np"));
});
