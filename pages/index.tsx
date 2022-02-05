import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instragram clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <h1>This is instragram clone.</h1>

      
    </div>
  )
}
