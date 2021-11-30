import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Button from '@material-ui/core/Button';

const name = 'Chang Phang Wei'
export const siteTitle = 'CoinGecko Application'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header>
        {home ? (
          <div className={styles.container}>
            <header className={styles.header}>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <div className={styles.logoBar}>
              <a href="https://www.linkedin.com/in/chang-phang-wei-ab79b8165/" target="_blank">
                <img className={styles.logoImage} src="linkedin-logo.svg" alt="LinkedIn" title="View LinkedIn Profile"/>
              </a>
              <a href="https://github.com/DanielChang98" target="_blank">
                <img className={styles.logoImage} src="github-logo.svg" alt="GitHub" title="View Github Profile"/>
              </a>
              <a href="/resume-chang_phang_wei.pdf" download>
                <img className={styles.logoImage} src="resume-logo.png" alt="Download Resume" title="Download Resume"/>
              </a>
            </div>
            <section className={utilStyles.headingMd}>
              <p>I'm a student from USM, majoring in Software Engineering and minoring in Mathematics. <br></br>
                Interested in joining the company!
              </p>
            </section>
            </header>
          </div>
        ) : (
          <div className={styles.container2}>
            <header className={styles.header}>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
            </header>
          </div>
        )}
      </header>

      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/#questions">
            <a> <Button variant="contained" color="primary">
            ← Back to home
              </Button></a>
          </Link>
        </div>
      )}
    </div>
  )
}