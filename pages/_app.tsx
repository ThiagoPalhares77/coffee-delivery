import { Header } from '../components/Header'
import { CartContextProvider } from '../contexts/CartContext'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-[1120px] mx-auto">
      <CartContextProvider>
        <Header />
        <Component {...pageProps} />
      </CartContextProvider>
    </div>
  )
}
