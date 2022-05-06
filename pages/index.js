import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ecommerce Platforms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Ecommerce Platforms" />
        <p className="description">
          Welcome to Ecommerce Platforms!
        </p>
      </main>

      <Footer />
    </div>
  )
}
