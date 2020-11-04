import React from 'react';
import Counter from './Counter.jsx';

class ClassCounterApp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        commonCount: 0
      }
      this.takeAway = this.takeAway.bind(this)
      this.addOne = this.addOne.bind(this)
    }
  
    takeAway() {
      this.setState({commonCount: this.state.commonCount - 1})
      console.log(this.state.commonCount)
      
    }
    addOne() {
      this.setState({commonCount: this.state.commonCount + 1})
      console.log(this.state.commonCount)
    }
  
    render() {
      return (
        <div className="App">
        <h1>Counters with Class</h1>
        <Counter commonCount={this.state.commonCount}/>
        <Counter commonCount={this.state.commonCount}/>
        <Counter commonCount={this.state.commonCount}/>
        <button name="-all" onClick={this.takeAway}>Take Away 1</button>
        <button name="+all" onClick={this.addOne}>Add 1 to All</button>
      </div>
      )
    }
  }
  export default ClassCounterApp