import React from 'react';
import Navbar from '../../../common/navbar/Navbar';
import Footer from '../../../components/footer/footer';
import webdesign from '../../../assets/servicesInfo/webdesign.png';
import styles from "./web.module.css";
import CustomButton from '../../../components/button/Button';
import { review, cardItem } from "../data.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faRebel, faCodepen, faEmpire } from '@fortawesome/free-solid-svg-icons'

const WebDesigning = () => {
    return (
        <div >
            <Navbar />
            <div style={{ marginTop: '80px', backgroundColor: "black" }}>
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.containerHeading}>
                            <h2 className={styles.heading}>
                                <span className={styles.whiteText}>Best Web</span> Designing Service
                            </h2>
                            <h3 className={styles.subHeading}>
                                Creating Unique Web Designs, Bringing Your Websites Back To Life!
                            </h3>
                            <p className={styles.paragraph}>
                                Baseline IT Development is a premier web design company in Mohali that strives to assist
                                clients in obtaining an immersive, appealing, and result-driven website by utilizing the best
                                web design technologies. In order to set your website apart from the competition, our creative
                                team of the best web designers always puts their best foot forward - ensuring your success.
                            </p>
                            <p className={styles.paragraph}>
                                Every website we develop and design will thus be finalized after extensive analysis and
                                research. Before designing your website, our skilled website designers in Mohali
                                consider all performance factors, the latest design trends, search factors, and more.
                            </p>
                            <div className={styles.buttonContainer}>
                                <CustomButton text={"View"} />
                            </div>
                        </div>
                        <img src={webdesign} className={styles.image} alt="Web Design" />
                    </div>

                  
                    <div className={styles.containerReview}>
                        <div className={styles.reviewContent}>
                            {review.map((item, index) => (
                                <div className={styles.content} key={index}>
                                    <img src={item.icon} className={styles.icon} alt="Review Icon" width={18} height={18} />
                                    <h1>{item.text}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                    



                    {/* -----------card Section --------------- */}
                    <div className={styles.whyChoose}>
                    <h1 >OUR SERVICES</h1>
                        <h3>Why Choose Baseline Web Tech for Your Web Development Needs</h3>
                        <div className={styles.cardContainer}>
                        {cardItem.map((item, index) => (
                            <div key={index} className={styles.card}>
                                <img src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" className={styles.cardImage} alt="" />
                                <div className={styles.cardOverlay}>

                                    <div className={styles.cardHeaderText}>
                                        <h3 className={styles.cardTitle}>{item.title}</h3>
                                        <p className={styles.cardDescription}>{item.description}</p>
                                    </div>
                                    <Link to={"/learnmore"} className={styles.moreLink}>
                                            <h1>more</h1>
                                        </Link>
                                    
                                </div>

                            </div>
                        ))}
                    </div>
                    </div>

                    {/* --------Short content-------------- */}
                    <div className={styles.shortcontent}>
                        <div>
                            <h1>Let us collaborate!</h1>
                            <p>Need a quote for a new web design or re-design project?</p>
                            <p>Give our <span>web designing in Mohali </span> some information about your project and
                                <Link to={"/contact"} className={styles.link}> get started today!</Link></p>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default WebDesigning;
