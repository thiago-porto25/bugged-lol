import React, { useState, useEffect } from 'react'
import DataContext from './context/DataContext'

function App() {
  const [data, setData] = useState(null)
  // useEffect(() => {
  // gets stuff from local storage and checks if there's data
  // if no data do nothing
  // if data setData(data)
  //})
  return (
    <>
      <DataContext.Provider value={{ data, setData }}>
        <div>Hello World</div>
      </DataContext.Provider>
    </>
  )
}

export default App
