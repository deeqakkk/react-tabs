import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import { headerDescription, tabHeading } from './constants'
import { HeadingLabel } from './defs'


function App() {
  const [currentTab, setCurrentTab] = useState<HeadingLabel>(tabHeading[0].label)
  const [currentTabDescription, setCurrentTabDescription] = useState<string[]>(headerDescription[currentTab])

  const onTabClick = (headingLabel: HeadingLabel) => {
    setCurrentTab(headingLabel)
    setCurrentTabDescription(headerDescription[headingLabel])
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
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
        {
          currentTabDescription?.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
    </>
  )
}

export default App
