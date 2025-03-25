import React from 'react'
import styles from "../Go4Agri/GoAgri.module.css";
import Image from "next/image";
import LOGO from "../../public/logo/GO4AGRI-PNG-LOGO.png";
import { Button } from '@mui/material';

const Navbar = () => {
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
  )
}

export default Navbar
