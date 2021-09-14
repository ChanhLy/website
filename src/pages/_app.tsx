import { AppProps } from 'next/app';

import { Header } from '@/components/Header/Header';

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <>
    <Header></Header>
    <Component {...pageProps} />
  </>
);

export default MyApp;
