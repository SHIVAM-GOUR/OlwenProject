import React from 'react'
import styles from "./samplepage.module.css"
import Navbar from './Navbar'
import { useRouter } from 'next/router';

const SamplePage = ({ title }) => {
    const router = useRouter();

    return (
        <div>
            <Navbar />
            <div className={styles.cont}>
                <h1>{title}</h1>
                <button className={styles.backbtn} onClick={() => router.back()}>Back</button>
            </div>
        </div>
    )
}

export default SamplePage
