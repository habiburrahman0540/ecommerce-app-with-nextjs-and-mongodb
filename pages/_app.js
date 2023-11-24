import '@/styles/globals.scss';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from "../store";
import { persistStore } from 'redux-persist';
import { SessionProvider } from "next-auth/react"
const persistor = persistStore(store);
export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return <>
        <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <SessionProvider session={session}>
             <Provider store={store}> 
              <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} />
              </PersistGate> 
           
              </Provider>
        </SessionProvider>
    </>
  
  
}
