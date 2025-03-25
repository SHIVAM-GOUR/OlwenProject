import React from 'react'
import styles from "./button-section.module.css"
import { Button, ButtonBase } from '@mui/material'
import { useRouter } from 'next/router';

const ButtonSection = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
        <div className={styles.btnBox}>
          <button className={styles.btn} onClick={() => router.push('/application-packet')}>Application packet</button>
          <button className={styles.btn} onClick={() => router.push('complaint-procedure')}>Complaint Procedure</button>
          <button className={styles.btn} onClick={() => router.push('/appeal-procedure')}>Appeal Procedure</button>
          <button className={styles.btn} onClick={() => router.push('/certification-procedures')}>Certification Procedures</button>
          <button className={styles.btn} onClick={() => router.push('/cor-client-list')}>COR Client list</button>
          <button className={styles.btn} onClick={() => router.push('/eu-client-list')}>EU client list</button>
          <button className={styles.btn} onClick={() => router.push('/accreditation-certificates')}>Accreditation Certificates</button>
          <button className={styles.btn} onClick={() => router.push('/regulations')}>Regulations</button>
        </div>
    </div>
  )
}

export default ButtonSection
