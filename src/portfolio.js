/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Manjunath's Portfolio",
  description:
    "FUll Stack Developer",
  og: {
    title: "Manjunath kalburgi Portfolio",
    type: "website",
    url: "http://manjunathkalburgi.netlify.com/",
  },
};

//Home Page
const greeting = {
  title: "Manjunath Kalburgi",
  logo_name: "Manjunath Kalburgi",
  nickname: "Manjunath",
  subTitle:
    "FUll Stack Developer",
  resumeLink:
    "",
  portfolio_repository: "https://github.com/kalburgimanjunath",
  githubProfile: "https://github.com/kalburgimanjunath/",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/kalburgimanjunath",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "manjunathkalburgi@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Telegram",
    link: "https://t.me/manjunathk",
    fontAwesomeIcon: "fa-telegram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Skype",
    link: "https://t.me/manjunathkalburgi",
    fontAwesomeIcon: "fa-skype", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "Blue", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
//     {
//       title: "Data Science & AI",
//       fileName: "DataScienceImg",
//       skills: [
//         "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
//         "⚡ Experience of working with Computer Vision and NLP projects",
//         "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
//       ],
//       softwareSkills: [
//         {
//           skillName: "Tensorflow",
//           fontAwesomeClassname: "logos-tensorflow",
//           style: {
//             backgroundColor: "transparent",
//           },
//         },
//         {
//           skillName: "Keras",
//           fontAwesomeClassname: "simple-icons:keras",
//           style: {
//             backgroundColor: "white",
//             color: "#D00000",
//           },
//         },
//         {
//           skillName: "PyTorch",
//           fontAwesomeClassname: "logos-pytorch",
//           style: {
//             backgroundColor: "transparent",
//           },
//         },
//         {
//           skillName: "Python",
//           fontAwesomeClassname: "ion-logo-python",
//           style: {
//             backgroundColor: "transparent",
//             color: "#3776AB",
//           },
//         },
//       ],
//     },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
//         {
//           skillName: "Flutter",
//           fontAwesomeClassname: "simple-icons:flutter",
//           style: {
//             color: "#02569B",
//           },
//         },
      ],
    },
//     {
//       title: "Cloud Infra-Architecture",
//       fileName: "CloudInfraImg",
//       skills: [
//         "⚡ Experience working on multiple cloud platforms",
//         "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
//         "⚡ Deploying deep learning models on cloud to use on mobile devices",
//         "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
//       ],
//       softwareSkills: [
//         {
//           skillName: "GCP",
//           fontAwesomeClassname: "simple-icons:googlecloud",
//           style: {
//             color: "#4285F4",
//           },
//         },
//         {
//           skillName: "AWS",
//           fontAwesomeClassname: "simple-icons:amazonaws",
//           style: {
//             color: "#FF9900",
//           },
//         },
//         {
//           skillName: "Azure",
//           fontAwesomeClassname: "simple-icons:microsoftazure",
//           style: {
//             color: "#0089D6",
//           },
//         },
//         {
//           skillName: "Firebase",
//           fontAwesomeClassname: "simple-icons:firebase",
//           style: {
//             color: "#FFCA28",
//           },
//         },
//         {
//           skillName: "PostgreSQL",
//           fontAwesomeClassname: "simple-icons:postgresql",
//           style: {
//             color: "#336791",
//           },
//         },
//         {
//           skillName: "MongoDB",
//           fontAwesomeClassname: "simple-icons:mongodb",
//           style: {
//             color: "#47A248",
//           },
//         },
//         {
//           skillName: "Docker",
//           fontAwesomeClassname: "simple-icons:docker",
//           style: {
//             color: "#1488C6",
//           },
//         },
//         {
//           skillName: "Kubernetes",
//           fontAwesomeClassname: "simple-icons:kubernetes",
//           style: {
//             color: "#326CE5",
//           },
//         },
//       ],
//     },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/albert_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@albert391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Smt. Kamala & Sri Venkappa M. Agadi College of Engineering & Technology",
      subtitle: "Bachelor's degree, Computer Science",
      logo_path: "iiitk_logo.png",
      alt_name: "Sri Venkappa M. Agadi Colleg",
      duration: "2007 - 2010",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Advanced DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in state.",
      ],
      website_link: "https://agadiengcollege.com/",
    },
    {
      title: "KLE College of Engineering & Technology",
      subtitle: "High School Diploma, Computer Science",
      logo_path: "iiitk_logo.png",
      alt_name: "Sri Venkappa M. Agadi Colleg",
      duration: "2003 - 2006",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in state.",
      ],
      website_link: "https://klecimpoly.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },    
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },    
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Experienced in Physical Security Domain and enterprise software development , Clinical Trials,FMCG at Oracle, Honeywell R&D Centre,3M India, Bangalore. Lead Frontend develpment for group of Honeywell ACS Software CoE,Oracle,3M India, with responsibility to drive software revenue growth and market differentiation by realizing cutting edge technologies into products and solutions. Video domain expertise as design for key software applications for video surveillance product lines in a true global engineering development environment. Leading design, development & mentoring focus for a multi-disciplinary team. Trained in highly disciplined software development process aligned to CMMi, Six Sigma & Honeywell Operating System (HOS) concepts.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Technical Architect",
          company: "Bcforward",
          company_url: "https://www.bcforward.com/",
          logo_path: "legato_logo.png",
          duration: "Oct 2022 - PRESENT",
          location: "Bangalore,India",
          description:
            "Lighting design system architecture and frontend development"+
            "Building highly customizable & fully functional Web Components"+
            "Creating Accessible UI Components"+
            "Member of Salesforce Design System team",
          color: "#0879bf",
        },
        {
          title: "Freelance Consultant",
          company: "Multiple Clients",
          company_url: "",
          logo_path: "",
          duration: "Aug 2021 - Oct 2022",
          location: "Hubli,India",
          description:
            "Front-end development using HTML5, CSS3,JavaScript Libraries,React16, ES6,React Native,Redux,React-Router,Serverless CMS,Airtable,Canva,figma etc."+
            "Provide Digital Transformation Strategies and recommendations."+
            "New components developed and provide Architectural recommendations."+
            "Requirement analysis,Development,refactoring,code standardization, Performance testing & optimisation.",
          color: "#9b1578",
        },
        {
          title: "Technical Architect",
          company: "Quess Corp Limited",
          company_url: "https://www.quesscorp.com/",
          logo_path: "",
          duration: "Dec 2020 - Aug 2021",
          location: "Bangalore, India",
          description:
            "Collaborate with Product Owner and User Experience team to define world class user experience."+
            "Requirement analysise,Development and code refactoring,code standardization",
          color: "#fc1f20",
        },
      ],
    },    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, Full-Stack, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
      link: "https://wordpress.org/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      " #189 Gokul Road Ravi nagar,Hubli",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/@43.2082365,-79.8651724,18.5z",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9986407307",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
