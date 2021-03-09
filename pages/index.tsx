import Head from 'next/head'
import Layout from '../components/Layout'
import Byline from '../components/Byline'


export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Noctis's Tech Blog</title>
      </Head>
        <h1>Next-Reformer</h1>
        <Byline author="Noctis" />
        <p className="caption">Meowwwwwwww</p>
        <img
          alt="Mountains"
          width="550"
          height="368"
          src="https://amp.dev/static/inline-examples/images/mountains.webp"></img>
    </Layout>
  )
}
