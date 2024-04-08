import { Content } from "next/font/google";
import styles from "./Banner.module.css";
import Header from "../Header/Header";

export default function Banner() {
  return (
    <div className={styles.background_image}>
      <Header></Header>
      <div className={styles.h1_container}>
        <h1 className={styles.h1_text}>Unlimited movies, TV shows and more</h1>
      </div>

      <div className={`${styles.paragraph_block} ${styles.paragraph_padding}`}>
        <p> Watch anywhere. Cancel anytime.</p>
      </div>
      <div className={styles.paragraph_block}>
        <p> Ready to watch? Enter your email to create or restart your membership.</p>
      </div>

      <div className={styles.footer_block}>
        <input type="email" className={styles.email_form} id="email" placeholder="Email address"></input>
        <button type="button" className={styles.get_started_btn}><b>Get Started </b></button>
      </div>
    </div>
  );
}
