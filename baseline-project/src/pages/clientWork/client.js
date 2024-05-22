import React, { useState } from 'react';
import Navbar from '../../common/navbar/Navbar';
import styles from './client.module.css';
import Footer from '../../components/footer/footer';

import ClientDetails from './data';

const ClientWork = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleDescription = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div>
            <Navbar />
            <div style={{ marginTop: '80px', backgroundColor: "black" }}>
                <div className={styles.main}>
                    <div className={styles.containerHeading}>
                        <h2 className={styles.heading}>
                            <span className={styles.whiteText}>Our</span> Clients Speak to Us
                        </h2>
                    </div>

                    <div className={styles.cardContainer}>
                        {ClientDetails.map((detail, index) => (
                            <div key={index} className={styles.quoteFrame}>
                                <div className={styles.quoteText}>
                                    {expandedIndex === index
                                        ? detail.description
                                        : detail.description.split(' ').slice(0, 40).join(' ') + '...'}
                                    <span className={styles.readMore} onClick={() => toggleDescription(index)}>
                                        {expandedIndex === index ? '- Read less' : '+ Read more'}
                                    </span>
                                </div>
                                <div className={styles.authorInfo}>
                                    <img src={detail.img} alt="Avatar" className={styles.avatar}/>
                                    <div className={styles.quoteAuthor}>{detail.authorName}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    
                </div>
                <Footer />  
            </div>
        </div>
    );
};

export default ClientWork;
