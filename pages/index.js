import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'
import Div from '../components/divCustom'
import Duration from '../components/durationLayout'
import Link from 'next/link'
import Head from 'next/head'
import fonts from '../styles/fonts.module.css'
import Cards from '../components/cards'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps(){
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    < >
      <Head>
        <title>Application Home</title>
      </Head>
      <Layout home></Layout>
      <Div>
        <Duration></Duration>
      </Div>
      <Div>
        <div className={styles.durationHeader}>
          <h1 className={fonts.durationHeader}>Questions</h1>
        </div>
        <div className={styles.questionBody} id="questions">
          <ul className={styles.list}>
            {allPostsData.map((cards) => (
              <li className={styles.listItem} key={cards.id}>
              <Link href={`/post/${cards.id}`}>
                <a href=""> <Cards {...cards}/> </a>
              </Link>
            </li>
            ))}
          </ul>
        </div>
      </Div>
    </>
  )
}

