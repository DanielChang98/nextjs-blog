import fonts from '../styles/fonts.module.css'
import styles from '../styles/utils.module.css'
import underline from '../styles/underline.module.css'

export default function duration(){
    return(
        <>
        <div className={styles.durationHeader}>
            <h1 className={fonts.durationHeader}><a className={underline.underlinemagical}>Internship Duration</a></h1>
        </div>
        <div className={styles.durationContent}>
            <div className={styles.durationMainCircleLeft}>
                <div className={styles.circleLeft} c></div>
                <p className={fonts.durationDesc}>1st March 2021</p>
            </div>
            <div className={styles.durationMainLine}>
                <hr className={styles.hr}></hr>
            </div>
            <div className={styles.durationMainCircleRight}>
                <div className={styles.circleRight}></div>
                <p className={fonts.durationDesc}>27th August 2021</p>
            </div>
        </div>
        </>
    )
}