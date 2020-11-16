import styles from './divCustom.module.css'

export default function Div ({children}){
    return <div className={styles.divClass}>{children}</div>
}