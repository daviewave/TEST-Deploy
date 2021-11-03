import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import dynamic from 'next/dynamic';
import { FC, ReactNode } from 'react';
require('../styles/globals.css');
require('@solana/wallet-adapter-react-ui/styles.css');


//bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';


import type { AppProps } from 'next/app'

const WalletConnect = dynamic<{ children: ReactNode }>(
    () =>
        import('../components/walletConnect').then(
            ({ WalletConnectionProvider }) => WalletConnectionProvider
        ),
    {
        ssr: false,
    }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
  		<WalletConnect>
            <WalletModalProvider>
                <Component {...pageProps} />
            </WalletModalProvider>
        </WalletConnect>
    );
};

export default MyApp
