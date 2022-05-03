import React from 'react';
import Head from "next/head";

/* Components */
import Header from '../../components/subComponents/order/Header';
import Products from '../../components/products/Products';
import Footer from '../../components/Footer';

const order = () => {
  return (
    <>
      <Head>
        <title>Phone Store</title>
        <meta name="description" content="Phone Store Fullstack Application using Next Js and Laravel" />
      </Head>

      <div className="min-h-screen">
        {/* Header */}
        <Header />
        
        {/* Products */}
        <Products />

        {/* Footer */}
        <Footer />
      </div>
      

    </>
  )
}

export default order
