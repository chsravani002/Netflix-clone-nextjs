import styles from "./featurecard.module.css"
export default function Featurecard(props) {
    return (
                <div className={styles.header}>
                    <div className={styles.c}>
                        <div ><h1 className={styles.header1}>{props.title}</h1></div>
                        <div className={styles.paragraph_text}>
                            <p >{props.description}</p>
                        </div>
                    </div>
                    <div className={styles.container2}>
                        <div >
                            <img src="tvimage.png" className={styles.img}></img>
                        </div>
                        <div className={styles.videostyle}>
                            <video width="100%" height="100%" autoPlay loop>
                                <source src="video-tv-in-0819.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                </div>
    );
}