import fonts from '../styles/fonts.module.css'
import styles from '../styles/utils.module.css'
import underline from '../styles/underline.module.css'

export default function internshipProject(){
    return(
        <>
        <div className={styles.durationHeader}>
            <h1 className={fonts.durationHeader}><a className={underline.underlinemagical}>Internship Projects</a></h1>
        </div>
        <div>
            <div><a href="https://www.coingecko.com/en/careers" target="_blank"><img className={styles.projectImage} src="./careers.png"></img></a><p className={styles.projectDesc}>CoinGecko Careers page</p></div>
            <div><a href="https://www.coingecko.com/en/api" target="_blank"><img className={styles.projectImage} src="./api.png"></img></a><p className={styles.projectDesc}>CoinGecko Developer's API page</p></div>
            <div><a href="https://www.coingecko.com/en/exchanges" target="_blank"><img className={styles.projectImage} src="./exchange.png"></img></a><p className={styles.projectDesc}>Exchange Integration</p></div>
        </div>
        </>
    )
}