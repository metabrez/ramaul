// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

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

const translations = {
  en: {
    headings: {
      intro: "Introduction",
      home: "Home",
      history: "History",
      gallery: "Gallery",
      map: "Map of Ramaul",
    },
    intro:
      "Ramaul is a lively village in Siraha Municipality, located in the Madhesh Province of southeastern Nepal. Known for its cultural richness and community spirit, Ramaul is more of a town than a village, with easy access to goods from both the border and Siraha Bazaar.",
    home: "Geographically, Ramaul lies at 26.80°N 86.09°E and is surrounded by Makhanaha, Basbitta, Manpur, Madar, and the Kamala River. The population ranges between 20,000–25,000, predominantly Muslim, with a unique dialect called Mithila Urdu spoken locally.\nThe village is divided into five areas: Purab Tola, Uttar Tola, Paschim Tola, Dakshin Tola, and Mansoori Tola. Ramaul Chowk is the central hub, home to the popular Ahmadiya Tea Shop and Eidgah grounds for community prayers.",
    history:
      "Previously part of the Village Development Committee, Ramaul now falls under Siraha Municipality Wards 3, 4, and 5. It has a rich tradition of Islamic education with six madrasahs, ten mosques, and both government and private schools. The Kamala River flowing nearby adds to its scenic and strategic significance.",
  },
  np: {
    headings: {
      intro: "परिचय",
      home: "गृह",
      history: "इतिहास",
      gallery: "ग्यालरी",
      map: "रमौल को नक्सा",
    },
    intro:
      "रमौल  दक्षिणपूर्वी नेपालको मधेश प्रदेशको सिराहा नगरपालिका अन्तर्गतको एक जीवन्त गाउँ हो। सांस्कृतिक सम्पदा र सामुदायिक भावना लागि परिचित, रमौल  बजारको नजिकको स्थान र सिमानाबाट सामान पहुँचको कारण शहरजस्तो अनुभव गरिन्छ।",
    home: "भौगोलिक रूपमा, रमौल  २६.८०°N ८६.०९°E मा अवस्थित छ र मखनाहा, बसबिट्टा, मनपुर, मडर तथा कमला नदीले घेरिएको छ। जनसंख्या लगभग २०,०००–२५,००० रहेको छ र यहाँ मुस्लिम समुदायको प्रमुखता छ। मिथिला उर्दू नामक बोलचालको अनौठो भाषा बोलिन्छ।\nगाउँ पाँच भागमा विभाजित छ: पुरब टोल, उत्तर टोल, पश्चिम टोल, दक्षिण टोल, र मन्सूरी टोल। रमौल  चौक मुख्य केन्द्र हो, जहाँ प्रसिद्ध अहमदिया चिया पसल र ईदगाह स्थानहरू छन्।",
    history:
      "पहिले गाउँ विकास समिति अन्तर्गत पर्ने रमौल  अहिले सिराहा नगरपालिका वार्ड ३, ४, र ५ मा पर्दछ। यहाँ छवटा मदरसा, दसवटा मस्जिद, तथा सरकारी र निजी विद्यालयहरूको परम्परागत इस्लामी शिक्षा प्रणाली छ। नजिकै बग्ने कमला नदीले यस क्षेत्रलाई सुन्दरता र रणनीतिक महत्त्व प्रदान गर्दछ।",
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

  document.getElementById("intro").querySelector("p").textContent =
    translations[lang].intro;
  document.getElementById("home").querySelectorAll("p")[0].textContent =
    translations[lang].home.split("\n")[0];
  document.getElementById("home").querySelectorAll("p")[1].textContent =
    translations[lang].home.split("\n")[1];
  document.getElementById("history").querySelector("p").textContent =
    translations[lang].history;
}

window.addEventListener("DOMContentLoaded", () => {
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang.startsWith("ne")) {
    setLanguage("np");
  } else {
    setLanguage("en");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === "l") {
    const currentHeading = document.getElementById("intro-heading").textContent;
    const currentLang =
      currentHeading === translations.np.headings.intro ? "np" : "en";
    const nextLang = currentLang === "en" ? "np" : "en";
    setLanguage(nextLang);
  }
});

function getNepaliDate() {
  const now = new Date();
  const bsYearOffset = 56;
  const bsMonthOffset = 8;

  const adYear = now.getFullYear();
  const adMonth = now.getMonth() + 1;
  const adDate = now.getDate();

  let bsYear = adYear + bsYearOffset;
  let bsMonth = adMonth + bsMonthOffset;
  if (bsMonth > 12) {
    bsMonth -= 12;
    bsYear += 1;
  }

  const nepaliMonths = [
    "बैशाख",
    "जेठ",
    "असार",
    "श्रावण",
    "भदौ",
    "आश्विन",
    "कार्तिक",
    "मंसिर",
    "पौष",
    "माघ",
    "फाल्गुण",
    "चैत्र",
  ];
  const bsMonthName = nepaliMonths[bsMonth - 1];

  const bsDateString = `आजको मिति: ${bsMonthName} ${adDate}, ${bsYear} बी.सं.`;
  document.getElementById("bs-date").textContent = bsDateString;
}

getNepaliDate();

const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

fetch(
  `https://www.nrb.org.np/api/forex/v1/rates?from=${today}&to=${today}&page=1&per_page=100`
)
  .then((response) => response.json())
  .then((data) => {
    const ratesArray = data.payload?.[0]?.rates;
    if (ratesArray) {
      const usdRate = ratesArray.find((rate) => rate.currency.iso3 === "USD");
      if (usdRate) {
        document.getElementById(
          "forex-rate"
        ).textContent = `USD Buy: ${usdRate.buy} NPR, Sell: ${usdRate.sell} NPR`;
      } else {
        document.getElementById("forex-rate").textContent =
          "USD rate not available.";
      }
    } else {
      document.getElementById("forex-rate").textContent = "No rate data found.";
    }
  })
  .catch((error) => {
    console.error("Error fetching forex data:", error);
    document.getElementById("forex-rate").textContent =
      "Unable to load forex rates.";
  });
