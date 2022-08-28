import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Basket from './components/Basket'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header>Helllloo </Header>
     <div>
     <Main>Main</Main>
     <Basket>Basket</Basket>
      </div>
      <p className="read-the-docs">
      bl BLA BLA
      </p>
   
    </div>
  )
}

export default App
