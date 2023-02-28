import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Login from '../pages/login';

function MyApp({ Component, pageProps }: AppProps) {
  if (Component === Login) {
    return <Login {...pageProps} />;
  }
  return <Component {...pageProps} />;
}

export default MyApp;