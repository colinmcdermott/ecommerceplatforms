import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ecommerce Platforms</title>
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><path fill=%22%23ff00cc%22 d=%22M0.81 17.47L41.85 17.47L41.85 27.09L13.01 27.09L13.01 45.14L35.73 45.14L35.73 54.45L13.01 54.45L13.01 72.86L41.85 72.86L41.85 82.53L0.81 82.53L0.81 17.47ZM73.94 59.63L64.85 59.63L64.85 82.53L52.74 82.53L52.74 17.47L73.94 17.47Q80.47 17.47 85.23 18.99Q90.00 20.52 93.11 23.27Q96.22 26.02 97.70 29.84Q99.19 33.66 99.19 38.21L99.19 38.21Q99.19 42.93 97.61 46.87Q96.03 50.81 92.88 53.64Q89.73 56.48 85.01 58.05Q80.28 59.63 73.94 59.63L73.94 59.63ZM64.85 26.82L64.85 50.18L73.94 50.18Q77.27 50.18 79.75 49.35Q82.22 48.52 83.84 46.96Q85.46 45.41 86.27 43.18Q87.08 40.95 87.08 38.21L87.08 38.21Q87.08 35.60 86.27 33.48Q85.46 31.37 83.84 29.88Q82.22 28.40 79.75 27.61Q77.27 26.82 73.94 26.82L73.94 26.82L64.85 26.82Z%22></path></svg>" />
      </Head>

      <main>
        <Header title="Ecommerce Platforms" />
        <p className="description">
            Welcome to Ecommerce Platforms!
        </p>
        <p className="description">
            A cheatsheet/list of ecommerce platforms, brought to you by <a href="https://www.searchcandy.uk/" target="_blank">Search Candy</a>.
        </p>
        <p className="description">
            You can find the companion article for this cheatsheet <a href="https://www.searchcandy.uk/ecommerce/platforms/" target="_blank">here</a>.
        </p>
     
      </main>
    

      <Footer />
    </div>
  )
}
