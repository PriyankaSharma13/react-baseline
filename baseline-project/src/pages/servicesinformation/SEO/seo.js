import React from 'react'
import styles from "./seo.module.css";
import Navbar from '../../../common/navbar/Navbar';
import Footer from '../../../components/footer/footer';
import CustomButton from '../../../components/button/Button';
import seoImg from "../../../assets/servicesInfo/seo-search.png"
import CardDetails from './CardSeo/CardSeodetails';
import { ShortCardDetails } from '../data';

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


                    {/* --------------content Container-------  */}
                    <div className={styles.contentContainer}>
                        <h1 className={styles.contentHeading}> Effective SEO Brings Customers To Your Website</h1>
                        <p className={styles.contentParagraph}>When it comes to driving your website to be the best for your targeted audience,
                            Baseline IT Development is in a league of its own. Since almost every user today prefers
                            to visit websites that show up on the first page of search results, we are committed to doing
                            everything possible to place your website right at the top. We ensure that your business never
                            stops getting qualified leads by providing tangible SEO Services in Mohali.
                        </p>
                        <p className={styles.contentSubParagraph}>Here are some aspects of how effective SEO strategies can help you attract more customers to your website and build an unrivaled brand reputation:</p>

                        <div className={styles.cardContainer}>
                            {ShortCardDetails.map(card => (
                                <div key={card.id} className={styles.shortCard}>
                                    <h3 className={styles.shortCardTitle}>{card.title}</h3>
                                    <p className={styles.shortCardDesc}>{card.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>



        </div>
    )
}

export default SeoPage
