import './App.css'
import Analysis from './Pages/Analysis'
import Home from './Pages/Home'

import { Routes , Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/analysis' element={<Analysis/>}/>
      </Routes>
    </>
  )
}

export default App
