"use client"
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';
const inter = Inter({ subsets: ['latin'] })
import { PersistGate } from 'redux-persist/integration/react';

// export const metadata = {
//   title: 'Blog App',
//   description: 'Bilals Blog App',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      {children}
      </PersistGate>
      </Provider>
      <ToastContainer />
      </body>
    </html>
  )
}
