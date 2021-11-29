import fonts from '../styles/fonts.module.css'
import styles from '../styles/utils.module.css'
import underline from '../styles/underline.module.css'
import Card1 from '../components/workCard1'
import Card2 from '../components/workCard2'
import Card3 from '../components/workCard3'

export default function workExperience(){
    return(
        <>
        <div className={styles.durationHeader}>
            <h1 className={fonts.durationHeader}><a className={underline.underlinemagical}>Work Experience</a></h1>
        </div>
        <div className={styles.workFlexBox}>
            <div className={styles.workLeft}><img className={styles.workImage} src='./cg.png'></img></div>
            <div className={styles.workText}>
                <p className={fonts.durationDesc}>CoinGecko - Software Engineering Intern - Full Stack</p>
                <p className={fonts.durationDesc}>6 months internship (March - August 2021)</p>
                <p className={fonts.durationDesc}>Freelance software engineer (September - Present)</p>
            </div>
        </div>
        </>
    )
}