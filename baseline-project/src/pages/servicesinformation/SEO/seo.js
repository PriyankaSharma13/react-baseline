import React from 'react'
import styles from "./seo.module.css";
import Navbar from '../../../common/navbar/Navbar';
import Footer from '../../../components/footer/footer';

const SeoPage =() => {
  return (
    <div>
    <Navbar />
    <div style={{ marginTop: '80px', backgroundColor: "black" }}>
        <div className={styles.main}>
        <div className={styles.container}>
                <div className={styles.containerHeading}>
                    <h2 className={styles.heading}>
                        <span className={styles.whiteText}>Leading </span> SEO Company
                    </h2>
                    <h3 className={styles.subHeading}>
                    Search Engine Optimization (SEO) is the lifeblood of any online business today in order to 
                    stay competitive, reach out to targeted and new customers, and expand beyond boundaries. 
                    Do you want to know how? Remember that nearly 68% of online activities, including purchasing 
                    and hiring, begin with a search on browsers. Additionally, 75% of online searchers do not go 
                    past the first page of search engine results.

                    </h3>
                </div>
            </div>
        </div>



        <Footer />
    </div>



</div>
  )
}

export default SeoPage
