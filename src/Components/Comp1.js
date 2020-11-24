import React,{useState} from 'react'
import {connect} from 'react-redux'
import actionObj from '../reduxDir/Actions'

function Comp1(props) {

    const [cakeBuy, setCakeBuy] = useState()

    return (
        <div style={{textAlign:'center'}}>
            <h1>No. of cakes: {props.numOfCakes}</h1>
            <input type = 'number' value = {cakeBuy} onChange = {(e)=> setCakeBuy(e.target.value)} />
            <button onClick={()=> {props.buyCakeHandler(cakeBuy)}}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (reduxState, currentProps) => {
    //console.log(currentProps)
    return {
        numOfCakes : reduxState.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {

    //console.log(currentProps)

    return {
        buyCakeHandler : counter => dispatch(actionObj.buyCake(counter))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Comp1)
