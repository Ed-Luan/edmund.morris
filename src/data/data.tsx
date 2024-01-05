import {
  AcademicCapIcon,
//   CalendarIcon,
  DownloadIcon,
//   FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';
import GoogleScholarIcon from '../components/Icon/GoogleScholarIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/edmund_profile_photo.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PublicationItems,
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
  Research: 'research',
  Resume: 'resume',
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
    {label: 'Interests', text: 'Reading, Jogging, Hiking, Cooking, DIY', Icon: SparklesIcon},
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

export const supervision: TimelineItem[] = [
  {
    date: 'October 2023 - Now',
    location: 'PhD Project',
    title: 'Assistant Supervisor',
    content: <p>Steven.</p>
    },
];

export const projects: TimelineItem[] = [
  {
    date: 'Summer 2017',
    location: 'XJTLU, Suzhou, China',
    title: 'Research Project on Synthesis and Analysis on Titanium Nanotubes',
    content: <p>Worked in Dr Graham Dawson’s research group, synthesising titanium nanotubes and using them as a framework for catalysts and Raman spectroscopy sensitizers.  </p>
    },
];





export const otherActivities: TimelineItem[] = [
  {
    date: 'April 2023',
    location: 'Conference',
    title: 'Chemistry',
    content: <p></p>
    },
 ];


export const publications: PublicationItems[] = [
{
    title: 'Structure and properties of nitrocellulose: approaching 200 years of research',
    author: <p>Edmund Morris, Colin R Pulham, Carole A Morrison </p>,
    publisher: 'RSC advances 13 (46), 32321-32333'
    },
  {
    title: 'SERS of Trititanate Nanotubes: Selective Enhancement of Catechol Compounds',
    author: <p>Ruochen Liu, Edmund Morris, Xiaorong Cheng, Eric Amigues, Kim Lau, Baekman Kim, Yuanhang Liu, Zhipeng Ke, Sharon E Ashbrook, Michael Bühl, Graham Dawson </p>,
    publisher: 'ChemistrySelect 3 (28), 8338-8343'
    },
 ];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'My working time is 9 am - 5pm, Monday - Friday.',
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
