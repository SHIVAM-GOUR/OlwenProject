import styles from "./Slider.module.css";
import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Slider = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img
            src="/images/slider/poster1.jpg"
            className={styles.sliderImage}
          />
        </div>
        <div>
          <img
            src="/images/slider/poster2.jpg"
            className={styles.sliderImage}
          />
        </div>
        <div>
          <img
            src="/images/slider/poster3.jpg"
            className={styles.sliderImage}
          />
        </div>
        <div>
          <img
            src="/images/slider/poster4.jpg"
            className={styles.sliderImage}
          />
        </div>
        <div>
          <img
            src="/images/slider/Aflarose5.jpg"
            className={styles.sliderImage}
          />
        </div>
        <div>
          <img
            src="/images/slider/Olmiciumplus6.jpg"
            className={styles.sliderImage}
          />
        </div>
        <div>
          <img
            src="/images/slider/Wenosis7.jpg"
            className={styles.sliderImage}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
