// DEBUGGING LOGS: Verify script loading order
console.log("--> script.js HAS STARTED EXECUTION.");

// --- FUNCTIONS DEFINITIONS ---
// Smooth scroll for in-page links
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  console.log("Smooth scroll event listeners set.");
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
  const datetimeElement = document.getElementById("datetime");
  if (datetimeElement) {
    datetimeElement.textContent = `Today is ${date}, ${time}`;
  }
}
setInterval(updateDateTime, 1000); // This will keep updating

// Language translations
const translations = {
  en: {
    headings: {
      intro: "Introduction",
      home: "Home",
      history: "History",
      gallery: "Gallery",
      map: "Map of Ramaul",
      // universities: "Top 10 Universities in the World (QS World University Rankings 2026)", // Removed if not needed
      after12_main: "Undergraduate Programs After 12th",
      science_stream: "Science Stream",
      commerce_stream: "Commerce Stream",
      management_stream: "Management Stream", // Placeholder
      arts_stream: "Arts & Humanities Stream",
      graduate_programs_main: "Graduate Programs (Postgraduate)",
      emerging_careers_main: "Emerging Careers & Their Use",
      admission_info_main: "Admission Information", // Main Admission section heading
      residency_admission_sub: "Residency Admission in the USA", // SUB-HEADING directly under Admission Info
      mbbs_admission_nepal_sub: "MBBS Admission Process in Nepal (2025–26)", // NEW MBBS Admission Sub-heading
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
    universities_list: [
      // If you decide to re-add universities later, this data is here
      // { name: "Massachusetts Institute of Technology (MIT)", details: [...] },
      // ... (rest of university data) ...
    ],
    after12_programs: {
      science: [
        {
          program: "B.Tech / B.E",
          specializations: "Computer Science, Mechanical, Civil, Electronics",
          job_scope:
            "Software Developer, DevOps Engineer, Data Analyst, Mechanical Engineer",
        },
        {
          program: "B.Sc",
          specializations: "Physics, Chemistry, Biology, IT, Mathematics",
          job_scope:
            "Lab Technician, Research Assistant, Data Scientist, Environmental Analyst",
        },
        {
          program: "MBBS / BDS",
          specializations: "Medicine, Dentistry",
          job_scope: "Doctor, Surgeon, Dentist, Medical Researcher",
        },
        {
          program: "B.Pharm",
          specializations: "Pharmacy",
          job_scope: "Pharmacist, Drug Safety Associate, Clinical Researcher",
        },
        {
          program: "BCA",
          specializations: "Computer Applications",
          job_scope: "Web Developer, App Developer, QA Tester",
        },
      ],
      commerce: [
        {
          program: "B.Com",
          specializations: "Accounting, Finance, Taxation",
          job_scope: "Accountant, Auditor, Financial Analyst, Tax Consultant",
        },
        {
          program: "BBA / BBM",
          specializations: "Business Administration, Management",
          job_scope: "Business Analyst, HR Executive, Marketing Manager",
        },
        {
          program: "CA / CS",
          specializations: "Chartered Accountancy, Company Secretary",
          job_scope:
            "Chartered Accountant, Compliance Officer, Corporate Advisor",
        },
        {
          program: "BBS",
          specializations: "Business Studies, Marketing, Finance",
          job_scope: "Business Manager, Marketing Executive, Financial Advisor",
        },
      ],
      management: [], // Keep as empty for now
      arts: [
        {
          program: "B.A",
          specializations: "Psychology, History, Political Science, Sociology",
          job_scope: "Counselor, Historian, Civil Services, NGO Worker",
        },
        {
          program: "BFA",
          specializations: "Fine Arts",
          job_scope: "Illustrator, Graphic Designer, Art Director",
        },
        {
          program: "BJMC",
          specializations: "Journalism & Mass Communication",
          job_scope: "Journalist, News Anchor, PR Executive",
        },
        {
          program: "LLB (Integrated)",
          specializations: "Law",
          job_scope: "Lawyer, Legal Advisor, Corporate Counsel",
        },
      ],
    },
    graduate_programs_intro:
      "After completing an undergraduate degree, students can pursue a master's program to specialize further:",
    graduate_programs_list: [
      {
        program: "M.Tech / M.E",
        field: "Engineering",
        job_scope: "Senior Developer, Systems Architect, R&D Engineer",
      },
      {
        program: "M.Sc",
        field: "Science",
        job_scope: "Research Scientist, Data Analyst, Academic Lecturer",
      },
      {
        program: "MBA",
        field: "Business",
        job_scope: "Product Manager, Strategy Consultant, Operations Head",
      },
      {
        program: "M.Com",
        field: "Commerce",
        job_scope: "Investment Banker, Financial Planner, Economist",
      },
      {
        program: "MA",
        field: "Humanities",
        job_scope: "Policy Analyst, Educator, Content Strategist",
      },
      {
        program: "MCA",
        field: "Computer Applications",
        job_scope: "Software Architect, Cloud Engineer, Cybersecurity Analyst",
      },
      {
        program: "LLM",
        field: "Law",
        job_scope: "Legal Consultant, Judge, International Law Expert",
      },
      {
        program: "M.Pharm",
        field: "Pharmacy",
        job_scope: "Clinical Pharmacist, Regulatory Affairs Manager",
      },
    ],
    emerging_careers_list: [
      {
        career_title: "Customer Success Engineer",
        primary_use:
          "Ensures client satisfaction with tech products; bridges support and engineering",
      },
      {
        career_title: "Digital Identity Manager",
        primary_use:
          "Manages secure digital identities; critical for cybersecurity and data privacy",
      },
      {
        career_title: "RPA Developer",
        primary_use:
          "Designs bots to automate repetitive tasks; boosts efficiency in operations",
      },
      {
        career_title: "AR Experience Manager",
        primary_use:
          "Creates immersive augmented reality experiences; used in retail, education",
      },
      {
        career_title: "Chief Remote Work Officer",
        primary_use:
          "Overses remote work strategy; enhances productivity and culture in hybrid teams",
      },
      {
        career_title: "Renewable Energy Engineer",
        primary_use:
          "Develops sustainable energy solutions; vital for climate and infrastructure goals",
      },
      {
        career_title: "Cybersecurity Engineer",
        primary_use:
          "Protects systems from cyber threats; essential for data integrity and compliance",
      },
      {
        career_title: "AI Prompt Engineer",
        primary_use:
          "Crafts effective prompts for AI models; improves accuracy and relevance of outputs",
      },
      {
        career_title: "Blockchain Specialist",
        primary_use:
          "Builds decentralized systems; revolutionizes finance, supply chain, and security",
      },
      {
        career_title: "Sustainability Analyst",
        primary_use:
          "Evaluates environmental impact; guides eco-friendly business decisions",
      },
    ],
    residency_admission_list: [
      {
        step: "1. Graduate from a Recognized Medical School",
        description:
          "Your school must be listed in the World Directory of Medical Schools and eligible for ECFMG certification.",
        notes: "Check for ECFMG “Sponsor Notes”",
      },
      {
        step: "2. Obtain ECFMG Certification",
        description:
          "Required for IMGs to apply for residency. Includes document verification and passing USMLE exams.",
        notes: "Start during 3rd year of med school if possible",
      },
      {
        step: "3. Pass USMLE Step 1 & Step 2 CK",
        description:
          "These exams assess medical knowledge and clinical skills. High scores improve match chances.",
        notes: "Aim for first-attempt success",
      },
      {
        step: "4. Gain U.S. Clinical Experience",
        description:
          "Hands-on experience in U.S. hospitals through electives or observerships.",
        notes: "Helps with letters of recommendation",
      },
      {
        step: "5. Prepare Application Materials",
        description:
          "Includes personal statement, CV, MSPE, transcripts, and letters of recommendation.",
        notes: "Tailor to your specialty and strengths",
      },
      {
        step: "6. Apply via ERAS",
        description:
          "Use the Electronic Residency Application Service to submit applications to programs.",
        notes: "Opens in June; submit early for best results",
      },
      {
        step: "7. Register for NRMP Match",
        description:
          "The National Resident Matching Program pairs applicants with residency programs.",
        notes: "Match Day is typically in March",
      },
      {
        step: "8. Attend Interviews",
        description:
          "Programs invite selected applicants for interviews between October and January.",
        notes: "Practice communication and professionalism",
      },
      {
        step: "9. Rank Programs",
        description: "Submit your ranked list of preferred programs to NRMP.",
        notes: "Programs also rank applicants",
      },
      {
        step: "10. Match Results",
        description:
          "If matched, you begin residency in July. If unmatched, you may enter SOAP or reapply next year.",
        notes: "SOAP = Supplemental Offer and Acceptance Program",
      },
    ],
    mbbs_admission_nepal_list: [
      // NEW MBBS Admission Data
      {
        step: "1. Meet Eligibility Criteria",
        description:
          "Complete 10+2 with Physics, Chemistry, Biology; minimum 50% aggregate in PCB",
        notes: "Age ≥ 17 years by Dec 31 of admission year",
      },
      {
        step: "2. Qualify NEET-UG",
        description:
          "Mandatory for Indian students to apply to Nepalese medical colleges",
        notes: "NEET score valid for 3 years",
      },
      {
        step: "3. Register for MECEE-BL",
        description:
          "Common entrance exam conducted by Nepal’s Medical Education Commission",
        notes: "Required for top colleges like IoM, BPKIHS, PAHS",
      },
      {
        step: "4. Choose Medical University",
        description:
          "Select NMC-approved colleges such as KIST, Kathmandu Medical, Nobel, Lumbini",
        notes: "Consider fees, location, faculty, and recognition",
      },
      {
        step: "5. Submit Application",
        description:
          "Apply online via MECEE portal or directly to private colleges",
        notes: "Include academic records, NEET score, ID proof",
      },
      {
        step: "6. Attend Counseling / Interview",
        description: "Based on MECEE rank or direct admission route",
        notes: "Helps finalize college and seat allocation",
      },
      {
        step: "7. Confirm Admission",
        description: "Pay initial fees and submit required documents",
        notes: "Receive admission letter from the university",
      },
      {
        step: "8. Begin Academic Session",
        description: "Classes typically start in August–September",
        notes: "Duration: 5.5 years (including 1-year internship)",
      },
    ],
  },
  np: {
    headings: {
      intro: "परिचय",
      home: "गृह",
      history: "इतिहास",
      gallery: "ग्यालरी",
      map: "रमौल को नक्सा",
      // universities: "विश्वका शीर्ष १० विश्वविद्यालयहरू (QS वर्ल्ड युनिभर्सिटी र्याङ्किङ्ग्स २०२६)", // Removed if not needed
      after12_main: "१२ कक्षा पछि स्नातक कार्यक्रमहरू",
      science_stream: "विज्ञान संकाय",
      commerce_stream: "वाणिज्य संकाय",
      management_stream: "व्यवस्थापन संकाय", // Placeholder
      arts_stream: "कला र मानविकी संकाय",
      graduate_programs_main: "स्नातकोत्तर कार्यक्रमहरू",
      emerging_careers_main: "उभरदो करियर र तिनीहरूको प्रयोग",
      admission_info_main: "प्रवेश जानकारी",
      residency_admission_sub:
        "संयुक्त राज्य अमेरिकामा रेसिडेन्सी प्रवेश पाउनका लागि चरणहरू",
      mbbs_admission_nepal_sub: "नेपालमा MBBS भर्ना प्रक्रिया (२०२५–२६)", // NEW MBBS Admission Sub-heading
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
    // universities_list: [], // Removed if not needed
    after12_programs: {
      science: [
        {
          program: "बी.टेक / बी.ई",
          specializations: "कम्प्युटर विज्ञान, मेकानिकल, सिभिल, इलेक्ट्रोनिक्स",
          job_scope:
            "सफ्टवेयर डेभलपर, DevOps इन्जिनियर, डेटा एनालिस्ट, मेकानिकल इन्जिनियर",
        },
        {
          program: "बी.एससी",
          specializations: "भौतिक विज्ञान, रसायन विज्ञान, जीवविज्ञान, IT, गणित",
          job_scope:
            "ल्याब टेक्निसियन, अनुसन्धान सहायक, डेटा साइन्टिस्ट, वातावरणीय विश्लेषक",
        },
        {
          program: "MBBS / BDS",
          specializations: "चिकित्सा, दन्तचिकित्सा",
          job_scope: "डाक्टर, सर्जन, दन्त चिकित्सक, मेडिकल अनुसन्धानकर्ता",
        },
        {
          program: "बी.फार्म",
          specializations: "फार्मेसी",
          job_scope:
            "फार्मासिस्ट, ड्रग सेफ्टी एसोसिएट, क्लिनिकल अनुसन्धानकर्ता",
        },
        {
          program: "BCA",
          specializations: "कम्प्युटर अनुप्रयोगहरू",
          job_scope: "वेब डेभलपर, एप डेभलपर, QA टेस्टर",
        },
      ],
      commerce: [
        {
          program: "बी.कम",
          specializations: "लेखा, वित्त, कर",
          job_scope: "लेखापाल, अडिटर, वित्तीय विश्लेषक, कर सल्लाहकार",
        },
        {
          program: "BBA / BBM",
          specializations: "व्यवसाय प्रशासन, व्यवस्थापन",
          job_scope: "व्यवसाय विश्लेषक, HR कार्यकारी, मार्केटिङ प्रबन्धक",
        },
        {
          program: "CA / CS",
          specializations: "चार्टर्ड अकाउन्ट्यान्सी, कम्पनी सेक्रेटरी",
          job_scope:
            "चार्टर्ड एकाउन्टेन्ट, अनुपालन अधिकारी, कर्पोरेट सल्लाहकार",
        },
        {
          program: "BBS",
          specializations: "व्यवसाय अध्ययन, मार्केटिङ, वित्त",
          job_scope: "व्यवसाय प्रबन्धक, मार्केटिङ कार्यकारी, वित्तीय सल्लाहकार",
        },
      ],
      management: [], // Keep as empty for now
      arts: [
        {
          program: "बी.ए",
          specializations: "मनोविज्ञान, इतिहास, राजनीति विज्ञान, समाजशास्त्र",
          job_scope:
            "काउन्सिलर, इतिहासकार, निजामती सेवा, गैरसरकारी संस्था कार्यकर्ता",
        },
        {
          program: "BFA",
          specializations: "ललित कला",
          job_scope: "चित्रकार, ग्राफिक डिजाइनर, कला निर्देशक",
        },
        {
          program: "BJMC",
          specializations: "पत्रकारिता र जनसञ्चार",
          job_scope: "पत्रकार, समाचार वाचक, PR कार्यकारी",
        },
        {
          program: "LLB (Integrated)",
          specializations: "कानून",
          job_scope: "वकिल, कानूनी सल्लाहकार, कर्पोरेट सल्लाहकार",
        },
      ],
    },
    graduate_programs_intro:
      "स्नातक डिग्री पूरा गरेपछि, विद्यार्थीहरू थप विशेषज्ञता हासिल गर्न मास्टरको कार्यक्रमहरू अध्ययन गर्न सक्छन्:",
    graduate_programs_list: [
      {
        program: "एम.टेक / एम.ई",
        field: "इन्जिनियरिङ",
        job_scope: "वरिष्ठ विकासकर्ता, प्रणाली आर्किटेक्ट, R&D इन्जिनियर",
      },
      {
        program: "एम.एससी",
        field: "विज्ञान",
        job_scope: "अनुसन्धान वैज्ञानिक, डेटा एनालिस्ट, अकादमिक लेक्चरर",
      },
      {
        program: "एमबीए",
        field: "व्यवसाय",
        job_scope: "उत्पादन प्रबन्धक, रणनीति सल्लाहकार, सञ्चालन प्रमुख",
      },
      {
        program: "एम.कम",
        field: "वाणिज्य",
        job_scope: "लगानी बैंकर, वित्तीय योजनाकार, अर्थशास्त्री",
      },
      {
        program: "एम.ए",
        field: "मानविकी",
        job_scope: "नीति विश्लेषक, शिक्षक, सामग्री रणनीतिकार",
      },
      {
        program: "MCA",
        field: "कम्प्युटर अनुप्रयोगहरू",
        job_scope:
          "सफ्टवेयर आर्किटेक्ट, क्लाउड इन्जिनियर, साइबर सुरक्षा विश्लेषक",
      },
      {
        program: "LLM",
        field: "कानून",
        job_scope:
          "कानूनी सल्लाहकार, न्यायाधीश, अन्तर्राष्ट्रिय कानून विशेषज्ञ",
      },
      {
        program: "एम.फार्म",
        field: "फार्मेसी",
        job_scope: "क्लिनिकल फार्मासिस्ट, नियामक मामिला प्रबन्धक",
      },
    ],
    emerging_careers_list: [
      {
        career_title: "ग्राहक सफलता इन्जिनियर",
        primary_use:
          "प्राविधिक उत्पादनहरूसँग ग्राहक सन्तुष्टि सुनिश्चित गर्दछ; समर्थन र इन्जिनियरिङ बीच पुलको काम गर्छ।",
      },
      {
        career_title: "डिजिटल पहिचान प्रबन्धक",
        primary_use:
          "सुरक्षित डिजिटल पहिचानहरू प्रबन्ध गर्दछ; साइबर सुरक्षा र डेटा गोपनीयताको लागि महत्त्वपूर्ण।",
      },
      {
        career_title: "RPA विकासकर्ता",
        primary_use:
          "दोहोरिने कार्यहरू स्वचालित गर्न बोटहरू डिजाइन गर्दछ; सञ्चालनमा दक्षता बढाउँछ।",
      },
      {
        career_title: "एआर अनुभव प्रबन्धक",
        primary_use:
          "इमर्सिभ संवर्धित वास्तविकता अनुभवहरू सिर्जना गर्दछ; खुद्रा, शिक्षामा प्रयोग गरिन्छ।",
      },
      {
        career_title: "प्रमुख रिमोट कार्य अधिकारी",
        primary_use:
          "रिमोट कार्य रणनीतिहरूको निरीक्षण गर्दछ; हाइब्रिड टोलीहरूमा उत्पादकत्व र संस्कृति बढाउँछ।",
      },
      {
        career_title: "नवीकरणीय ऊर्जा इन्जिनियर",
        primary_use:
          "दिगो ऊर्जा समाधानहरू विकास गर्दछ; जलवायु र पूर्वाधार लक्ष्यहरूको लागि महत्त्वपूर्ण।",
      },
      {
        career_title: "साइबर सुरक्षा इन्जिनियर",
        primary_use:
          "साइबर खतराहरूबाट प्रणालीहरूलाई सुरक्षित गर्दछ; डेटा अखण्डता र अनुपालनका लागि आवश्यक।",
      },
      {
        career_title: "एआई प्रम्प्ट इन्जिनियर",
        primary_use:
          "एआई मोडेलहरूको लागि प्रभावकारी प्रम्प्टहरू सिर्जना गर्दछ; आउटपुटहरूको शुद्धता र प्रासंगिकता सुधार गर्दछ।",
      },
      {
        career_title: "ब्लकचेन विशेषज्ञ",
        primary_use:
          "विकेन्द्रीकृत प्रणालीहरू निर्माण गर्दछ; वित्त, आपूर्ति श्रृंखला र सुरक्षामा क्रान्ति ल्याउँछ।",
      },
      {
        career_title: "दिगोपन विश्लेषक",
        primary_use:
          "वातावरणीय प्रभावको मूल्याङ्कन गर्दछ; पर्यावरण-मैत्री व्यवसायिक निर्णयहरू मार्गदर्शन गर्दछ।",
      },
    ],
    residency_admission_list: [
      {
        step: "1. Graduate from a Recognized Medical School",
        description:
          "Your school must be listed in the World Directory of Medical Schools and eligible for ECFMG certification.",
        notes: "Check for ECFMG “Sponsor Notes”",
      },
      {
        step: "2. Obtain ECFMG Certification",
        description:
          "Required for IMGs to apply for residency. Includes document verification and passing USMLE exams.",
        notes: "Start during 3rd year of med school if possible",
      },
      {
        step: "3. Pass USMLE Step 1 & Step 2 CK",
        description:
          "These exams assess medical knowledge and clinical skills. High scores improve match chances.",
        notes: "Aim for first-attempt success",
      },
      {
        step: "4. Gain U.S. Clinical Experience",
        description:
          "Hands-on experience in U.S. hospitals through electives or observerships.",
        notes: "Helps with letters of recommendation",
      },
      {
        step: "5. Prepare Application Materials",
        description:
          "Includes personal statement, CV, MSPE, transcripts, and letters of recommendation.",
        notes: "Tailor to your specialty and strengths",
      },
      {
        step: "6. Apply via ERAS",
        description:
          "Use the Electronic Residency Application Service to submit applications to programs.",
        notes: "Opens in June; submit early for best results",
      },
      {
        step: "7. Register for NRMP Match",
        description:
          "The National Resident Matching Program pairs applicants with residency programs.",
        notes: "Match Day is typically in March",
      },
      {
        step: "8. Attend Interviews",
        description:
          "Programs invite selected applicants for interviews between October and January.",
        notes: "Practice communication and professionalism",
      },
      {
        step: "9. Rank Programs",
        description: "Submit your ranked list of preferred programs to NRMP.",
        notes: "Programs also rank applicants",
      },
      {
        step: "10. Match Results",
        description:
          "If matched, you begin residency in July. If unmatched, you may enter SOAP or reapply next year.",
        notes: "SOAP = Supplemental Offer and Acceptance Program",
      },
    ],
    mbbs_admission_nepal_list: [
      // NEW MBBS Admission Data
      {
        step: "1. Meet Eligibility Criteria",
        description:
          "Complete 10+2 with Physics, Chemistry, Biology; minimum 50% aggregate in PCB",
        notes: "Age ≥ 17 years by Dec 31 of admission year",
      },
      {
        step: "2. Qualify NEET-UG",
        description:
          "Mandatory for Indian students to apply to Nepalese medical colleges",
        notes: "NEET score valid for 3 years",
      },
      {
        step: "3. Register for MECEE-BL",
        description:
          "Common entrance exam conducted by Nepal’s Medical Education Commission",
        notes: "Required for top colleges like IoM, BPKIHS, PAHS",
      },
      {
        step: "4. Choose Medical University",
        description:
          "Select NMC-approved colleges such as KIST, Kathmandu Medical, Nobel, Lumbini",
        notes: "Consider fees, location, faculty, and recognition",
      },
      {
        step: "5. Submit Application",
        description:
          "Apply online via MECEE portal or directly to private colleges",
        notes: "Include academic records, NEET score, ID proof",
      },
      {
        step: "6. Attend Counseling / Interview",
        description: "Based on MECEE rank or direct admission route",
        notes: "Helps finalize college and seat allocation",
      },
      {
        step: "7. Confirm Admission",
        description: "Pay initial fees and submit required documents",
        notes: "Receive admission letter from the university",
      },
      {
        step: "8. Begin Academic Session",
        description: "Classes typically start in August–September",
        notes: "Duration: 5.5 years (including 1-year internship)",
      },
    ],
  },
};

function setLanguage(lang) {
  const introHeading = document.getElementById("intro-heading");
  if (introHeading)
    introHeading.textContent = translations[lang].headings.intro;

  const homeHeading = document.getElementById("home-heading");
  if (homeHeading) homeHeading.textContent = translations[lang].headings.home;

  const historyHeading = document.getElementById("history-heading");
  if (historyHeading)
    historyHeading.textContent = translations[lang].headings.history;

  const galleryHeading = document.getElementById("gallery-heading");
  if (galleryHeading)
    galleryHeading.textContent = translations[lang].headings.gallery;

  const mapHeading = document.getElementById("map-heading");
  if (mapHeading) mapHeading.textContent = translations[lang].headings.map;

  // Headings for After 12th section
  const after12MainHeading = document.getElementById("after12-main-heading");
  if (after12MainHeading)
    after12MainHeading.textContent = translations[lang].headings.after12_main;

  const scienceStreamHeading = document.getElementById(
    "science-stream-heading"
  );
  if (scienceStreamHeading)
    scienceStreamHeading.textContent =
      translations[lang].headings.science_stream;

  const commerceStreamHeading = document.getElementById(
    "commerce-stream-heading"
  );
  if (commerceStreamHeading)
    commerceStreamHeading.textContent =
      translations[lang].headings.commerce_stream;

  const managementStreamHeading = document.getElementById(
    "management-stream-heading"
  );
  if (managementStreamHeading)
    managementStreamHeading.textContent =
      translations[lang].headings.management_stream;

  const artsStreamHeading = document.getElementById("arts-stream-heading");
  if (artsStreamHeading)
    artsStreamHeading.textContent = translations[lang].headings.arts_stream;

  // Heading for Graduate Programs section
  const graduateProgramsMainHeading = document.getElementById(
    "graduate-programs-main-heading"
  );
  if (graduateProgramsMainHeading)
    graduateProgramsMainHeading.textContent =
      translations[lang].headings.graduate_programs_main;

  // Intro text for Graduate Programs
  const graduateProgramsIntroText = document.getElementById(
    "graduate-programs-intro-text"
  );
  if (graduateProgramsIntroText)
    graduateProgramsIntroText.textContent =
      translations[lang].graduate_programs_intro;

  // Heading for Emerging Careers section
  const emergingCareersMainHeading = document.getElementById(
    "emerging-careers-main-heading"
  );
  if (emergingCareersMainHeading)
    emergingCareersMainHeading.textContent =
      translations[lang].headings.emerging_careers_main;

  // Heading for Admission Information section
  const admissionInfoMainHeading = document.getElementById(
    "admission-info-main-heading"
  );
  if (admissionInfoMainHeading)
    admissionInfoMainHeading.textContent =
      translations[lang].headings.admission_info_main;

  // Sub-heading for Residency Admission
  const residencyAdmissionSubHeading = document.getElementById(
    "residency-admission-sub-heading"
  );
  if (residencyAdmissionSubHeading)
    residencyAdmissionSubHeading.textContent =
      translations[lang].headings.residency_admission_sub;

  // NEW: Sub-heading for MBBS Admission Nepal
  const mbbsAdmissionNepalSubHeading = document.getElementById(
    "mbbs-admission-nepal-sub-heading"
  );
  if (mbbsAdmissionNepalSubHeading)
    mbbsAdmissionNepalSubHeading.textContent =
      translations[lang].headings.mbbs_admission_nepal_sub;

  const introParagraph = document.getElementById("intro")?.querySelector("p");
  if (introParagraph) introParagraph.textContent = translations[lang].intro[0];

  const historyParagraph = document
    .getElementById("history")
    ?.querySelector("p");
  if (historyParagraph)
    historyParagraph.textContent = translations[lang].history[0];

  const homeParagraphs = document.getElementById("home")?.querySelectorAll("p");
  if (homeParagraphs) {
    translations[lang].home.forEach((paragraphText, index) => {
      if (homeParagraphs[index]) {
        homeParagraphs[index].textContent = paragraphText;
      }
    });
  }

  // Populate programs tables
  populateProgramsTable(
    "science-table-container",
    translations[lang].after12_programs.science,
    lang
  );
  populateProgramsTable(
    "commerce-table-container",
    translations[lang].after12_programs.commerce,
    lang
  );
  populateProgramsTable(
    "arts-table-container",
    translations[lang].after12_programs.arts,
    lang
  );
  populateProgramsTable(
    "management-table-container",
    translations[lang].after12_programs.management,
    lang
  );

  // Populate Graduate Programs table
  populateGraduateProgramsTable(
    "graduate-table-container",
    translations[lang].graduate_programs_list,
    lang
  );

  // Populate Emerging Careers table
  populateEmergingCareersTable(
    "emerging-careers-table-container",
    translations[lang].emerging_careers_list,
    lang
  );

  // Populate Residency Admission table
  populateResidencyAdmissionTable(
    "residency-table-container",
    translations[lang].residency_admission_list,
    lang
  );

  // NEW: Populate MBBS Admission Nepal table
  populateMBBSAdmissionNepalTable(
    "mbbs-admission-nepal-table-container",
    translations[lang].mbbs_admission_nepal_list,
    lang
  );

  console.log("Language switched to:", lang);
}

// Function to populate generic tables (used for Undergraduate, Graduate, Emerging Careers, Residency, MBBS Nepal)
function populateProgramsTable(containerId, data, lang) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`Container with ID '${containerId}' not found for table.`);
    return;
  }

  container.innerHTML = ""; // Clear existing table

  if (!data || data.length === 0) {
    const noDataMessage = document.createElement("p");
    noDataMessage.textContent =
      lang === "en"
        ? "No programs available for this stream yet."
        : "यस संकायका लागि हाल कुनै कार्यक्रम उपलब्ध छैनन्।";
    container.appendChild(noDataMessage);
    return;
  }

  const table = document.createElement("table");
  table.classList.add("programs-table"); // Add a class for styling

  // Determine headers dynamically based on the first item's keys
  const firstItemKeys = Object.keys(data[0]);
  const headerMap = {
    program: { en: "Program", np: "कार्यक्रम" },
    specializations: { en: "Specializations", np: "विशेषज्ञताहरू" },
    job_scope: { en: "Job Scope", np: "रोजगार क्षेत्र" },
    field: { en: "Field", np: "क्षेत्र" },
    career_title: { en: "Career Title", np: "करियर शीर्षक" },
    primary_use: { en: "Primary Use / Impact", np: "प्राथमिक प्रयोग / प्रभाव" },
    step: { en: "Step", np: "चरण" },
    description: { en: "Description", np: "विवरण" },
    notes: { en: "Notes", np: "नोटहरू" },
  };

  // Create table header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  firstItemKeys.forEach((key) => {
    const th = document.createElement("th");
    th.textContent = headerMap[key] ? headerMap[key][lang] : key;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  const tbody = document.createElement("tbody");
  data.forEach((item) => {
    const row = document.createElement("tr");
    firstItemKeys.forEach((key) => {
      const cell = document.createElement("td");
      cell.textContent = item[key];
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  container.appendChild(table);
  console.log(`Table populated for ${containerId}.`);
}

// Function for Graduate Programs table (uses generic populateProgramsTable)
function populateGraduateProgramsTable(containerId, data, lang) {
  populateProgramsTable(containerId, data, lang);
  console.log(
    `Graduate programs table populated for ${containerId} (via generic).`
  );
}

// Function for Emerging Careers table (uses generic populateProgramsTable)
function populateEmergingCareersTable(containerId, data, lang) {
  populateProgramsTable(containerId, data, lang);
  console.log(
    `Emerging careers table populated for ${containerId} (via generic).`
  );
}

// Function for Residency Admission table (uses generic populateProgramsTable)
function populateResidencyAdmissionTable(containerId, data, lang) {
  populateProgramsTable(containerId, data, lang);
  console.log(
    `Residency Admission table populated for ${containerId} (via generic).`
  );
}

// NEW: Function for MBBS Admission Nepal table (uses generic populateProgramsTable)
function populateMBBSAdmissionNepalTable(containerId, data, lang) {
  populateProgramsTable(containerId, data, lang);
  console.log(
    `MBBS Admission Nepal table populated for ${containerId} (via generic).`
  );
}

// Keyboard shortcut: Ctrl + L toggles language
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === "l") {
    const introHeading = document.getElementById("intro-heading");
    if (introHeading) {
      const currentHeading = introHeading.textContent;
      const currentLang =
        currentHeading === translations.np.headings.intro ? "np" : "en";
      const nextLang = currentLang === "en" ? "np" : "en";
      setLanguage(nextLang);
    } else {
      console.warn("intro-heading not found for language toggle shortcut.");
    }
  }
});

// --- Initial execution when DOM is ready ---
document.addEventListener("DOMContentLoaded", () => {
  console.log("--> DOMContentLoaded event fired in script.js.");

  // Initial call for Gregorian date/time
  updateDateTime();

  // Initial language setup based on browser
  const browserLang = navigator.language || navigator.userLanguage;
  const initialLang = browserLang.startsWith("ne") ? "np" : "en";
  setLanguage(initialLang);
  console.log("Initial language set to:", initialLang);

  // Explicit button handling for language toggle
  const btnEn = document.getElementById("btn-en");
  const btnNp = document.getElementById("btn-np");

  if (btnEn) {
    btnEn.addEventListener("click", () => {
      setLanguage("en");
      console.log("English button clicked.");
    });
  } else {
    console.warn("English button (id='btn-en') not found.");
  }

  if (btnNp) {
    btnNp.addEventListener("click", () => {
      setLanguage("np");
      console.log("Nepali button clicked.");
    });
  } else {
    console.warn("Nepali button (id='btn-np') not found.");
  }
  console.log("Language button event listeners set.");
}); // End of DOMContentLoaded
