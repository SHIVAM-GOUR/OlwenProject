import Footer from "../footer/Footer";
import About from "./About";
import Contact from "./Contact";
import Documents from "./Documents";
import styles from "./HomePage.module.css";
import Products from "./Products";
import Slider from "./Slider";
const HomePage = () => {
  return (
    <div className={styles.container}>
      <Slider/>
      <About/>
      <Products/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default HomePage;
