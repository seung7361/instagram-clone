import Head from 'next/head';
import Header from '../components/Header';
import Feed from '../components/Feed'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instragram clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />
    </div>
  )
}
