import { useEffect, useState } from 'react'
import './App.css'
import Message from './Components/Message'
import Navigation from './Components/Navigation'
import Portfolio from './Components/Portfolio'
import Skills from './Components/Skills'
import Summary from './Components/Summary'


function App() {

  const sectionObject = {
    summary: <Summary />,
    portfolio: <Portfolio />,
    skills: <Skills />,
    message: <Message />
  }

  const [screenToDisplay, setScreenToDisplay] = useState(sectionObject.summary);

  const display = (response: string) => {
    switch (response) {
      case 'portfolio':
        setScreenToDisplay(sectionObject.portfolio);
        break;
      case 'skills':
        setScreenToDisplay(sectionObject.skills);
        break;
      case 'message':
        setScreenToDisplay(sectionObject.message);
        break;
      default:
        setScreenToDisplay(sectionObject.summary);
        break;
    }
  };

  useEffect(() => {

  }, [screenToDisplay])


  return (
    <>
      <div className='wrapper'>
        <aside className='navigation-container'>
          <Navigation display={display} />
        </aside>
        <main id='portfolio-body' className='main-container'>
          <section>
            {screenToDisplay}
          </section>
        </main>
      </div>
    </>
  )
}

export default App
