import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Navigation } from './components/Navigation/Navigation'
import { Catalog } from './components/Catalog/Catalog'
import { Provider } from 'react-redux'
import { store } from './store'

export const App = () => {

  return (
    <Provider store={store}>
      <Header/>
      <main>
         <Navigation/>
         <Catalog />
      </main>
      <Footer/>
    </Provider>
      
  )
}

export default App
