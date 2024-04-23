import Border from "../Border/Border";
import styles from "./featurecard.module.css"
export default function Featurecard(props) {
    return (
        <>
            <div className={`${styles.header} ${props.reverse && styles.cardReverse}`}>
                <div className={styles.c}>
                    <div ><h1 className={styles.header1}>{props.data.title}</h1></div>
                    <div className={styles.paragraph_text}>
                        <p >{props.data.description}</p>
                    </div>
                </div>
                <div className={styles.container2}>
                    <div >
                        <img src={props.data.image} className={styles.img}></img>
                    </div>
                    {props.data.isVideoAvailable && <div className={`${styles.videostyle} ${props.videoClass}`}>
                        <video width="100%" height="100%" autoPlay loop>
                            <source src={props.data.video} type="video/mp4" />
                        </video>
                    </div>}
                </div>

            </div>
            <Border></Border>
        </>
    );
}