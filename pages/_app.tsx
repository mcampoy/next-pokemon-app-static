import type { AppProps } from 'next/app';
import Head from 'next/head';

import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../themes';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const origin = (typeof window === 'undefined') ? '' : window.location.origin;
  return (
    <NextUIProvider theme={darkTheme}>
      <>
        <Head>
          <link rel="icon" type='image/png' sizes='32x32' href={`${origin}/img/cubone.png`} />
        </Head>
        <Component {...pageProps} />
      </>
    </NextUIProvider>
  )
}

export default MyApp
