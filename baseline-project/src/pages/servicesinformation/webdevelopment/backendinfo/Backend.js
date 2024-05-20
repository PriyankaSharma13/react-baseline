import React from 'react';
import img from "../../../../assets/backend.png"
import styles from "./style.module.css"
function Backend() {
  const backendTechnologies = [
    {
      name: "PHP",
      description: "This PHP tutorial will give you an in-depth understanding of the PHP scripting language. Whether you are a beginner or a professional PHP developer this free PHP tutorial gives you in-depth insights into PHP scripting language. PHP (Hypertext Preprocessor) is a versatile and widely used server-side scripting language for creating dynamic and interactive web applications. Whether you’re a seasoned developer or a beginner eager to delve into the world of web development, this PHP tutorial is your gateway to mastering the intricacies of PHP programming.",
    },
    {
      name: "Java",
      description: "Java is one of the most popular and widely used programming languages. It is highly scalable. Java is fast, reliable and secure. From desktop to web applications, scientific supercomputers to gaming consoles, cell phones to the Internet, Java is used in every nook and corner. Java is easy to learn and its syntax is simple and easy to understand. It is based on C++ (so easier for programmers who know C++). Java has removed many confusing and rarely-used features e.g. explicit pointers, operator overloading etc. Java also takes care of memory management and for that, it provides an automatic garbage collector. This collects the unused objects automatically.",
    },
    {
      name: "Python",
      description: "Python is a programming language that lets you work quickly and integrate systems more efficiently. Python is a high-level, general-purpose, and very popular programming language. Python programming language (latest Python 3) is being used in web development, and Machine Learning applications, along with all cutting-edge technology in Software Industry. Python language is being used by almost all tech-giant companies like – Google, Amazon, Facebook, Instagram, Dropbox, Uber… etc.",
    },
    {
      name: "Node.Js",
      description: "NodeJS or Node.js is one of the powerful open-source and cross-platform runtime environment built on Chrome’s V8 JavaScript engine for executing JavaScript code outside of a browser. It provides an event-driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript.",
    },
  ];

  return (
    <div className={styles.backendContainer}>
      <div className={styles.leftContent}>
        <h1 className={styles.backendHeading}>Backend Development</h1>
        <p className={styles.backendText}>
          Backend is the server side of a website. It is part of the website that users cannot see and interact with. It is the portion of software that does not come in direct contact with the users. It is used to store and arrange data.
        </p>
        <div className={styles.imageContainer}>
          <img src={img} alt="Backend" className={styles.backendImage} />
        </div>

      </div>
      <div className={styles.rightContainer}>
        <h2 className={styles.heading}>
          Popular Backend Technologies
        </h2>
        <div className={styles.cardContainer}>
          {backendTechnologies.map((technology, index) => (
            <div key={index} className={styles.cardDetails}>
              <h3 className={styles.cardTitle}>{technology.name}</h3>
              <p className={styles.cardDesc}>{technology.description}</p>
            </div>
          ))}

        </div>
      </div>

    </div>


  );
}

export default Backend;
