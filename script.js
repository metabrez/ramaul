// DEBUGGING LOGS: Verify script loading order
console.log("--> script.js HAS STARTED EXECUTION.");

// --- FUNCTIONS DEFINITIONS ---
// Smooth scroll for in-page links, now also closes dropdown
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      // Check if it's an admission sub-link
      const isAdmissionSubLink = link.closest("#admission-dropdown");

      if (isAdmissionSubLink) {
        e.preventDefault(); // Prevent default if it's a sub-link, to handle scroll and dropdown close
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
          // Close the dropdown after clicking a sub-link
          const admissionDropdown =
            document.getElementById("admission-dropdown");
          if (admissionDropdown) {
            admissionDropdown.classList.remove("active");
            const toggleArrow = document.querySelector(
              "#admission-nav-toggle .dropdown-arrow"
            );
            if (toggleArrow) toggleArrow.textContent = "▼"; // Reset arrow
          }
        }
      } else if (targetId !== "#") {
        // For other regular nav links
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
  console.log("Smooth scroll event listeners set.");
}

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
      // REMOVED: intro: "Introduction",
      home: "Home",
      // REMOVED: history: "History",
      intro_sub: "Introduction", // New sub-heading for original Intro content
      history_sub: "History", // New sub-heading for original History content
      gallery: "Gallery",
      map: "Map of Ramaul",
      education_main: "Education in Nepal",
      after12_main: "Undergraduate Programs After 12th",
      science_stream: "Science Stream",
      commerce_stream: "Commerce Stream",
      management_stream: "Management Stream",
      arts_stream: "Arts & Humanities Stream",
      graduate_programs_main: "Graduate Programs (Postgraduate)",
      emerging_careers_main: "Emerging Careers & Their Use",
      universities_nepal: "Nepal Universities - Programs, Criteria & Addresses",
      admission_info_main: "Admission Information",
      nav_link_mbbs: "MBBS Admission",
      nav_link_engineering: "Engineering Admission",
      nav_link_graduate: "Graduate Admission",
      nav_link_residency: "Residency in USA",
      mbbs_admission_nepal_sub: "MBBS Admission Process in Nepal (2025–26)",
      engineering_admission_nepal_sub:
        "Engineering Admission Process in Nepal (Bachelor's Level)",
      graduate_admission_sub: "General Graduate Admission Steps",
      residency_admission_sub: "Residency Admission in the USA",
      faq_main: "Frequently Asked Questions (FAQs)",
    },
    // The content for original intro and history is now directly accessed from specific IDs within 'home'
    intro_content: [
      "Ramaul is a lively village in Siraha Municipality, located in the Madhesh Province of southeastern Nepal. Known for its cultural richness and community spirit, Ramaul is more of a town than a village, with easy access to goods from both the border and Siraha Bazaar.",
    ],
    home_content: [
      // Combined all home related content here for clarity
      "Geographically, Ramaul lies at 26.80°N 86.09°E and is surrounded by Makhanaha, Basbitta, Manpur, Madar, and the Kamala River. The population ranges between 20,000–25,000, predominantly Muslim, with a unique dialect called Mithila Urdu spoken locally.",
      "The village is divided into five areas: Purab Tola, Uttar Tola, Paschim Tola, Dakshin Tola, and Mansoori Tola. Ramaul Chowk is the central hub, home to the popular Ahmadiya Tea Shop and Eidgah grounds for community prayers.",
    ],
    history_content: [
      "Previously part of the Village Development Committee, Ramaul now falls under Siraha Municipality Wards 3, 4, and 5. It has a rich tradition of Islamic education with six madrasahs, ten mosques, and both government and private schools. The Kamala River flowing nearby adds to its scenic and strategic significance.",
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
      management: [],
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
    universities_nepal_list: [
      {
        "University Name": "Tribhuvan University (TU)",
        "Undergraduate Programs": "BSc CSIT, BCA, BBS, BBA, BE, MBBS, BEd, BA",
        "Postgraduate Programs": "MSc, MBA, MPA, MEd, MTech, MPH",
        "Doctorate Programs":
          "PhD in Botany, Gender Studies, Neurosurgery, Management",
        "Admission Criteria":
          "10+2 with ≥45–50%; entrance for technical/medical; Master's for PhD",
      },
      {
        "University Name": "Kathmandu University (KU)",
        "Undergraduate Programs": "BTech, BSc CS, BBA, MBBS, BPharm, BE",
        "Postgraduate Programs": "MSc, MBA, MPharm, MTech, MPH",
        "Doctorate Programs":
          "PhD in Management, Neurology, Urology, Cardiology",
        "Admission Criteria":
          "10+2 Science with ≥50%; KUCAT entrance; Master's for PhD",
      },
      {
        "University Name": "Pokhara University",
        "Undergraduate Programs": "BBA, BE, BCSIT, BHM, BSc Nursing",
        "Postgraduate Programs": "MBA, MSc, MPH, MEd",
        "Doctorate Programs": "PhD in Management, Engineering (limited)",
        "Admission Criteria":
          "10+2 with ≥45%; entrance exam and merit-based selection",
      },
      {
        "University Name": "Purbanchal University",
        "Undergraduate Programs": "BE, BBA, BSc Nursing, BPharm, BEd",
        "Postgraduate Programs": "MBA, MSc, MEd",
        "Doctorate Programs": "PhD in Education, Management",
        "Admission Criteria":
          "10+2 Science/Management; entrance for technical; Master's for PhD",
      },
      {
        "University Name": "Agriculture and Forestry University",
        "Undergraduate Programs": "BSc Agriculture, BSc Forestry, BVSc & AH",
        "Postgraduate Programs": "MSc Agriculture, MSc Forestry",
        "Doctorate Programs": "PhD in Forestry, Agriculture",
        "Admission Criteria":
          "10+2 Science (Biology); entrance exam; Master's for PhD",
      },
      {
        "University Name": "Far Western University",
        "Undergraduate Programs": "BSc, BBA, BEd, BA, BE",
        "Postgraduate Programs": "MSc, MBA, MA, MEd",
        "Doctorate Programs": "PhD in Humanities, Education",
        "Admission Criteria":
          "10+2 or equivalent; entrance for technical; Master's for PhD",
      },
      {
        "University Name": "Mid Western University",
        "Undergraduate Programs": "BSc, BBA, BEd, BA, BE",
        "Postgraduate Programs": "MSc, MBA, MA, MEd",
        "Doctorate Programs": "PhD in Social Sciences, Education",
        "Admission Criteria":
          "10+2 or equivalent; entrance for technical; Master's for PhD",
      },
      {
        "University Name": "Lumbini Buddhist University",
        "Undergraduate Programs": "BA in Buddhist Studies",
        "Postgraduate Programs": "MA in Buddhist Philosophy",
        "Doctorate Programs": "PhD in Buddhist Philosophy, Culture",
        "Admission Criteria":
          "10+2 for BA; Bachelor's for MA; Master's for PhD",
      },
      {
        "University Name": "Nepal Sanskrit University",
        "Undergraduate Programs": "BA Sanskrit, Acharya",
        "Postgraduate Programs": "MA Sanskrit",
        "Doctorate Programs": "PhD in Sanskrit Literature, Philosophy",
        "Admission Criteria":
          "10+2 or equivalent; Sanskrit background preferred",
      },
      {
        "University Name": "Rajarshi Janak University",
        "Undergraduate Programs": "BBA, BEd, BA",
        "Postgraduate Programs": "MBA, MA",
        "Doctorate Programs": "PhD in Education, Management",
        "Admission Criteria": "10+2 or equivalent; Master's for PhD",
      },
      {
        "University Name": "Madan Bhandari University of Science & Tech",
        "Undergraduate Programs": "BSc IT, BE Computer, BTech AI & Robotics",
        "Postgraduate Programs": "MSc AI, MSc Robotics",
        "Doctorate Programs": "PhD in Forest Biomaterials Science",
        "Admission Criteria": "10+2 Science; entrance exam; Master's for PhD",
      },
      {
        "University Name": "Madhesh Agricultural University",
        "Undergraduate Programs": "BSc Agriculture, BSc Horticulture",
        "Postgraduate Programs": "MSc Agriculture",
        "Doctorate Programs": "PhD in Agricultural Sciences",
        "Admission Criteria":
          "10+2 Science (Biology); entrance exam; Master's for PhD",
      },
      {
        "University Name": "Lumbini Technological University",
        "Undergraduate Programs": "BSc IT, BE Civil, BBA",
        "Postgraduate Programs": "MBA, MSc",
        "Doctorate Programs": "PhD in Technology, Management",
        "Admission Criteria":
          "10+2 Science/Management; entrance for technical; Master's for PhD",
      },
      {
        "University Name": "Manmohan Technical University",
        "Undergraduate Programs": "BE Civil, BSc Computer, BSc IT",
        "Postgraduate Programs": "MSc Engineering, MBA",
        "Doctorate Programs": "PhD in Engineering, IT",
        "Admission Criteria": "10+2 Science; entrance exam; Master's for PhD",
      },
      {
        "University Name": "Nepal Open University (NOU)",
        "Undergraduate Programs": "BEd, BBA, BA (Distance Mode)",
        "Postgraduate Programs": "MEd, MBA, MA (Distance Mode)",
        "Doctorate Programs": "PhD in Education, Management (Distance Mode)",
        "Admission Criteria":
          "Open/Distance format; 10+2 for UG; Bachelor's for PG;",
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
    engineering_admission_nepal_list: [
      {
        step: "1. Meet Eligibility Criteria",
        description:
          "Complete 10+2 Science (PCM) or equivalent with minimum 45–50% marks",
        notes: "Required subjects: Physics, Chemistry, Mathematics",
      },
      {
        step: "2. Choose University",
        description:
          "Options include Tribhuvan University (IOE), Kathmandu University (KU), Pokhara University, Purbanchal University",
        notes: "Each has its own entrance and intake system",
      },
      {
        step: "3. Register for Entrance Exam",
        description: "Apply for IOE Entrance (Tribhuvan) or KUCAT (Kathmandu)",
        notes: "Online registration via university portals",
      },
      {
        step: "4. Pay Application Fee",
        description:
          "Typically NPR 1,500–2,000 via bank or digital wallets (eSewa, Khalti, ConnectIPS)",
        notes: "Keep transaction ID or voucher for upload",
      },
      {
        step: "5. Upload Documents",
        description: "+2 transcript, photo, citizenship/passport, signature",
        notes: "Format and size requirements vary by university",
      },
      {
        step: "6. Take Entrance Exam",
        description:
          "Computer-based test covering Physics, Chemistry, Mathematics, English",
        notes: "Held at designated centers like Pulchowk Campus (IOE)",
      },
      {
        step: "7. Attend Counseling / Merit Allocation",
        description:
          "Based on entrance rank, choose preferred college and program",
        notes: "Includes Civil, Computer, Electrical, Mechanical, etc.",
      },
      {
        step: "8. Confirm Admission",
        description: "Submit documents and pay initial fees",
        notes: "Receive official admission letter",
      },
      {
        step: "9. Begin Academic Session",
        description: "Classes typically start in August–September",
        notes: "Duration: 4 years (8 semesters)",
      },
    ],
    general_graduate_admission_list: [
      {
        step: "1. Select Program & University",
        description:
          "Choose a Master's or PhD program that aligns with your Bachelor's degree and career goals.",
        notes: "Research university offerings and faculty.",
      },
      {
        step: "2. Meet Eligibility Criteria",
        description:
          "Typically requires a Bachelor's degree with a minimum GPA or percentage, and specific subject prerequisites.",
        notes: "Some programs may require work experience.",
      },
      {
        step: "3. Prepare for Entrance Exam",
        description:
          "Many universities have their own entrance exams for graduate admissions (e.g., KU, TU).",
        notes:
          "Prepare for subject-specific tests and possibly general aptitude.",
      },
      {
        step: "4. Gather Documents",
        description:
          "Transcripts, mark sheets, provisional certificates, character certificates, passport/citizenship, recent photos, and a strong personal statement/SOP.",
        notes: "Ensure all documents are attested where required.",
      },
      {
        step: "5. Submit Application",
        description:
          "Apply online through the university's portal or by submitting physical forms.",
        notes: "Pay application fees as per university guidelines.",
      },
      {
        step: "6. Attend Interview (if required)",
        description:
          "Some programs may conduct interviews to assess your suitability.",
        notes:
          "Prepare to discuss your academic background and research interests.",
      },
      {
        step: "7. Secure Admission",
        description:
          "Upon selection, complete the admission formalities and pay the first installment of fees.",
        notes: "Receive your official admission letter.",
      },
      {
        step: "8. Begin Classes",
        description:
          "Academic sessions usually commence in August/September for most graduate programs.",
        notes: "Orient yourself with university resources.",
      },
    ],
    faq: {
      mbbs: {
        q1: "Is NEET-UG mandatory for MBBS admission in Nepal for Indian students?",
        a1: "Yes, NEET-UG is mandatory for Indian students seeking MBBS admission in Nepalese medical colleges. Your NEET score is valid for 3 years.",
        q2: "What are the eligibility criteria for MBBS in Nepal?",
        a2: "You need to complete 10+2 with Physics, Chemistry, and Biology, with a minimum of 50% aggregate in PCB. You must also be at least 17 years old by December 31 of the admission year.",
      },
      engineering: {
        q1: "What are the eligibility requirements for Bachelor's level Engineering in Nepal?",
        a1: "You must have completed 10+2 Science (Physics, Chemistry, Mathematics) or an equivalent qualification with a minimum of 45-50% marks.",
        q2: "Which universities offer Engineering programs in Nepal?",
        a2: "Key options include Tribhuvan University (IOE), Kathmandu University (KU), Pokhara University, and Purbanchal University. Each has its own entrance and intake system.",
        q3: "What is MECEE-BL, and is it required for Engineering admissions?",
        a3: "MECEE-BL (Medical Education Common Entrance Examination - Bachelor Level) is primarily for medical education. For Engineering, you'll apply for entrance exams like IOE Entrance (Tribhuvan) or KUCAT (Kathmandu) through university portals.",
      },
    },
  },
  np: {
    headings: {
      // REMOVED: intro: "परिचय",
      home: "गृह",
      // REMOVED: history: "इतिहास",
      intro_sub: "परिचय", // New sub-heading for original Intro content
      history_sub: "इतिहास", // New sub-heading for original History content
      gallery: "ग्यालरी",
      map: "रमौल को नक्सा",
      education_main: "नेपालमा शिक्षा",
      after12_main: "१२ कक्षा पछि स्नातक कार्यक्रमहरू",
      science_stream: "विज्ञान संकाय",
      commerce_stream: "वाणिज्य संकाय",
      management_stream: "व्यवस्थापन संकाय",
      arts_stream: "कला र मानविकी संकाय",
      graduate_programs_main: "स्नातकोत्तर कार्यक्रमहरू",
      emerging_careers_main: "उभरदो करियर र तिनीहरूको प्रयोग",
      universities_nepal:
        "नेपालका विश्वविद्यालयहरू - कार्यक्रम, मापदण्ड र ठेगानाहरू",
      admission_info_main: "प्रवेश जानकारी",
      nav_link_mbbs: "MBBS भर्ना",
      nav_link_engineering: "इन्जिनियरिङ भर्ना",
      nav_link_graduate: "स्नातकोत्तर भर्ना",
      nav_link_residency: "युएसएमा रेसिडेन्सी",
      mbbs_admission_nepal_sub: "नेपालमा MBBS भर्ना प्रक्रिया (२०२५–२६)",
      engineering_admission_nepal_sub:
        "नेपालमा इन्जिनियरिङ भर्ना प्रक्रिया (ब्याचलर स्तर)",
      graduate_admission_sub: "स्नातकोत्तर भर्नाका सामान्य चरणहरू",
      residency_admission_sub:
        "संयुक्त राज्य अमेरिकामा रेसिडेन्सी प्रवेश पाउनका लागि चरणहरू",
      faq_main: "बारम्बार सोधिने प्रश्नहरू (FAQs)",
    },
    intro_content: [
      "रमौल दक्षिणपूर्वी नेपालको मधेश प्रदेशको सिराहा नगरपालिका अन्तर्गतको एक जीवन्त गाउँ हो। आफ्नो सांस्कृतिक समृद्धि र सामुदायिक भावनाका लागि परिचित रमौल गाउँभन्दा बढी सहरजस्तो छ, जहाँ सीमा र सिराहा बजार दुवैबाट सामानहरू सजिलै प्राप्त गर्न सकिन्छ।",
    ],
    home_content: [
      "भौगोलिक रूपमा, रमौल २६.८०°N ८६.०९°E मा अवस्थित छ र मखानहा, बासबिट्टा, मनपुर, मदार र कमला नदीले घेरिएको छ। यसको जनसंख्या २०,०००-२५,००० बीचमा छ, जसमा मुस्लिम समुदायको बाहुल्यता छ, र स्थानीय रूपमा मिथिला उर्दू नामक एक अद्वितीय बोली बोलिन्छ।",
      "गाउँ पाँच भागमा विभाजित छ: पूरब टोल, उत्तर टोल, पश्चिम टोल, दक्षिण टोल र मंसूरी टोल। रमौल चोक केन्द्रीय केन्द्र हो, जहाँ लोकप्रिय अहमदीया चिया पसल र सामुदायिक प्रार्थनाका लागि ईदगाह मैदानहरू छन्।",
    ],
    history_content: [
      "पहिले गाउँ विकास समिति अन्तर्गत पर्ने रमौल अहिले सिराहा नगरपालिका वार्ड ३, ४, र ५ मा पर्दछ। यसमा इस्लामिक शिक्षाको समृद्ध परम्परा छ, जसमा छवटा मदरसा, दश मस्जिद, र सरकारी तथा निजी विद्यालयहरू छन्। नजिकै बग्ने कमला नदीले यसको रमणीय र रणनीतिक महत्त्व बढाउँछ।",
    ],
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
          job_scope: "वेब डेभलपर, एप डेभेलपर, QA टेस्टर",
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
      management: [],
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
    universities_nepal_list: [
      {
        "University Name": "Tribhuvan University (TU)",
        "Undergraduate Programs": "BSc CSIT, BCA, BBS, BBA, BE, MBBS, BEd, BA",
        "Postgraduate Programs": "MSc, MBA, MPA, MEd, MTech, MPH",
        "Doctorate Programs":
          "PhD in Botany, Gender Studies, Neurosurgery, Management",
        "Admission Criteria":
          "10+2 with ≥45–50%; entrance for technical/medical; Master's for PhD",
      },
      {
        "University Name": "Kathmandu University (KU)",
        "Undergraduate Programs": "BTech, BSc CS, BBA, MBBS, BPharm, BE",
        "Postgraduate Programs": "MSc, MBA, MPharm, MTech, MPH",
        "Doctorate Programs":
          "PhD in Management, Neurology, Urology, Cardiology",
        "Admission Criteria":
          "10+2 Science with ≥50%; KUCAT entrance; Master's for PhD",
      },
      {
        "University Name": "Pokhara University",
        "Undergraduate Programs": "BBA, BE, BCSIT, BHM, BSc Nursing",
        "Postgraduate Programs": "MBA, MSc, MPH, MEd",
        "Doctorate Programs": "PhD in Management, Engineering (limited)",
        "Admission Criteria":
          "10+2 with ≥45%; entrance exam and merit-based selection",
      },
      {
        "University Name": "Purbanchal University",
        "Undergraduate Programs": "BE, BBA, BSc Nursing, BPharm, BEd",
        "Postgraduate Programs": "MBA, MSc, MEd",
        "Doctorate Programs": "PhD in Education, Management",
        "Admission Criteria":
          "10+2 Science/Management; entrance for technical; Master's for PhD",
      },
      {
        "University Name": "Agriculture and Forestry University",
        "Undergraduate Programs": "BSc Agriculture, BSc Forestry, BVSc & AH",
        "Postgraduate Programs": "MSc Agriculture, MSc Forestry",
        "Doctorate Programs": "PhD in Forestry, Agriculture",
        "Admission Criteria":
          "10+2 Science (Biology); entrance exam; Master's for PhD",
      },
      {
        "University Name": "Far Western University",
        "Undergraduate Programs": "BSc, BBA, BEd, BA, BE",
        "Postgraduate Programs": "MSc, MBA, MA, MEd",
        "Doctorate Programs": "PhD in Humanities, Education",
        "Admission Criteria":
          "10+2 or equivalent; entrance for technical; Master's for PhD",
      },
      {
        "University Name": "Mid Western University",
        "Undergraduate Programs": "BSc, BBA, BEd, BA, BE",
        "Postgraduate Programs": "MSc, MBA, MA, MEd",
        "Doctorate Programs": "PhD in Social Sciences, Education",
        "Admission Criteria":
          "10+2 or equivalent; entrance for technical; Master's for PhD",
      },
      {
        "University Name": "Lumbini Buddhist University",
        "Undergraduate Programs": "BA in Buddhist Studies",
        "Postgraduate Programs": "MA in Buddhist Philosophy",
        "Doctorate Programs": "PhD in Buddhist Philosophy, Culture",
        "Admission Criteria":
          "10+2 for BA; Bachelor's for MA; Master's for PhD",
      },
      {
        "University Name": "Nepal Sanskrit University",
        "Undergraduate Programs": "BA Sanskrit, Acharya",
        "Postgraduate Programs": "MA Sanskrit",
        "Doctorate Programs": "PhD in Sanskrit Literature, Philosophy",
        "Admission Criteria":
          "10+2 or equivalent; Sanskrit background preferred",
      },
      {
        "University Name": "Rajarshi Janak University",
        "Undergraduate Programs": "BBA, BEd, BA",
        "Postgraduate Programs": "MBA, MA",
        "Doctorate Programs": "PhD in Education, Management",
        "Admission Criteria": "10+2 or equivalent; Master's for PhD",
      },
      {
        "University Name": "Madan Bhandari University of Science & Tech",
        "Undergraduate Programs": "BSc IT, BE Computer, BTech AI & Robotics",
        "Postgraduate Programs": "MSc AI, MSc Robotics",
        "Doctorate Programs": "PhD in Forest Biomaterials Science",
        "Admission Criteria": "10+2 Science; entrance exam; Master's for PhD",
      },
      {
        "University Name": "Madhesh Agricultural University",
        "Undergraduate Programs": "BSc Agriculture, BSc Horticulture",
        "Postgraduate Programs": "MSc Agriculture",
        "Doctorate Programs": "PhD in Agricultural Sciences",
        "Admission Criteria":
          "10+2 Science (Biology); entrance exam; Master's for PhD",
      },
      {
        "University Name": "Lumbini Technological University",
        "Undergraduate Programs": "BSc IT, BE Civil, BBA",
        "Postgraduate Programs": "MBA, MSc",
        "Doctorate Programs": "PhD in Technology, Management",
        "Admission Criteria":
          "10+2 Science/Management; entrance for technical; Master's for PhD",
      },
      {
        "University Name": "Manmohan Technical University",
        "Undergraduate Programs": "BE Civil, BSc Computer, BSc IT",
        "Postgraduate Programs": "MSc Engineering, MBA",
        "Doctorate Programs": "PhD in Engineering, IT",
        "Admission Criteria": "10+2 Science; entrance exam; Master's for PhD",
      },
      {
        "University Name": "Nepal Open University (NOU)",
        "Undergraduate Programs": "BEd, BBA, BA (Distance Mode)",
        "Postgraduate Programs": "MEd, MBA, MA (Distance Mode)",
        "Doctorate Programs": "PhD in Education, Management (Distance Mode)",
        "Admission Criteria":
          "Open/Distance format; 10+2 for UG; Bachelor's for PG;",
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
    engineering_admission_nepal_list: [
      {
        step: "1. Meet Eligibility Criteria",
        description:
          "Complete 10+2 Science (PCM) or equivalent with minimum 45–50% marks",
        notes: "Required subjects: Physics, Chemistry, Mathematics",
      },
      {
        step: "2. Choose University",
        description:
          "Options include Tribhuvan University (IOE), Kathmandu University (KU), Pokhara University, Purbanchal University",
        notes: "Each has its own entrance and intake system",
      },
      {
        step: "3. Register for Entrance Exam",
        description: "Apply for IOE Entrance (Tribhuvan) or KUCAT (Kathmandu)",
        notes: "Online registration via university portals",
      },
      {
        step: "4. Pay Application Fee",
        description:
          "Typically NPR 1,500–2,000 via bank or digital wallets (eSewa, Khalti, ConnectIPS)",
        notes: "Keep transaction ID or voucher for upload",
      },
      {
        step: "5. Upload Documents",
        description: "+2 transcript, photo, citizenship/passport, signature",
        notes: "Format and size requirements vary by university",
      },
      {
        step: "6. Take Entrance Exam",
        description:
          "Computer-based test covering Physics, Chemistry, Mathematics, English",
        notes: "Held at designated centers like Pulchowk Campus (IOE)",
      },
      {
        step: "7. Attend Counseling / Merit Allocation",
        description:
          "Based on entrance rank, choose preferred college and program",
        notes: "Includes Civil, Computer, Electrical, Mechanical, etc.",
      },
      {
        step: "8. Confirm Admission",
        description: "Submit documents and pay initial fees",
        notes: "Receive official admission letter",
      },
      {
        step: "9. Begin Academic Session",
        description: "Classes typically start in August–September",
        notes: "Duration: 4 years (8 semesters)",
      },
    ],
    general_graduate_admission_list: [
      {
        step: "1. Select Program & University",
        description:
          "Choose a Master's or PhD program that aligns with your Bachelor's degree and career goals.",
        notes: "Research university offerings and faculty.",
      },
      {
        step: "2. Meet Eligibility Criteria",
        description:
          "Typically requires a Bachelor's degree with a minimum GPA or percentage, and specific subject prerequisites.",
        notes: "Some programs may require work experience.",
      },
      {
        step: "3. Prepare for Entrance Exam",
        description:
          "Many universities have their own entrance exams for graduate admissions (e.g., KU, TU).",
        notes:
          "Prepare for subject-specific tests and possibly general aptitude.",
      },
      {
        step: "4. Gather Documents",
        description:
          "Transcripts, mark sheets, provisional certificates, character certificates, passport/citizenship, recent photos, and a strong personal statement/SOP.",
        notes: "Ensure all documents are attested where required.",
      },
      {
        step: "5. Submit Application",
        description:
          "Apply online through the university's portal or by submitting physical forms.",
        notes: "Pay application fees as per university guidelines.",
      },
      {
        step: "6. Attend Interview (if required)",
        description:
          "Some programs may conduct interviews to assess your suitability.",
        notes:
          "Prepare to discuss your academic background and research interests.",
      },
      {
        step: "7. Secure Admission",
        description:
          "Upon selection, complete the admission formalities and pay the first installment of fees.",
        notes: "Receive your official admission letter.",
      },
      {
        step: "8. Begin Classes",
        description:
          "Academic sessions usually commence in August/September for most graduate programs.",
        notes: "Orient yourself with university resources.",
      },
    ],
    faq: {
      mbbs: {
        q1: "Is NEET-UG mandatory for MBBS admission in Nepal for Indian students?",
        a1: "Yes, NEET-UG is mandatory for Indian students seeking MBBS admission in Nepalese medical colleges. Your NEET score is valid for 3 years.",
        q2: "What are the eligibility criteria for MBBS in Nepal?",
        a2: "You need to complete 10+2 with Physics, Chemistry, and Biology, with a minimum of 50% aggregate in PCB. You must also be at least 17 years old by December 31 of the admission year.",
      },
      engineering: {
        q1: "What are the eligibility requirements for Bachelor's level Engineering in Nepal?",
        a1: "You must have completed 10+2 Science (Physics, Chemistry, Mathematics) or an equivalent qualification with a minimum of 45-50% marks.",
        q2: "Which universities offer Engineering programs in Nepal?",
        a2: "Key options include Tribhuvan University (IOE), Kathmandu University (KU), Pokhara University, and Purbanchal University. Each has its own entrance and intake system.",
        q3: "What is MECEE-BL, and is it required for Engineering admissions?",
        a3: "MECEE-BL (Medical Education Common Entrance Examination - Bachelor Level) is primarily for medical education. For Engineering, you'll apply for entrance exams like IOE Entrance (Tribhuvan) or KUCAT (Kathmandu) through university portals.",
      },
    },
  },
};

function setLanguage(lang) {
  // Update main navigation links
  const navLinkEducation = document.querySelector(
    'nav ul li a[href="#education"]'
  );
  if (navLinkEducation)
    navLinkEducation.textContent = translations[lang].headings.education_main;

  const admissionNavToggle = document.getElementById("admission-nav-toggle");
  if (admissionNavToggle) {
    // Preserve the arrow, update only the text content
    admissionNavToggle.childNodes[0].nodeValue =
      translations[lang].headings.admission_info_main + " ";
  }

  const navLinkMbbs = document.getElementById("nav-link-mbbs");
  if (navLinkMbbs)
    navLinkMbbs.textContent = translations[lang].headings.nav_link_mbbs;
  const navLinkEngineering = document.getElementById("nav-link-engineering");
  if (navLinkEngineering)
    navLinkEngineering.textContent =
      translations[lang].headings.nav_link_engineering;
  const navLinkGraduate = document.getElementById("nav-link-graduate");
  if (navLinkGraduate)
    navLinkGraduate.textContent = translations[lang].headings.nav_link_graduate;
  const navLinkResidency = document.getElementById("nav-link-residency");
  if (navLinkResidency)
    navLinkResidency.textContent =
      translations[lang].headings.nav_link_residency;

  // Update Home section content and sub-headings
  const homeHeading = document.getElementById("home-heading");
  if (homeHeading) homeHeading.textContent = translations[lang].headings.home;

  const introSubHeading = document.getElementById("intro-sub-heading");
  if (introSubHeading)
    introSubHeading.textContent = translations[lang].headings.intro_sub;
  const introParagraphText = document.getElementById("intro-paragraph-text");
  if (introParagraphText)
    introParagraphText.textContent = translations[lang].intro_content[0];

  const homeGeographicText = document.getElementById("home-geographic-text");
  if (homeGeographicText)
    homeGeographicText.textContent = translations[lang].home_content[0];
  const homeDivisionText = document.getElementById("home-division-text");
  if (homeDivisionText)
    homeDivisionText.textContent = translations[lang].home_content[1];

  const historySubHeading = document.getElementById("history-sub-heading");
  if (historySubHeading)
    historySubHeading.textContent = translations[lang].headings.history_sub;
  const historyParagraphText = document.getElementById(
    "history-paragraph-text"
  );
  if (historyParagraphText)
    historyParagraphText.textContent = translations[lang].history_content[0];

  const galleryHeading = document.getElementById("gallery-heading");
  if (galleryHeading)
    galleryHeading.textContent = translations[lang].headings.gallery;

  const mapHeading = document.getElementById("map-heading");
  if (mapHeading) mapHeading.textContent = translations[lang].headings.map;

  // Education Main Heading
  const educationMainHeading = document.getElementById(
    "education-main-heading"
  );
  if (educationMainHeading)
    educationMainHeading.textContent =
      translations[lang].headings.education_main;

  // Headings for After 12th section (now under Education)
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

  // Heading for Graduate Programs section (now under Education)
  const graduateProgramsMainHeading = document.getElementById(
    "graduate-programs-main-heading"
  );
  if (graduateProgramsMainHeading)
    graduateProgramsMainHeading.textContent =
      translations[lang].headings.graduate_programs_main;

  // Intro text for Graduate Programs (still relevant)
  const graduateProgramsIntroText = document.getElementById(
    "graduate-programs-intro-text"
  );
  if (graduateProgramsIntroText)
    graduateProgramsIntroText.textContent =
      translations[lang].graduate_programs_intro;

  // Heading for Emerging Careers section (now under Education)
  const emergingCareersMainHeading = document.getElementById(
    "emerging-careers-main-heading"
  );
  if (emergingCareersMainHeading)
    emergingCareersMainHeading.textContent =
      translations[lang].headings.emerging_careers_main;

  // Heading for Universities in Nepal section (now under Education)
  const universitiesNepalHeading = document.getElementById(
    "universities-nepal-heading"
  );
  if (universitiesNepalHeading) {
    universitiesNepalHeading.textContent =
      translations[lang].headings.universities_nepal;
  }

  // Admission Information Main Heading
  const admissionInfoMainHeading = document.getElementById(
    "admission-info-main-heading"
  );
  if (admissionInfoMainHeading)
    admissionInfoMainHeading.textContent =
      translations[lang].headings.admission_info_main;

  // Sub-headings within admission sections
  const mbbsAdmissionNepalSubHeading = document.getElementById(
    "mbbs-admission-nepal-sub-heading"
  );
  if (mbbsAdmissionNepalSubHeading)
    mbbsAdmissionNepalSubHeading.textContent =
      translations[lang].headings.mbbs_admission_nepal_sub;

  const engineeringAdmissionNepalSubHeading = document.getElementById(
    "engineering-admission-nepal-sub-heading"
  );
  if (engineeringAdmissionNepalSubHeading)
    engineeringAdmissionNepalSubHeading.textContent =
      translations[lang].headings.engineering_admission_nepal_sub;

  const graduateAdmissionSubHeading = document.getElementById(
    "graduate-admission-sub-heading"
  );
  if (graduateAdmissionSubHeading)
    graduateAdmissionSubHeading.textContent =
      translations[lang].headings.graduate_admission_sub;

  const residencyAdmissionSubHeading = document.getElementById(
    "residency-admission-sub-heading"
  );
  if (residencyAdmissionSubHeading)
    residencyAdmissionSubHeading.textContent =
      translations[lang].headings.residency_admission_sub;

  // Main FAQ Heading
  const faqMainHeading = document.getElementById("faq-main-heading");
  if (faqMainHeading) {
    faqMainHeading.textContent = translations[lang].headings.faq_main;
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

  // Populate Graduate Programs table
  populateProgramsTable(
    "graduate-table-container", // This is the one under Education section
    translations[lang].graduate_programs_list,
    lang
  );

  // Populate Emerging Careers table
  populateProgramsTable(
    "emerging-careers-table-container",
    translations[lang].emerging_careers_list,
    lang
  );

  // Populate Universities in Nepal table
  populateProgramsTable(
    "universities-nepal-table-container",
    translations[lang].universities_nepal_list,
    lang
  );

  // Populate tables within Admission sections
  populateProgramsTable(
    "mbbs-admission-nepal-table-container",
    translations[lang].mbbs_admission_nepal_list,
    lang
  );
  populateProgramsTable(
    "engineering-admission-nepal-table-container",
    translations[lang].engineering_admission_nepal_list,
    lang
  );
  populateProgramsTable(
    "graduate-admission-general-table-container", // Container for general graduate admission steps
    translations[lang].general_graduate_admission_list,
    lang
  );
  populateProgramsTable(
    "residency-table-container",
    translations[lang].residency_admission_list,
    lang
  );

  // Populate FAQ section
  const faqMbbsQ1Heading = document.getElementById("faq-mbbs-q1-heading");
  if (faqMbbsQ1Heading)
    faqMbbsQ1Heading.textContent = translations[lang].faq.mbbs.q1;
  const faqMbbsA1Text = document.getElementById("faq-mbbs-a1-text");
  if (faqMbbsA1Text) faqMbbsA1Text.textContent = translations[lang].faq.mbbs.a1;

  const faqMbbsQ2Heading = document.getElementById("faq-mbbs-q2-heading");
  if (faqMbbsQ2Heading)
    faqMbbsQ2Heading.textContent = translations[lang].faq.mbbs.q2;
  const faqMbbsA2Text = document.getElementById("faq-mbbs-a2-text");
  if (faqMbbsA2Text) faqMbbsA2Text.textContent = translations[lang].faq.mbbs.a2;

  const faqEngQ1Heading = document.getElementById("faq-eng-q1-heading");
  if (faqEngQ1Heading)
    faqEngQ1Heading.textContent = translations[lang].faq.engineering.q1;
  const faqEngA1Text = document.getElementById("faq-eng-a1-text");
  if (faqEngA1Text)
    faqEngA1Text.textContent = translations[lang].faq.engineering.a1;

  const faqEngQ2Heading = document.getElementById("faq-eng-q2-heading");
  if (faqEngQ2Heading)
    faqEngQ2Heading.textContent = translations[lang].faq.engineering.q2;
  const faqEngA2Text = document.getElementById("faq-eng-a2-text");
  if (faqEngA2Text)
    faqEngA2Text.textContent = translations[lang].faq.engineering.a2;

  const faqEngQ3Heading = document.getElementById("faq-eng-q3-heading");
  if (faqEngQ3Heading)
    faqEngQ3Heading.textContent = translations[lang].faq.engineering.q3;
  const faqEngA3Text = document.getElementById("faq-eng-a3-text");
  if (faqEngA3Text)
    faqEngA3Text.textContent = translations[lang].faq.engineering.a3;

  console.log("Language switched to:", lang);
}

// Function to populate generic tables
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
    "University Name": { en: "University Name", np: "विश्वविद्यालयको नाम" },
    "Undergraduate Programs": {
      en: "Undergraduate Programs",
      np: "स्नातक कार्यक्रमहरू",
    },
    "Postgraduate Programs": {
      en: "Postgraduate Programs",
      np: "स्नातकोत्तर कार्यक्रमहरू",
    },
    "Doctorate Programs": {
      en: "Doctorate Programs",
      np: "विद्यावारिधि कार्यक्रमहरू",
    },
    "Admission Criteria": { en: "Admission Criteria", np: "भर्ना मापदण्ड" },
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

// Keyboard shortcut: Ctrl + L toggles language
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === "l") {
    const homeHeading = document.getElementById("home-heading"); // Use home-heading as a reference
    if (homeHeading) {
      const currentHeading = homeHeading.textContent;
      const currentLang =
        currentHeading === translations.np.headings.home ? "np" : "en";
      const nextLang = currentLang === "en" ? "np" : "en";
      setLanguage(nextLang);
    } else {
      console.warn("home-heading not found for language toggle shortcut.");
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

  // ADMISSION INFORMATION DROPDOWN LOGIC
  const admissionNavToggle = document.getElementById("admission-nav-toggle");
  const admissionDropdown = document.getElementById("admission-dropdown");
  const dropdownArrow = admissionNavToggle
    ? admissionNavToggle.querySelector(".dropdown-arrow")
    : null;

  if (admissionNavToggle && admissionDropdown && dropdownArrow) {
    admissionNavToggle.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      admissionDropdown.classList.toggle("active");
      if (admissionDropdown.classList.contains("active")) {
        dropdownArrow.textContent = "▲"; // Change to up arrow
      } else {
        dropdownArrow.textContent = "▼"; // Change to down arrow
      }
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", (e) => {
      if (
        !admissionNavToggle.contains(e.target) &&
        !admissionDropdown.contains(e.target)
      ) {
        admissionDropdown.classList.remove("active");
        if (dropdownArrow) dropdownArrow.textContent = "▼";
      }
    });
  } else {
    console.warn("Admission navigation toggle elements not found.");
  }

  // Set up smooth scroll for ALL anchor links after DOM is ready
  setupSmoothScroll();
}); // End of DOMContentLoaded
