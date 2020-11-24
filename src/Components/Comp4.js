import React, { Component } from 'react'
import ReactTooltip from "react-tooltip";

export default class Comp4 extends Component {

    constructor() {
        super()

        this.state = {
            arr: ['apple', 'banana', 'oranges', 'papapya'],
            str: 'abcdefghijklmno'
        }
    }


    render() {
        let tpData = this.state.arr.map(data => {
            return(
                <p>{data}</p>
            )
        })

        return (
            <div>
                <h1 data-tip data-for="tip" style={{ color: 'white', textAlign: 'center' }}>Hover over me!!</h1>

                <ReactTooltip id="tip" place="bottom">
                {tpData}
                </ReactTooltip>

                <h2>{this.state.str.length > 4 ? this.state.str.slice(0,4) + '...' : this.state.str}</h2>

            </div>
        )
    }


}