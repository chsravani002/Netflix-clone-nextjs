import styles from "./featurecard.module.css"
export default function Featurecard(props) {
    return (
        <div className={styles.main_container}>
            <div className={styles.container}>
                <div><h1 className={styles.header1}>{props.title}</h1></div>
                <div>
                    <p className={styles.paragraph_text}>{props.description}</p>
                </div>
            </div>
            <div className={styles.img_container}>
                <div >
                    <img src="tvimage.png" className={styles.img}></img>
                </div>
                <div className={styles.video}>
                    <video width="60%" height="240" autoPlay loop>
                        <source src="video-tv-in-0819.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>


    );
}