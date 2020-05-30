import React, { Component } from 'react'

 class ClassCountOne extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    
    componentDidMount() {
        console.log("componentDidMount")
       document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")
        document.title = `Clicked ${this.state.count} times`
    }
    
   componentWillUnmount() {
   }
    

    render() {
        return (
            <div>
                <button onClick = {() => {this.setState({count: this.state.count + 1 })}}> Click {this.state.count} times</button>
                <h2>{JSON.stringify(this.state.count)}</h2>
            </div>
        )
    }
}

export default ClassCountOne;
