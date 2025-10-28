import { About, Blog, Clubs, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jamie",
  lastName: "Kohchet-Chua",
  name: `Jamie Kohchet-Chua`,
  role: "Passionate about Business Development and Brand Management",
  avatar: "/images/avatar.jpg",
  email: "jamiekc888@gmail.com",
  location: "Asia/Singapore", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Filipino"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Weekly insights on business development and strategic marketing</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "TikTok",
    icon: "tiktok",
    link: "https://www.tiktok.com/@kyungsooey",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/jamie-kohchet-chua/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi there! I'm Jamie.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Final Year Student @ Singapore Management University</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Marketing and Strategic Management Major
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
   Nice to meet you! I'm a final year student at SMU, with experience in multiple industries such as FMCG, Sustainability, and Tech. 
   Welcome to my portfolio, where I showcase my professional journey, skills, and the impactful projects I've had the privilege to work on.
   <br />
   <br />
   Take a look around to learn more about my experiences and achievements!
    </>
  ),
};

const work: About = {
  path: "/work",
  label: "Work",
  title: `Work – ${person.name}`,
  description: `Professional experience and background of ${person.name}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Jamie is a dynamic and results-driven individual with a strong passion for business development, and internal strategy. 
        With internship experiences at Keppel, Unilever, Shopee, and NIUM, she has demonstrated an exceptional ability to combine analytical 
        thinking with creative execution, from leading regional market research to driving digital campaigns. She thrives in a fast-paced 
        environment.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Keppel Data Centres",
        timeframe: "May 2025 – Aug 2025",
        role: "Business Development Intern",
        achievements: [
          <>
            Led market research efforts on competitors to expand Keppel's data centre capacity for Southeast Asia countries through PowerBI and PowerPoint.
          </>,
          <>
            Collaborated with 2 individuals on the divestment of a legacy asset in the Philippines, resulting in the divestment of 20% stake and gain of SGD70k.
          </>,
          <>
            Led in-depth research on renewable energy in Singapore including RECs and Carbon Credits, translating emerging trends and certifications into actionable insights for data centre development.
          </>,
          <>
            Spearheaded automation efforts through Excel to boost market analysis efficiency in Southeast Asia, displaying critical thinking and attention to detail.
          </>,
        ],
        images: [
          {
            src: "/images/internships/keppel.jpeg",
            alt: "Keppel Data Centres Internship",
            width: 16,
            height: 9,
          },
          {
            src: "/images/internships/keppel2.jpeg",
            alt: "Keppel Team Experience",
            width: 16,
            height: 9,
          },
          {
            src: "/images/internships/keppel3.jpeg",
            alt: "Keppel Office Environment",
            width: 16,
            height: 9,
          },
          {
            src: "/images/internships/keppel4.jpeg",
            alt: "Keppel Business Development Work",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Unilever International",
        timeframe: "Aug 2024 – Dec 2024",
        role: "Customer Development Intern",
        achievements: [
          <>
            Led projects in 'white space' geographies by leveraging third-party collaborations, driving e-commerce initiatives, and orchestrating events and partnerships in Singapore.
          </>,
          <>
            Spearheaded efforts to bring 10+ local brands in countries such as Seychelles, India, Malaysia, Singapore, and the Philippines to Singapore by collaborating with different Unilever business units.
          </>,
          <>
            Led efforts to bring ice cream and personal care products from Indian exports to Seychelles for the first time through collaborations with consolidators and suppliers, resulting in a business impact of around $10,000 in the first order.
          </>,
          <>
            Organised events and partnerships amongst 3 external companies leading to increased product livestreams, physical events, and timely order placements.
          </>,
        ],
        images: [
          {
            src: "/images/internships/unilever.png",
            alt: "Unilever International Internship",
            width: 16,
            height: 9,
          },
          {
            src: "/images/internships/unilever2.png",
            alt: "Unilever Customer Development",
            width: 16,
            height: 9,
          },
          {
            src: "/images/internships/unilever3.png",
            alt: "Unilever Project Work",
            width: 16,
            height: 9,
          },
          {
            src: "/images/internships/unilever4.png",
            alt: "Unilever Team Collaboration",
            width: 16,
            height: 9,
          },
          {
            src: "/images/internships/unilever5.png",
            alt: "Unilever Business Impact",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Shopee",
        timeframe: "May 2024 – Aug 2024",
        role: "Account Management Intern – Fashion, Business Development",
        achievements: [
          <>
            Utilised data analysis and statistical techniques using Microsoft Excel to drive business strategy, competitor analysis, and identify high-potential sellers resulting in an increase in Fashion sales for H1.
          </>,
          <>
            Managed key seller relationships through communication leading to personal tailored support, positive rapport, and an increase in performance ratings.
          </>,
          <>
            Orchestrated project and fashion campaign execution, such as double-digit sales, ensuring timely completion and comprehensive reporting while collaborating with key account managers.
          </>,
          <>
            Collaborated with the marketing team to boost influencer campaigns and KOL livestreams for 10 brands – boosting overall GMV, voucher redemptions and click-thru rate.
          </>,
        ],
        images: [
          {
            src: "/images/internships/shopee.jpeg",
            alt: "Shopee Account Management Internship",
            width: 16,
            height: 9,
          },
          {
            src: "/images/internships/shopee2.jpeg",
            alt: "Shopee Business Development Work",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "NIUM (Instarem)",
        timeframe: "May 2023 – Aug 2023",
        role: "Content Marketing Intern",
        achievements: [
          <>
            Generated a comprehensive portfolio of 25+ articles through extensive research utilising tools such as Semrush, online interviews, surveys, and relevant forums, resulting in increased brand awareness within Southeast Asia.
          </>,
          <>
            Oversaw competitors' social media activities, recommended content topics, and actively supported social media activities, leading to improved engagement and brand visibility.
          </>,
          <>
            Researched and created marketing related campaigns using Search Engine Optimization (SEO), targeting the working class and travellers in APAC.
          </>,
          <>
            Developed and showcased skills such as initiative, leadership, data analysis, collaboration, adaptability, and strategic thinking.
          </>,
        ],
        images: [
          {
            src: "/images/internships/nium.jpeg",
            alt: "NIUM Instarem Content Marketing Internship",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Singapore Management University",
        description: <>Bachelor of Business Management, Major in Marketing and Strategic Management. ASEAN Undergraduate Scholarship recipient for outstanding academic merit.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Business Development & Strategy",
        description: (
          <>Market research, competitive analysis, strategic partnerships, and cross-functional collaboration across Southeast Asian markets.</>
        ),
        tags: [
          {
            name: "PowerBI",
            icon: "chart",
          },
          {
            name: "Excel",
            icon: "excel",
          },
        ],
        images: [],
      },
      {
        title: "Digital Marketing & Content Creation",
        description: (
          <>SEO, content creation, social media management, influencer campaigns, and data-driven marketing strategies.</>
        ),
        tags: [
          {
            name: "Adobe Creative Suite",
            icon: "design",
          },
          {
            name: "Canva",
            icon: "design",
          },
          {
            name: "SEO",
            icon: "search",
          },
        ],
        images: [],
      },
      {
        title: "Data Analysis & Tools",
        description: (
          <>Proficient in data analysis using Excel, PowerBI, Tableau, SPSS, and basic R for business insights and decision-making.</>
        ),
        tags: [
          {
            name: "Tableau",
            icon: "chart",
          },
          {
            name: "SPSS",
            icon: "analytics",
          },
          {
            name: "R",
            icon: "code",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const projects: Work = {
  path: "/projects",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Case competitions and consulting projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/projects/projects
  // All projects will be listed on the /home and /projects routes
};

const projectsContent: About = {
  path: "/projects",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Case competitions and consulting projects by ${person.name}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Projects & Achievements",
    description: (
      <>
        A showcase of case competitions, consulting projects, and strategic initiatives that demonstrate analytical thinking, problem-solving skills, and business acumen.
      </>
    ),
  },
  work: {
    display: false,
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: false,
    title: "Education",
    institutions: [],
  },
  technical: {
    display: false,
    title: "Technical Skills",
    skills: [],
  },
  competitions: {
    display: true,
    title: "Case Competitions & Achievements",
    achievements: [
      {
        name: "L'Oréal Brandstorm 2025",
        achievement: "Top 8 out of 600",
        timeframe: "2025",
        description: <>Created 'SkipCare', an innovative solution combining sunscreen, toner, and serums for men's busy schedules – reaching the Singapore finals. Conducted research, surveys, and prototypes using L'Oréal's brands and resources to formulate a new product and go-to-market strategy.</>,
        images: [
          {
            src: "/images/case-competitions/loreal1.jpg",
            alt: "L'Oréal Brandstorm Competition",
            width: 16,
            height: 9,
          },
          {
            src: "/images/case-competitions/loreal2.jpg",
            alt: "L'Oréal Brandstorm Presentation",
            width: 16,
            height: 9,
          },
          {
            src: "/images/case-competitions/loreal3.jpg",
            alt: "L'Oréal Brandstorm Team Achievement",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        name: "ADA – Meta Business Messaging Hackathon",
        achievement: "Top 10 out of 400",
        timeframe: "2023",
        description: <>Collaborated with a 4-member team to develop LingoBot, a WhatsApp chatbot dedicated to language development using OpenAI, Google Cloud, Canva, etc., achieving top 10 out of 400 participants across Southeast Asia.</>,
        images: [],
      },
      {
        name: "APECS Case Competition",
        achievement: "Participant",
        timeframe: "2024",
        description: <>Participated in APECS case competition, developing strategic solutions for real-world business challenges in the Asia-Pacific region.</>,
        images: [],
      },
      {
        name: "PwC Case Competition",
        achievement: "Participant",
        timeframe: "2024",
        description: <>Engaged in PwC's prestigious case competition, analyzing complex business scenarios and presenting strategic recommendations to industry professionals.</>,
        images: [],
      },
    ],
  },
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Leadership & Activities – ${person.name}`,
  description: `A collection of photos from Jamie's leadership roles and extracurricular activities`,
  images: [
    {
      src: "/images/ccas/aiesec.jpeg",
      alt: "AIESEC Leadership Role",
      orientation: "horizontal",
    },
    {
      src: "/images/ccas/aiesec2.jpeg",
      alt: "AIESEC Vice President Activities",
      orientation: "vertical",
    },
    {
      src: "/images/ccas/aiesec3.jpeg",
      alt: "AIESEC Team Management",
      orientation: "horizontal",
    },
    {
      src: "/images/ccas/aiesec4.jpg",
      alt: "AIESEC Networking Event",
      orientation: "vertical",
    },
    {
      src: "/images/ccas/aiesec5.JPG",
      alt: "AIESEC She-Inspires Event",
      orientation: "vertical",
    },
    {
      src: "/images/ccas/aiesec6.jpeg",
      alt: "AIESEC Youth Speak Forum",
      orientation: "horizontal",
    },
    {
      src: "/images/ccas/icon.jpeg",
      alt: "SMU ICON Diverse City Event",
      orientation: "horizontal",
    },
    {
      src: "/images/ccas/tmc.JPG",
      alt: "Leadership Activities",
      orientation: "vertical",
    },
    {
      src: "/images/case-competitions/loreal1.jpg",
      alt: "L'Oréal Brandstorm Competition",
      orientation: "horizontal",
    },
    {
      src: "/images/case-competitions/loreal2.jpg",
      alt: "L'Oréal Brandstorm Presentation",
      orientation: "vertical",
    },
    {
      src: "/images/case-competitions/loreal3.jpg",
      alt: "L'Oréal Brandstorm Team Achievement",
      orientation: "horizontal",
    },
  ],
};

const clubs: Clubs = {
  path: "/clubs",
  label: "Clubs",
  title: `Clubs & Activities – ${person.name}`,
  description: `Co-curricular activities and leadership roles by ${person.name}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Leadership & Community Involvement",
    description: (
      <>
        Active participation in various student organizations and community initiatives, demonstrating leadership, teamwork, and commitment to creating positive impact within the university and broader community.
      </>
    ),
  },
  activities: {
    display: true,
    title: "Co-curricular Activities",
    experiences: [
      {
        organization: "AIESEC in SMU",
        timeframe: "Jan 2023 – Jan 2025",
        role: "Vice President for Talent Management, President for She-Inspires Networking Event, Brand & Marketing Vice President for Youth Speak Forum",
        achievements: [
          <>
            Directed and managed multiple departments, including logistics, partnerships, and event planning, while also spearheading the creative direction for various events, demonstrating leadership skills, conflict management, and critical thinking.
          </>,
          <>
            Initiated weekly department meetings to plan and execute engaging team bonding activities, consistently earning 5/5 ratings from participants.
          </>,
          <>
            Coordinated with at least 20 members across different departments to arrange weekly organisational meetings, competitions, and networking events ensuring their seamless execution – resulting in an increase in engagement and reach within the university.
          </>,
        ],
        images: [
          {
            src: "/images/ccas/aiesec.jpeg",
            alt: "AIESEC Leadership Role",
            width: 16,
            height: 9,
          },
          {
            src: "/images/ccas/aiesec2.jpeg",
            alt: "AIESEC Vice President Activities",
            width: 16,
            height: 9,
          },
          {
            src: "/images/ccas/aiesec3.jpeg",
            alt: "AIESEC Team Management",
            width: 16,
            height: 9,
          },
          {
            src: "/images/ccas/aiesec4.jpg",
            alt: "AIESEC Networking Event",
            width: 16,
            height: 9,
          },
          {
            src: "/images/ccas/aiesec5.JPG",
            alt: "AIESEC She-Inspires Event",
            width: 16,
            height: 9,
          },
          {
            src: "/images/ccas/aiesec6.jpeg",
            alt: "AIESEC Youth Speak Forum",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        organization: "SMU International Connections (ICON)",
        timeframe: "Feb 2023 – Sep 2023",
        role: "Lead Marketing Director",
        achievements: [
          <>
            Achieved an increase in accounts reached and boosted event turnout by 40%, showcasing teamwork, communication skills, and interpersonal skills.
          </>,
          <>
            Created physical booths, information panels, and coordinated with outside vendors to showcase cultural diversity amongst 2000 individuals.
          </>,
        ],
        images: [
          {
            src: "/images/ccas/icon.jpeg",
            alt: "SMU ICON Diverse City Event",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        organization: "SMU BizCom",
        timeframe: "Jan 2024 – Jan 2025",
        role: "Business Development Executive",
        achievements: [
          <>
            Coordinated with 10+ external partners in the fashion and beauty industry to provide deals and promotions to the entire University student population resulting in over 900 impressions on social media and an increase in revenue.
          </>,
          <>
            Collaborated with 10+ companies and internal departments such as marketing and operations in organising two Welfare drives providing products and discounts to 4,000 SMU Students, resulting in a 95% satisfaction rate.
          </>,
        ],
        images: [
          {
            src: "/images/ccas/bizcom.png",
            alt: "SMU BizCom Business Development",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

export { person, social, newsletter, home, work, blog, projects, projectsContent, clubs, gallery };
