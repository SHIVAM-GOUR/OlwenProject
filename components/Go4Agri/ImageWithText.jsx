import React from 'react';
import styles from './ImageWithText.module.css';
import poster from "../../public/images/agriImage.jpg";
import Image from 'next/image';
import { Button } from '@mui/material';

const ImageWithText = ({ imageSrc, text }) => {
  return (
    <div className={styles.container}>
      <Image src={poster} className={styles.image} />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default ImageWithText;
