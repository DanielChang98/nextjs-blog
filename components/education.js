import fonts from '../styles/fonts.module.css'
import styles from '../styles/utils.module.css'
import underline from '../styles/underline.module.css'

export default function education(){
    return(
        <>
        <div className={styles.durationHeader}>
            <h1 className={fonts.durationHeader}><a className={underline.underlinemagical}>Education</a></h1>
        </div>
        <div className={styles.educationContainer}>
            <div className={styles.educationLeftContainer}>
                <img className={styles.educationImage} src="/csb.jpeg" />
            </div>
            <div className={styles.educationRightContainer}>
                <p className={fonts.durationDesc}>Bachelor of Computer Science (Honours)</p>
                <p className={fonts.durationDesc}>Major: Software Engineering</p>
                <p className={fonts.durationDesc}>Minor: Mathematics</p>
                <p className={fonts.durationDesc}>CGPA: 3.79</p>
            </div>
        </div>
        </>
    )
}