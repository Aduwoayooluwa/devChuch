import Head from 'next/head'
import Footer from './components/Footer'
import { useMediaQuery } from 'react-responsive';
import DesktopView from './DesktopView'
import MobileView from './MobileView'
import { useEffect, useState } from 'react'

// import 'semantic-ui-css/semantic.min.css';

export default function Home() {
  const [mount, setMount] = useState(false)
  
  // const isMobile = useMediaQuery({
  //   query: "(min-device-width: 600px)",
  // });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  useEffect(() => {
    setMount(true)
  }, [])

  return (
    <div className=''>
      <Head>
        <title>DEvChurch</title>
        <meta name="description" content="A church of Techies for Techies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main className='relative'>

        {
          mount && isDesktop ? (<DesktopView />) : (<MobileView />)
        }
      
      </main>

      <footer>
        <Footer />
      </footer>
      {/* <Nav />
      <Hero /> */}

    </div>
  )
}
