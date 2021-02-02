import React, { Component } from 'react';

export default class Matrix extends Component {

    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    changeColor = () => {
        // if (this.state.color == '#F00') {
        //     this.setState({
        //         color: '#00F'
        //     })
        // } else if (this.state.color == '#00F') {
        //     this.setState({
        //         color: '#F00'
        //     })
        // }
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
            <div className="cell" onClick={this.changeColor} style={{backgroundColor: this.state.color}}>

            </div>
        )
        //  onClick={this.state.color = '#333'} style={{backgroundColor: this.state.color}} />
    }

}