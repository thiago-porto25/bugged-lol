import React, { useState, useEffect } from 'react'
import DataContext from './context/DataContext'

import Home from './pages/Home'
import Creating from './pages/Creating'
import Preview from './pages/Preview'

function App() {
  const [data, setData] = useState(undefined)
  const [currentCv, setCurrentCv] = useState(undefined)
  const [inHome, setInHome] = useState(true)
  const [inCreating, setInCreating] = useState(false)
  const [inPreview, setInPreview] = useState(false)

  useEffect(() => {
    const localData = localStorage.getItem('data')
    if (localData) {
      setData(localData)
    }
  }, [])

  return (
    <>
      <DataContext.Provider value={{ data, setData, currentCv, setCurrentCv }}>
        {inHome && (
          <Home
            setInHome={setInHome}
            setInCreating={setInCreating}
            setInPreview={setInPreview}
          />
        )}
        {inCreating && (
          <Creating
            setInHome={setInHome}
            setInCreating={setInCreating}
            setInPreview={setInPreview}
          />
        )}
        {inPreview && (
          <Preview
            setInHome={setInHome}
            setInCreating={setInCreating}
            setInPreview={setInPreview}
          />
        )}
      </DataContext.Provider>
    </>
  )
}

export default App
