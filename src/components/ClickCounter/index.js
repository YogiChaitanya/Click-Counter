// Write your code here

import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncreament = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1>
          The Button has been clicked
          <span className="count">{count}</span>
          times
        </h1>
        <p>Click the button to increase the count!</p>
        <button className="button" onClick={this.onIncreament}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default Counter
