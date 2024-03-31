import './App.css'
import Message from './Components/Message'
import Navigation from './Components/Navigation'
import Portfolio from './Components/Portfolio'
import Skills from './Components/Skills'
import Summary from './Components/Summary'

function App() {

  return (
    <>
      <div className='parent'>
        <div className='child-left'>
          <Navigation />
        </div>
        <div id='portfolio-body'>
          <section>
            <Summary />
          </section>
          <section>
            <Portfolio />
          </section>
          <section>
            <Skills />
          </section>
          <section>
            <Message />
          </section>
        </div>
      </div>
    </>
  )
}

export default App
