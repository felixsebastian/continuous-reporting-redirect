import { useEffect } from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  useEffect(() => { window.location = "https://cultureamp.cultureamp.com/app/continuous-reporting-app" }, []);
  return (
    <div className="container">
      <Head>
        <title>Page not found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="This site is no longer available. Redirecting you to the new URL now" />
      </main>

      <Footer />
    </div>
  )
}
