import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: props.commonCount
        }
        this.handleClickMinus = this.handleClickMinus.bind(this)
        this.handleClickPlus = this.handleClickPlus.bind(this)
    }
   
    handleClickMinus() {
        this.setState({
            count: this.state.count - 1
        })
    }
    handleClickPlus() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
        <div>
            <h3>Counter {this.props.name}</h3>
           <button onClick={this.handleClickMinus}>-</button> 
           <span onChange={this.handleClickMinus, this.handleClickPlus}>   {this.state.count + this.props.commonCount}   </span>
           <button onClick={this.handleClickPlus}>+</button>
           <br/>
        </div>
        )
    }
}

export default Counter;