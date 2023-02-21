import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Navigation } from './components/Navigation/Navigation'
import { Catalog } from './components/Catalog/Catalog'

export const App = () => {

  return (
    <>
      <Header/>
      <main>
         <Navigation/>
         <Catalog />
      </main>
      <Footer/>
    </>
      
  )
}

export default App
