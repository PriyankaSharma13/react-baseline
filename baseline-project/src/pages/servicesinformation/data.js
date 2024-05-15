import vector from "../../assets/servicesInfo/Vector-2.png";
import styles from "./webdesigning/web.module.css";
import { faRebel, faCodepen, faEmpire } from '@fortawesome/free-solid-svg-icons';
const review = [
    {
        icon : vector,
        text: "Professional Team"
    },
    {
        icon : vector,
        text: "Good 5 Star Reviews"
    },
    {
        icon : vector,
        text: "Awesome Design"
    },
    {
        icon : vector,
        text: "Completed Projects"
    }
];

const cardItem = [
    {
      title: "Website Design:",
      description: "Our Professional web designing services include creating custom designs that are tailored to meet the specific needs and goals of your business. We work with you to create a website that accurately reflects your brand and meets your requirements.",
    //   iconClass: faRebel,
      gradientClass: styles.gr1
    },
    {
      title: "Responsive Design:",
      description: "With more and more people accessing the internet on their mobile devices, it’s important that your website is optimized for these devices. Our responsive design services ensure that your website looks great.",
    //   iconClass: faCodepen,
      gradientClass: styles.gr2
    },
    {
      title: "E-commerce Solutions:",
      description: "We offer custom e-commerce solutions that are tailored to meet the specific needs of your business. Whether you need a simple online store or a complex e-commerce platform, our team has the expertise to deliver the right solution for you.",
    //   iconClass: faEmpire,
      gradientClass: styles.gr3
    },
    {
      title: "Maintenance and Support:",
      description: "Your website is up and running, it’s important to keep it up to date and running smoothly. Our website maintenance and support services ensure that your website stays up to date and functioning properly.",
    //   iconClass: "fab fa-empire",
      gradientClass: styles.gr4
    },
     {
      title: "Creative Design:",
      description: "With more and more people accessing the internet on their mobile devices, it’s important that your website is optimized for these devices. Our responsive design services ensure that your website looks great.",
    //   iconClass: faCodepen,
      gradientClass: styles.gr2
    },
    {
        title: "E-commerce Solutions:",
        description: "We offer custom e-commerce solutions that are tailored to meet the specific needs of your business. Whether you need a simple online store or a complex e-commerce platform, our team has the expertise to deliver the right solution for you.",
      //   iconClass: faEmpire,
        gradientClass: styles.gr3
      },
];


// ---------------our Services Card items------------------
const ServicesCardItems = [
  {
     id:"1",
      title: "Search Engine Optimization ",
      description:"Dominate search engine results and increase organic traffic with our strategic (SEO) Search Engine Optimization solutions. We employ proven techniques to improve your website's ranking and ensure maximum visibility."
  },
  {
    id:"2",
     title: "Pay-Per-Click Advertising",
     description:" Drive immediate results and maximize your ROI with our targeted (PPC) Pay-Per-Click campaigns. Our experts create customized strategies to reach your audience and generate qualified leads."
 },
 {
  id:"3",
   title: "Social Media Marketing ",
   description:"Engage with your audience and build brand awareness through effective social media marketing. We craft compelling content and leverage popular platforms to connect with your target demographic."
},
{
  id:"4",
   title: "Content Marketing",
   description:"Establish authority and drive customer engagement with our content marketing services. From blog posts to infographics, we create valuable content that resonates with your audience and drives conversions."
},
{
  id:"5",
   title: "Email Marketing",
   description:"Nurture leads and foster customer loyalty with our email marketing campaigns. We develop personalized strategies to deliver relevant content and drive action from your subscribers. Why Choose Baseline IT Development?"
},
{
  id:"6",
   title: "Experienced Professionals",
   description:"Our team consists of experienced professionals with a proven track record of delivering exceptional results for our clients."
},
];
export { review, cardItem ,ServicesCardItems};
