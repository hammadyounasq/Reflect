import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
  svg,
  svg1,
  svg2,
  svg3,
  svg4,
  svg5,
  svg6,
  svg7,
  pic1,
  pic2,
  svg9,
  svg10,
  svg11,
  svg12,
  appicon1,
  appicon2,
  appicon3,
  appicon4,
  i5,
  i4,
  i3,
  i2,
  i1,
} from "../assets";

export const navLinks = [
  {
    id: "product",
    title: "Product",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
  {
    id: "company",
    title: "Company",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "changelog",
    title: "Changelog",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];
export const feedbackclint = [
  {
    id: "feedback-1",
    content:
      "Really, really liking @reflectnotes so far. It's just the right amount of simple/fast for a personal note-taking app and does most of the hard work of organizing in the background.",
    name: "Sean Rose",
    title: "@seanrose",
    img: people01,
  },
  {
    id: "feedback-2",
    content: "Don’t take it from me: @reflectnotes is magic.",
    name: "Ryan Delk",
    title: "@delk",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Playing around with @reflectnotes. I’m backlogging key thoughts, details, and soundbites from episodes, books, meetings, articles, etc., from the past week. So far, it’s a knowledge worker’s dream come true.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
  {
    id: "feedback-4",
    content:
      "Really, really liking @reflectnotes so far. It's just the right amount of simple/fast for a personal note-taking app and does most of the hard work of organizing in the background.",
    name: "Sean Rose",
    title: "@seanrose",
    img: people01,
  },
  {
    id: "feedback-5",
    content: "Don’t take it from me: @reflectnotes is magic.",
    name: "Ryan Delk",
    title: "@delk",
    img: people02,
  },
  {
    id: "feedback-6",
    content:
      "Playing around with @reflectnotes. I’m backlogging key thoughts, details, and soundbites from episodes, books, meetings, articles, etc., from the past week. So far, it’s a knowledge worker’s dream come true.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
  {
    id: "feedback-7",
    content:
      "Really, really liking @reflectnotes so far. It's just the right amount of simple/fast for a personal note-taking app and does most of the hard work of organizing in the background.",
    name: "Sean Rose",
    title: "@seanrose",
    img: people01,
  },
  {
    id: "feedback-8",
    content: "Don’t take it from me: @reflectnotes is magic.",
    name: "Ryan Delk",
    title: "@delk",
    img: people02,
  },
  {
    id: "feedback-9",
    content:
      "Playing around with @reflectnotes. I’m backlogging key thoughts, details, and soundbites from episodes, books, meetings, articles, etc., from the past week. So far, it’s a knowledge worker’s dream come true.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
  {
    id: "feedback-10",
    content:
      "Really, really liking @reflectnotes so far. It's just the right amount of simple/fast for a personal note-taking app and does most of the hard work of organizing in the background.",
    name: "Sean Rose",
    title: "@seanrose",
    img: people01,
  },
  {
    id: "feedback-11",
    content: "Don’t take it from me: @reflectnotes is magic.",
    name: "Ryan Delk",
    title: "@delk",
    img: people02,
  },
  {
    id: "feedback-12",
    content:
      "Playing around with @reflectnotes. I’m backlogging key thoughts, details, and soundbites from episodes, books, meetings, articles, etc., from the past week. So far, it’s a knowledge worker’s dream come true.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
  {
    id: "feedback-13",
    content:
      "Playing around with @reflectnotes. I’m backlogging key thoughts, details, and soundbites from episodes, books, meetings, articles, etc., from the past week. So far, it’s a knowledge worker’s dream come true.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
  {
    id: "feedback-14",
    content:
      "Playing around with @reflectnotes. I’m backlogging key thoughts, details, and soundbites from episodes, books, meetings, articles, etc., from the past week. So far, it’s a knowledge worker’s dream come true.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

// Add `transformClass` dynamically
export const updatedFeedbackClient = feedbackclint.map((card, index) => ({
  ...card,
  transformClass: index < 3 ? "translate-x-4" : "-translate-x-4", // Add class conditionally
}));

export const feedback = [
  {
    id: "feedback-1",
    content: "Instantly sync your notes across devices",
    title: "Built for speed",
    img: svg,
  },
  {
    id: "feedback-2",
    content: "Form a graph of ideas with backlinked notes",
    title: "Networked notes",
    img: svg1,
  },
  {
    id: "feedback-3",
    content: "Capture ideas on the go, online or offline",
    title: "iOS app",
    img: svg2,
  },
  {
    id: "feedback-4",
    content: "Only you can access your notes",
    title: "End-to-end encryption",
    img: svg7,
  },
  {
    id: "feedback-5",
    content: "Keep track of meetings and agendas",
    title: "Calendar integration",
    img: svg3,
  },
  {
    id: "feedback-6",
    content: "Share anything you write with one click",
    title: "Publishing",
    img: svg4,
  },
  {
    id: "feedback-7",
    content: "Save snippets from your browser and Kindle",
    title: "Instant capture",
    img: svg5,
  },
  {
    id: "feedback-8",
    content: "Easily recall and index past notes and ideas",
    title: "Frictionless search",
    img: svg6,
  },
];
export const feedback2 = [
  {
    id: "feedback-1",
    content: "Instantly sync your notes across devices",
    title: "Built for speed",
    img: i1,
  },
  {
    id: "feedback-2",
    content: "Form a graph of ideas with backlinked notes",
    title: "Networked notes",
    img: i2,
  },
  {
    id: "feedback-3",
    content: "Capture ideas on the go, online or offline",
    title: "iOS app",
    img: i3,
  },
  {
    id: "feedback-4",
    content: "Only you can access your notes",
    title: "End-to-end encryption",
    img: i4,
  },
  {
    id: "feedback-5",
    content: "Keep track of meetings and agendas",
    title: "Calendar integration",
    img: i5,
  },
];

export const feedback3 = [
  {
    id: "feedback-1",
    content2: "Backlink your notes to",
    content: " make everything easily searchable.",
    title: "Your thoughts connected",
    img: pic1,
    img1: svg9,
  },
  {
    id: "feedback-2",
    content: "to-do’s easily, so you never miss a thing.",
    content2: "Record your ideas and",
    title: "Frictionless thought capture.",
    img: pic2,
    img1: svg10,
  },
];

export const feedback4 = [
  {
    id: "feedback-1",
    content:
      "We're everywhere, mobile or desktop, online or offline. Everything is synced in real-time.",
    title: "Integrated with your devices",
    img: svg11,
  },
  {
    id: "feedback-2",
    content:
      "End-to-end encryption keeps your notes secure. Our export and API keeps your notes accessible.",
    title: "Secure but open",
    img: svg12,
  },
];

export const feedback5 = [
  {
    id: "feedback-1",
    content: "Connect with Reflect with dozens of applications without code",
    title: "Zapier",
    img: appicon1,
  },
  {
    id: "feedback-2",
    content: "Sync your reading highlights and notes with Reflect.",
    title: "Readwise",
    img: appicon2,
  },
  {
    id: "feedback-3",
    content: "Integrate your contacts and calendars",
    title: "Google and Outlook",
    img: appicon3,
  },
  {
    id: "feedback-4",
    content: "Save web clips and sync with your Kindle",
    title: "Chrome and Safari",
    img: appicon4,
  },
];

export const priceList = [
  {
    id: "price-1",
    content: "Networked note-taking",
  },
  {
    id: "price-2",
    content: "End to end encryption",
  },
  {
    id: "price-3",
    content: "Chrome and Safari web clipper",
  },
  {
    id: "price-4",
    content: "Kindle highlights sync",
  },
  {
    id: "price-5",
    content: "Kindle offline sync",
  },
  {
    id: "price-6",
    content: "iOS app",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Product",
    links: [
      {
        name: "Features",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "Integrations",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Pricing",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Changelog",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Roadmap",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "Our team",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Our values",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/suggestions/",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Downloads",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Documentation",
        link: "https://www.hoobank.com/become-a-partner/",
      },
      {
        name: "Contact",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
