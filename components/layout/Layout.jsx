import React from 'react';
import HeaderDefault from './header/HeaderDefault';
import Head from 'next/head';
import FooterDefault from './footer/FooterDefault';
export default function Layout({ title, children }) {
  return (
    <div className="h-100">
      <Head>
        <title>{title ? `${title} | Demo Ecommerce` : title}</title>
        <meta name="description" content="This is demo Ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDefault />
      <main>{children}</main>
      <FooterDefault />
    </div>
  );
}
