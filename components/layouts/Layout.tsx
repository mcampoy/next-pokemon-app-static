import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  children: ReactNode,
  title?: string
}

export const Layout: FC <Props> = ({ children, title }) => {

  const origin = (typeof window === 'undefined') ? '' : window.location.origin;

  return (
    <>
      <Head>
        <title>{ title || 'Pokémon App' }</title>
        <meta name="author" content="Matías Campoy" />
        <meta name="description" content={`Información sobre el pokémon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Información sobre el ${title}`}/>
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />

      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>
    </>

)
};

export default Layout;
