import React from 'react'
import styles from "./digital.module.css";
import Navbar from '../../../common/navbar/Navbar';
import Footer from '../../../components/footer/footer';
import digitalImg  from "../../../assets/servicesInfo/digital.jpg"
function Digitalmarketing() {
    return (
        <div>
            <Navbar />
            <div style={{ marginTop: '80px', backgroundColor: "black" }}>
                <div className={styles.main}>
                <div className={styles.container}>
                        <div className={styles.containerHeading}>
                            <h2 className={styles.heading}>
                                <span className={styles.whiteText}>Digital</span> Marketing
                            </h2>
                            <h3 className={styles.subHeading}>
                            Digital Marketing is the process of enhancing keyword visibility for web pages on particular 
                            Search Engine. Marketing your website through (SEO) search engine optimization & (SMM)
                             Social Media Marketing is just as important as the mode your website looking and purpose.
                            </h3>
                        </div>
                        <img src={digitalImg} className={styles.image} alt="Web Design" />
                    </div>
                </div>



                <Footer />
            </div>



        </div>
    )
}

export default Digitalmarketing