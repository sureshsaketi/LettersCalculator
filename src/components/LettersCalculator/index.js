// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputTextCount: 0}

  onChangeInput = event => {
    this.setState({inputTextCount: event.target.value.length})
  }

  render() {
    const {inputTextCount} = this.state
    return (
      <div className="container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="letters-calculator-img"
            alt="letters calculator"
          />
        </div>
        <div className="text-container">
          <h1>Calculate the Letters you enter</h1>
          <div>
            <label htmlFor="phrase-box">Enter the phrase</label>
            <br />
            <input type="text" id="phrase-box" onChange={this.onChangeInput} />
          </div>
          <p className="char-count">No.of letters: {inputTextCount}</p>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
