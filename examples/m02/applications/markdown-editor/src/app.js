'use strict'

import React, { Component } from 'react'

import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = { 
      value: '',
      texto: ''
    }

    this.handleSubmit = (e) => {
      e.preventDefault()

      this.setState({
        value: e.target.textarea.value
      })
    }
  }

  // Databind: configurado por arrow function
  capturaTextoDigitado = event => {
    this.setState({texto: event.target.value})
  }

  render () {
    return (
      <div className='editor'>
        <form onSubmit={this.handleSubmit}>
          <textarea name='textarea' onChange={this.capturaTextoDigitado}/>
          <button type='submit'>Renderizar markup</button>
        </form>

        <div className='view'>
          {this.state.value}
        </div>
        <div className='view'>
          {this.state.texto}
        </div>
      </div>
    )
  }
}

export default App
