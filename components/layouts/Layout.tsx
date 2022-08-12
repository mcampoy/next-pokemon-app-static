import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  children: ReactNode,
  title?: string
}

export const Layout: FC <Props> = ({ children, title }) => (
  <>
    <Head>
      <title>{ title || 'Pokémon App' }</title>
      <meta name="author" content="Matías Campoy" />
      <meta name="description" content={`Información sobre el pokémon ${title}`} />
      <meta name="keywords" content={`${title}, pokemon, pokedex`} />
    </Head>
    <Navbar />

    <main style={{
      padding: '0px 20px'
    }}>
      {children}
    </main>
  </>

);

export default Layout;
