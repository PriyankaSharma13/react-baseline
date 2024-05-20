import React from 'react';
import img from "../../../../assets/frontend.png"
import styles from "./style.module.css"

const frontendTechnologies = [
  {
    name: "HTML",
    description: "HTML stands for HyperText Markup Language. It is used to design the front end portion of web pages using markup language. It acts as a skeleton for a website since it is used to make the structure of a website."
  },
  {
    name: "CSS",
    description: "Cascading Style Sheets, fondly referred to as CSS, is a simply designed language intended to simplify the process of making web pages presentable. It is used to style our website."
  },
  {
    name: "JavaScript",
    description: "JavaScript is a scripting language used to provide dynamic behavior to our website."
  },
  {
    name: "Bootstrap",
    description: "Bootstrap is a free and open-source tool collection for creating responsive websites and web applications. It is the most popular CSS framework for developing responsive, mobile-first websites. Nowadays, websites are perfect for all browsers (IE, Firefox, and Chrome) and for all sizes of screens (Desktop, Tablets, Phablets, and Phones)."
  },
  {
    name: "Bootstrap 4",
    description: "Bootstrap 4 is the fourth major version of the popular CSS framework. It introduces new components and utilities for creating responsive designs."
  },
  {
    name: "Bootstrap 5",
    description: "Bootstrap 5 is the latest version of the popular CSS framework. It comes with new features and improvements, including a new grid system and updated forms."
  }
];

function Frontend() {
  return (
    <div className={styles.frontendContainer}>
      <div className={styles.leftContent}>
        <h1 className={styles.frontendHeading}>Frontend Development</h1>
        <p className={styles.frontendText}>
          The part of a website where the user interacts directly is termed as front end. It is also referred to as the ‘client side’ of the application.
        </p>
        <div className={styles.imageContainer}>
          <img src={img} alt="Backend" className={styles.frontendImage} />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h2 className={styles.heading}>
          Popular Frontend Technologies
        </h2>
        <div className={styles.cardContainer}>
          {frontendTechnologies.map((technology, index) => (
            <div key={index} className={styles.shortCard}>
              <h3 className={styles.shortCardTitle}>{technology.name}</h3>
              <p className={styles.shortCardDesc}>{technology.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Frontend;
