import { Header } from '../components/Header'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-[1120px] mx-auto">
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
