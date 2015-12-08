// app/components/app.jsx
import React, { Component } from 'react'
import Game from './game.jsx!'
import Square from './square.jsx!'

class App extends Component {

  render () {
    return <div>App!
    <Game />
    </div>
  }
}

export default App