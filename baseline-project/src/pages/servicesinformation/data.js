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

export { review, cardItem };
