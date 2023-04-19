import styles from "./Contact.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <p className={styles.title}>Contact us</p>
      <div className={styles.addressBox}>
        <div className={styles.officeBox}>
          <p className={styles.heading}>Head Office</p>
          <p className={styles.address}>
            SS-9, Satyamev Arcade, Highway Road, Chandkheda, Ahmedabad,
            Pin:382424
          </p>
          <p className={styles.email}>
            <MailOutlineIcon /> prajapatrkp@gmail.com
          </p>
          <p className={styles.email}>
            <PhoneIcon /> 9414081152
          </p>
        </div>

        <div className={styles.officeBox}>
          <p className={styles.heading}>Branch Office</p>
          <p className={styles.address}>
            Plot no. 4, Ground floor, Pancham ki Bhel, RS Bhandari Marg, Vallabh
            Nagar, Tahsil: Indore, Pin:452003
          </p>
          <p className={styles.email}>
            <MailOutlineIcon /> prajapatrkp@gmail.com
          </p>
          <p className={styles.email}>
            <PhoneIcon /> 9414081152
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
