import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'


export default function Post({ postData }) {
    return (
      <div className={utilStyles.contentBigContainer}> 
        <Layout>
          <Head>
              <title>{postData.title}</title>
          </Head>
          <article>
              <div className={utilStyles.questionContainer}>
                  <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className={utilStyles.questionContent} />
              </div>
          </article>
        </Layout>
      </div>
    )
  }

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
}