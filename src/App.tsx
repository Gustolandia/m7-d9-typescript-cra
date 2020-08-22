import React from 'react'
import Header from './components/Header2'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div style={{color:"coral",backgroundColor: "black", height:"1000px", position:"absolute", top:"0", width:"100%"}}>
      <Router>
            <Route path="/" exact render={(routerProps) => <Header {...routerProps} title="title!" subTitle="asdsad" />}
            />
      </Router>
    </div>
  )
}

export default App
