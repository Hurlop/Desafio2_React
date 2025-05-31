import { Header } from './components/Header'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { RegistrationForm } from './components/RegistrationForm'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  
  return (
    <div className='font-title bg-slate-50'>
      <Header/>
      <main>
        <About/>
        <Gallery/>
        <RegistrationForm/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
