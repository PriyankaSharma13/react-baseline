import React from 'react'
import styles from "./digital.module.css";
import Navbar from '../../../common/navbar/Navbar';
import Footer from '../../../components/footer/footer';
import digitalImg from "../../../assets/servicesInfo/digital.png";
import CustomButton from '../../../components/button/Button';
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
                            <p className={styles.subHeading}>
                                Digital Marketing is the process of enhancing keyword visibility for web pages on particular
                                Search Engine. Marketing your website through (SEO) search engine optimization & (SMM)
                                Social Media Marketing is just as important as the mode your website looking and purpose.
                            </p>
                            <p className={styles.paragraph}>
                                Baseline IT Development Welcome to Baseline IT Development, your premier destination for
                                top-notch digital marketing services in Mohali. As a leading digital marketing company,
                                we specialize in delivering comprehensive solutions tailored to meet your unique business needs and objectives.
                            </p>
                            <p className={styles.paragraph}>
                                At Baseline IT Development, we understand the significance of establishing a strong online
                                presence in today's competitive landscape. That's why we offer a wide range of digital
                                marketing services designed to enhance your visibility, attract targeted traffic, and
                                drive conversions.
                            </p>
                            <div className={styles.buttonContainer}>
                                <CustomButton text={"View"} />
                            </div>
                        </div>
                        <img src={digitalImg} className={styles.image} alt="Degital marketing" />
                    </div>


                    {/* ------------Our services----------- */}
      

                </div>



                <Footer />
            </div>



        </div>
    )
}

export default Digitalmarketing