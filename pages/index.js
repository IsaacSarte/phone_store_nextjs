import Head from "next/head";

/* Components */
import {
  Header,
  Main,
  Footer
} from "../components";

export default function Home() {
  return (
    <div>

    <Head>
      <title>Phone Store</title>
      <meta name="description" content="Phone Store Fullstack Application using Next Js and Laravel" />
    </Head>
      
    {/* Header */}
    <Header />

    {/* Main */}
    <Main />

    {/* Footer */}
    <Footer />

    </div>
  )
}
