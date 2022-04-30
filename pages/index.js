import Head from "next/head";

import Link from "next/link";

/* Components */
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>

    <Head>
      <title>Phone Store</title>
      <meta name="description" content="Phone Store Fullstack Application using Next Js and Laravel" />
    </Head>
      
    {/* Header */}
    <Header />

    {/* Footer */}
    <Footer />

    </div>
  )
}
