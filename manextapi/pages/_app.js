import '@/styles/css/estilo.css'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Voltar from '@/components/Inicio'

export default function App({ Component, pageProps }) {
  return(
    <div>
      <Navbar/>
      <Component {...pageProps} />
      <Voltar/>
      <Footer/>
    </div>
  )
}
