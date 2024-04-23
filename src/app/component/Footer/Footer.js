import styles from "./footer.module.css"
import Border from "../Border/Border";
export default function Footer(props) {
    return (
        <>
            <div class="container-fluid d-flex bg-black flex-column">
                <h1 className="text-light text-center my-4 fw-bolder">Frequently Asked Questions</h1>
                {
                    props.data.map((v, i) => {
                        return (
                            <div className={styles.header}>
                                <button className={styles.btn}>
                                    {v.title}
                                </button>
                            </div>
                        )
                    })
                }
                <p className={styles.paragraph}>Ready to watch? Enter your email to create or restart your membership</p>
                <div class ="d-flex flex-row justify-content-center  pb-5 ">
                    <input type="email" name="mail" placeholder="Email address"id="email" className={styles.inputform} ></input>
                    <button className={styles.getstartbtn}>Get Started </button>
                </div>
               <Border></Border>
            </div>
        </>
    );
}