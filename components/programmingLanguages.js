import fonts from '../styles/fonts.module.css'
import styles from '../styles/utils.module.css'
import underline from '../styles/underline.module.css'

export default function programmingLanguage(){
    return(
        <>
            <div className={styles.durationHeader}>
                <h1 className={fonts.durationHeader}><a className={underline.underlinemagical}>Programming Languages</a></h1>
            </div>
            <div className={styles.languagesContainer}>
                <div><img className={styles.languagesImage} src="/languages/java (2).png" /></div>
                <div><img className={styles.languagesImage} src="/languages/javascript.png" /></div>
                <div><img className={styles.languagesImage} src="/languages/ruby.png" /></div>
                <div><img className={styles.languagesImage} src="/languages/c-.png" /></div>
            </div>
        </>
    )
}