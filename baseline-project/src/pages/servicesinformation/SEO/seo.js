import React from 'react'
import styles from "./seo.module.css";
import Navbar from '../../../common/navbar/Navbar';
import Footer from '../../../components/footer/footer';
import CustomButton from '../../../components/button/Button';
import seoImg from "../../../assets/servicesInfo/seo-search.png"
import CardDetails from './CardSeo/CardSeodetails';

const SeoPage = () => {
    return (
        <div>
            <Navbar />
            <div style={{ marginTop: '80px', backgroundColor: "black" }}>
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.containerHeading}>
                            <h1 className={styles.YellowText}>Search Engine Optimization</h1>
                            <h2 className={styles.heading}>
                                <span className={styles.whiteText}> Best </span> SEO Company
                                <span className={styles.whiteText}> In Mohali? </span>
                            </h2>
                            <h3 className={styles.subHeading}>
                                Search Engine Optimization (SEO) is the lifeblood of any online business today in order to
                                stay competitive, reach out to targeted and new customers, and expand beyond boundaries.
                                Do you want to know how? Remember that nearly 68% of online activities, including purchasing
                                and hiring, begin with a search on browsers. Additionally, 75% of online searchers do not go
                                past the first page of search engine results.
                            </h3>
                            <p className={styles.paragraph}>
                                As the leading SEO Company in Mohali, Baseline IT Development understands how to best utilize SEO
                                for your unending, unprecedented growth. We are proud to have a specialized SEO team that can provide
                                your company with the true online value it deserves. Our SEO experts do everything to the best of
                                their abilities, from helping your website rank first in search results to increasing your website
                                traffic and conversions. Being a top SEO Company in Mohali, we believe in showing and unlocking your
                                true potential. So, let's talk more about your project today.
                            </p>

                            <div className={styles.buttonContainer}>
                                <CustomButton text={"View"} />
                            </div>
                        </div>
                        <img src={seoImg} className={styles.image} alt="SEO" />
                    </div>

                    {/* ------------Our services----------- */}
                    <div className={styles.servicesContainer}>
                        <h1 className={styles.servicesHeading}>SEO SERVICES</h1>
                        <h3 className={styles.servicesSubHeading}>Why Choose Baseline Web Tech for  Your SEO Services Needs</h3>
                    </div>


                    <div className={styles.mainContainer}>
                        <CardDetails />
                    </div>
                </div>
                <Footer />
            </div>



        </div>
    )
}

export default SeoPage
