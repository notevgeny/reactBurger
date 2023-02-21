import Container from './components/Container/Container'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

export const App = () => {

  return (
    <>
      <Header/>
      <main>
        <nav>
          <Container className='navigation__container'/>
        </nav>
      </main>
      <Footer/>
    </>
      
  )
}

export default App
