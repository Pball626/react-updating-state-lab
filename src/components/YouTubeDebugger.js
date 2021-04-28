import React, { Component } from 'react'
export default class YouTubeDebugger extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    clickHandler = (e)=> {
        let newBitrate = this.state.bitrate = 12
        this.setState({
            settings: {
                bitrate: newBitrate
            }
        })
        console.log('clicked', newBitrate)
    }

    resChange = (e) => {
        // var someProperty = {...this.state.someProperty}
        let newRes = {...this.state.video, resolution: '720p'}
        this.setState({
            settings: {
                video: {
                    resolution: newRes
                }
            }
        })
        console.log('clicked', newRes)
    }

    render() {
        return (
            <button className={'bitrate'} onClick={this.clickHandler} className={'resolution'} onClick={this.resChange}
            ></button>
        )
    }
}