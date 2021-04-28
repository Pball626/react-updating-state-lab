import React, { Component } from 'react'
export default class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }


    clickHandler = (e) => {
        let newClick = this.state.timesClicked + 1
        this.setState({
            timesClicked: newClick
        })
        console.log('clicked', newClick)
    }


    render() {
        return (
            <button label={'Bitrate Button'} onClick={this.clickHandler} label={'timesClicked'}
            ></button>
        )
    }
}
