import React from "react";
import styles from "./GoAgri.module.css";
import { Button, useMediaQuery } from "@mui/material";
import ImageWithText from "./ImageWithText";
import poster from "../../public/images/agriImage.jpg";
import Image from "next/image";

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
        <p className={styles.logo}>Go4Agri</p>
        <Button
          variant="contained"
          className={styles.button}
          onClick={scrollToSection}
        >
          Contact
        </Button>
      </div>
      {/* <Image src={poster} /> */}
      <ImageWithText
        // imageSrc={image}
        text="Welcome to Go4Agri Certifications!"
      />
      <div className={styles.formBox} id="form">
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
      </div>
      <div className={styles.footer}>
        <p>Copyright 2023, Go4Agri All rights reserved.</p>
      </div>
    </div>
  );
};

export default GoAgriHome;
