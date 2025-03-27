import React, { useEffect, useState } from 'react'
import styles from "./samplepage.module.css"
import Navbar from './Navbar'
import { useRouter } from 'next/router';

const SamplePage = ({ title }) => {
    const router = useRouter();
    const [path, setPath] = useState("")

    useEffect(() => {
        setPath(router.pathname)
    }, [router]);



    return (
        <div>
            <Navbar />
            <div className={styles.cont}>
                <div className={styles.centerCont}>
                    <h1>{title}</h1>
                    {
                        path == "/complaint-procedure" && <div>
                            <p className={styles.linkText} >
                            PRO 19 Procedure for suspension_cancellation_withdrawal_appeal&nbsp;&nbsp;
                                <a href="PRO 19 Procedure for suspension_cancellation_withdrawal_appeal.docx" download className={styles.linkBtn} >Download file</a>
                            </p>
                            <p className={styles.linkText} >
                            PRO 06-Complaint procedure&nbsp;&nbsp;
                                <a href="PRO 06-Complaint procedure.docx" download className={styles.linkBtn} >Download file</a>
                            </p>
                        </div>
                    }
                    {
                        path == "/certification-procedures" && <div>
                            <p className={styles.linkText} >
                            PRO03-Certification procedure &nbsp;&nbsp;
                                <a href="PRO03-Certification procedure.docx" download className={styles.linkBtn} >Download file</a>
                            </p>
                        </div>
                    }
                </div>
                <button className={styles.backbtn} onClick={() => router.back()}>Back</button>
            </div>
        </div>
    )
}

export default SamplePage
