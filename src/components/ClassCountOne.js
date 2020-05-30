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
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")
    }
    
   componentWillUnmount() {
       console.log("componentWillUnmount")
   }
    

    render() {
        console.log("Render")
        return (
            <div>
                <button onClick = {() => {this.setState((previous) =>({...previous, count: this.state.count + 5}))}}> Change Count</button>
                <h2>{JSON.stringify(this.state.count)}</h2>
            </div>
        )
    }
}

export default ClassCountOne;
