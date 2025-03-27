import React from 'react'
import styles from "./samplepage.module.css"
import Navbar from './Navbar'
import { useRouter } from 'next/router';

const RegulationsPage = ({ title }) => {
    const router = useRouter();

    return (
        <div>
            <Navbar />
            <div className={styles.cont}>
                <div>
                    <h1>{title}</h1>
                    <p className={styles.linkText}>
                        1. EU 2018/848 &nbsp;&nbsp;
                        <a href='https://eur-lex.europa.eu/eli/reg/2018/848/oj' target='_blank' className={styles.linkBtn}>link</a>
                    </p>
                    <p className={styles.linkText} >
                        2. EU 2021/1698 &nbsp;&nbsp;
                        <a href='https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021R1698#d1e2265-7-1' target='_blank' className={styles.linkBtn}>link</a>
                    </p>
                    <p className={styles.linkText} >
                        3. EU Organic – Links to all acts (Main, delegated, and implementing acts)&nbsp;&nbsp;
                        <a href='https://agriculture.ec.europa.eu/farming/organic-farming/legislation_en#:~:text=Since%201%20January%202022%2C%20Regulation%20%28EU%29%202018%2F848%20of,Regulation%20%28EC%29%20No%20834%2F2007%20of%2028%20June%202007' target='_blank' className={styles.linkBtn}>link</a>
                    </p>
                    <p className={styles.linkText} >
                        4. COR Operating Manual&nbsp;&nbsp;
                        <a href='https://inspection.canada.ca/en/food-labels/organic-products/operating-manual' target='_blank' className={styles.linkBtn}>link</a>
                    </p>
                    <p className={styles.linkText} >
                        5. FMO40a EU operator list&nbsp;&nbsp;
                        <a href="FMO40a EU operator list.xlsx" download className={styles.linkBtn} >Download</a>
                    </p>
                    <p className={styles.linkText} >
                        6. FMO40 COR operator list&nbsp;&nbsp;
                        <a href="FMO40 COR operator list.xlsx" download className={styles.linkBtn} >Download</a>
                    </p>
                    <p className={styles.linkText} >
                        7. NPOP_Eight_Edition_2024 &nbsp;&nbsp;
                        <a href="https://npop.apeda.gov.in/sites/default/files/2024-10/NPOP_Eight_Edition_2024.pdf" target='_blank' download className={styles.linkBtn} >Download</a>
                    </p>

                </div>
                <button className={styles.backbtn} onClick={() => router.back()}>Back</button>
            </div>
        </div>
    )
}

export default RegulationsPage
