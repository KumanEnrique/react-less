import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            task:"soy una tarea en state"
        }
    }
    render() {
        return (
            <div>
    <h4>hola,soy un componente,{this.state.task}</h4>
            </div>
        )
    }
}
