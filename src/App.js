import Footer from "./components/Footer"
import Header from "./components/Header"
import Shop from "./components/Shop"
import {ToastContainer} from 'react-toastify'
import { ContextProvider } from "./context"

export default function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </div>
  )
}