import {
  AcademicCapIcon,
//   CalendarIcon,
  DownloadIcon,
//   FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';
//
// import { Icon } from '@iconify/react';
import GoogleScholarIcon from '../components/Icon/GoogleScholarIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/edmund_profile_photo.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Research: 'Research',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Edmund Morris.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a UK based PhD student, who is going to start a PostDoctoral project soon.
      </p>
{/*       <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg"> */}
{/*         In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>, */}
{/*         plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '} */}
{/*         <strong className="text-stone-100">Vancouver Island</strong>. */}
{/*       </p> */}
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1XT_jICRMDxEiEECU2dQ37Bu_nZqTocxy/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a A current PhD candidate at the University of Edinburgh working towards determining the crystal structure of nitrocellulose, a material with many modern uses despite being discovered almost 200 years ago. This has helped me develop connections with industry, UK rocket propellant manufacturers, and collaborations
 with other academic groups in biochemistry etc. Upon graduation, I hope to continue working on macromolecules especially naturally derived materials or biomacromolecules. I believe my experience with fibre and small-angle X-ray diffraction as well as my strong chemistry background puts me well placed to further develop rigorous models of poorly understood materials.`,
  aboutItems: [
    {label: 'Location', text: 'Edinburgh, UK', Icon: MapIcon},
    {label: 'Interests', text: 'Reading, Jogging, Hiking, Knitting, DIY', Icon: SparklesIcon},
    {label: 'Employment', text: 'University of Edinburgh', Icon: OfficeBuildingIcon},
    {label: 'Study', text: 'University of Edinburgh', Icon: AcademicCapIcon},
  ],
};


export const education: TimelineItem[] = [
  {
    date: 'November 2020 - Now',
    location: 'The University of Edinburgh',
    title: 'PhD in Chemistry',
    content: <p>
 </p>
    },
   {
    date: 'September 2019 - July 2020',
    location: 'The University of Edinburgh',
    title: 'Masters in Chemistry',
    content: <p>  </p>
   },
  {
    date: 'September 2015 - July 2019',
    location: 'University of Liverpool',
    title: 'Undergraduate of Chemistry',
    content: <p>    Achieved a first overall during first year examinations.
   Acted as course rep. for all first year chemistry students and lead an enhancement project for the Department of Chemistry.
   Choose optional modules on: Innovative Chemistry for Energy and Materials, Group Theory, Polymer Chemistry and Newtonian Dynamics.
.</p>
   },
];

export const experience: TimelineItem[] = [
  {
    date: 'Summer 2017',
    location: 'XJTLU University',
    title: 'Research Project on Synthesis and Analysis on Titanium Nanotubes',
    content: (
      <p>
        Worked in Dr Graham Dawson’s research group, XJTLU, Suzhou, China, synthesising titanium nanotubes and using them as a framework for catalysts and Raman spectroscopy sensitizers.
      </p>
    ),
  },
  {
    date: 'Summer 2017',
    location: 'Data Associates Limited, Liverpool',
    title: 'Internship',
    content: (
      <p>
       Responsible for:1) documenting data models; 2) applying data standards; 3)producing stakeholder presentation materials using ERStudio Business Architect and MS PowerPoint.
      </p>
    ),
  },
];


export const publications: TimelineItem[] = [
{
    date: 'RSC advances 13 (46), 32321-32333',
    location: 'Edmund Morris, Colin R Pulham, Carole A Morrison',
    title: 'Structure and properties of nitrocellulose: approaching 200 years of research',
    content: <p></p>
    },
  {
    date: 'ChemistrySelect 3 (28), 8338-8343',
    location: 'Ruochen Liu, Edmund Morris, Xiaorong Cheng, Eric Amigues, Kim Lau, Baekman Kim, Yuanhang Liu, Zhipeng Ke, Sharon E Ashbrook, Michael Bühl, Graham Dawson',
    title: 'SERS of Trititanate Nanotubes: Selective Enhancement of Catechol Compounds',
    content: <p></p>
    },
 ];

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Mandarin',
        level: 7,
      },
    ],
  },
  {
    name: 'Teamwork',
    skills: [
      {
        name: 'React',
        level: 9,
      },
    ],
  },
  {
    name: 'Leadership',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
    ],
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: '',
      text: '',
      image: '',
    },
  ],
};


export const projects: TimelineItem[] = [
  {
    date: 'June 2016 - June 2020',
    location: 'Superviser: Alan Bundy (Premary); Ewen Maclean; Alan Smaill; Eugene Philalithis',
    title: 'Automating theory repair',
    content: <p>A domain-independent algorithm was developed for repairing faulty Datalog-like theories
by combining three existing techniques: abduction, belief revision and conceptual
change (ABC). Based on devised mathematical models, the ABC system repairs faulty
theories with better results than the individual techniques it combines because of its
various operations: 1) add/delete axioms; 2) add/delete preconditions from rules; 3)
change the language of the theory. Furthermore, ABC has wide applications, e.g.
modelling game theory by abductively explaining given observations; root-cause
analysis in system maintenance, and it has the potential to be extended to data in other
formats.</p>
    },
  {
    date: 'Feb 2021 - Feb 2022 (Part-time)',
    location: 'Superviser: Alan Bundy (Premary); Jeff Pan',
    title: 'TREAT',
    content: <p>TREAT project.
 </p>
    },
   {
    date: 'October 2023 - April 2024',
    location: 'Superviser: Alan Bundy (Premary)',
    title: 'Automated theory repair in legislation revision',
    content: <p> in autonomous vehicle. </p>
   },
  {
    date: 'April 2023 - Dec 2024',
    location: 'Superviser: Björn Ross (Premary), Vashak Belle',
    title: 'Misinformation Detection via LLM',
    content: <p> Misinformation detection in counterfactual conditional claims.</p>
   },
];



export const supervision: TimelineItem[] = [
  {
    date: 'Dec 2023 - Now',
    location: 'PhD Project',
    title: 'Assistant Supervisor',
    content: <p>Steven.</p>
    },
  {
    date: 'Sep 2022 - Aug 2023',
    location: 'MSc Project',
    title: 'Supervisor',
    content: <p>Siyu's project.</p>
    },
];

export const OtherActivities: TimelineItem[] = [
  {
    date: 'April 2023',
    location: 'Conference',
    title: 'Chemistry',
    content: <p>.</p>
    },
 ];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'edmund.morris@ed.ac.uk',
      href: 'edmund.morris@ed.ac.uk',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Edmund Morris',
      href: 'https://www.linkedin.com/in/edmundamorris/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'GoogleScholar', Icon: GoogleScholarIcon, href: 'https://scholar.google.com/citations?user=3fL8s8IAAAAJ&hl=en'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Ed-Luan/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/edmundamorris/'},
];
