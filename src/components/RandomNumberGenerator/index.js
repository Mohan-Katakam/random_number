// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onGenerateRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Random Number</h1>
          <p className="text">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="btn"
            onClick={this.onGenerateRandomNumber}
          >
            Generate
          </button>
          <h2 className="random-number">{number}</h2>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
