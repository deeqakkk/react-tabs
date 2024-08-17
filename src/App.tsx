import './App.css'
import { useState } from 'react'
import { headerDescription, tabHeading } from './constants'
import { HeadingLabel } from './defs'
import { Header } from './Header'
import { Footer } from './Footer'


function App() {
  const [currentTab, setCurrentTab] = useState<HeadingLabel>(tabHeading[0].label)
  const [currentTabDescription, setCurrentTabDescription] = useState<string[]>(headerDescription[currentTab])

  const onTabClick = (headingLabel: HeadingLabel) => {
    setCurrentTab(headingLabel)
    setCurrentTabDescription(headerDescription[headingLabel])
  }

  return (
    <div className='main-container'>
      <Header/>
      <h1>React Tabs</h1>
      <div className="card">
        {
          tabHeading.map(
            (heading, index) =>
              <button onClick={() => onTabClick(heading.label)} key={index}>
                {heading.value}
              </button>
          )
        }
      </div>
      <ul className="tabs-description">
        {currentTabDescription?.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <Footer/>
    </div>
  )
}

export default App
