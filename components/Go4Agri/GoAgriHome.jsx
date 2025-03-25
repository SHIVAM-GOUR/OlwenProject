import React from "react";
import styles from "./GoAgri.module.css";
import { Button, useMediaQuery } from "@mui/material";
import ImageWithText from "./ImageWithText";
import poster from "../../public/images/agriImage.jpg";
import Image from "next/image";
import LOGO from "../../public/logo/GO4AGRI-PNG-LOGO.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const GoAgriHome = () => {
  const isMobile = useMediaQuery("max-width:600px");
  const scrollToSection = () => {
    const targetElement = document.getElementById("form");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Image src={LOGO} width={100} height={100} alt="go4agri logo" />
        <Button
          variant="contained"
          className={styles.button}
          onClick={scrollToSection}
        >
          Contact us
        </Button>
      </div>
      <ImageWithText text="Welcome to Go4Agri Certifications!" />
      <div className={styles.contactContainer}>
        <div className={styles.contactBox} id="form">
          <p className={styles.contactPara}>
            We are happy to connect with you for any queries. <br /> Please
            contact on given mail below :
          </p>
          <div className={styles.contactMail}>
            <MailOutlineIcon className={styles.mailIcon} />
            <a href="mailto:info@go4agri.co.in" className={styles.mailText}>Info@go4agri.co.in</a>
          </div>
        </div>
      </div>
      {/* GOOGLE FORM IMBEDED CODE */}
      {/* <div className={styles.formBox} id="form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdpZKOTR8Ei-jw74RsxVRXm644BFP1o7XchkilNR-4-3j8zOg/viewform?embedded=true"
          width="330"
          height="500"
          // width={isMobile ? 330 : 640}
          // height={isMobile ? 500 : 821}
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div> */}
      <div className={styles.footer}>
        <p>Copyright 2023, Go4Agri All rights reserved.</p>
      </div>
    </div>
  );
};

export default GoAgriHome;
