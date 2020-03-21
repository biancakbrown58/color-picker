import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    hue: Math.round(Math.random() * 360),
    saturation: Math.round(Math.random() * 100),
    light: Math.round(Math.random() * 100),
    value: Math.round(Math.random() * 100),
  }
  changeHue = e => {
    this.setState({
      hue: e.target.value,
    })
    console.log(e.target.value)
  }
  changeSaturation = e => {
    this.setState({
      saturation: e.target.value,
    })
  }
  changeLight = e => {
    this.setState({
      light: e.target.value,
    })
  }
  render() {
    const newColor = `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.light}%)`
    console.log(newColor)
    return (
      <>
        <section class="slidecontainer" style={{ backgroundColor: newColor }}>
          <ul>
            <li class="hue">
              H -
              <input
                type="range"
                min="1"
                max="360"
                onChange={this.changeHue}
                value={this.state.hue}
                class="slider"
              />
            </li>
            <li class="saturation">
              S -
              <input
                type="range"
                min="1"
                max="100"
                onInput={this.changeSaturation}
                value={this.state.saturation}
                class="slider"
              />
            </li>
            <li class="light">
              L -
              <input
                type="range"
                min="1"
                max="100"
                onInput={this.changeLight}
                value={this.state.light}
                class="slider"
              />
            </li>
          </ul>
        </section>
      </>
    )
  }
}

export default App
