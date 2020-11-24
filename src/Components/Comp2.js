import React from 'react'
import {connect} from 'react-redux'
import actionObj from '../reduxDir/Actions'

function Comp2(props) {
    return (
        <div style={{textAlign:'center'}}>
            <h1>No. of Ice-Creams: {props.numOfIceCreams}</h1>
            <button onClick={props.buyIceCreamHandler}>Buy</button>
            <p>Here: {props.reduxName}</p>
        </div>
    )
}

const mapStateToProps = reduxState => {
    //console.log(reduxState)
    return {
        numOfIceCreams : reduxState.iceCream.numOficeCreams,
        reduxName : reduxState.iceCream.reduxName
    }
}

const mapDispatchToProps = (dispatch,currentProps) => {
    //console.log(currentProps.name)
    return {
        buyIceCreamHandler : () => dispatch(actionObj.buyIceCream(currentProps.name))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Comp2)
