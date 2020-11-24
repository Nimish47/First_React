import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionObj from '../reduxDir/Actions'


class Comp3 extends Component {

    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.props.fetchUsers()
    }

    componentDidUpdate() {
        console.log(this.props)
        //this.setState({state: this.props.users})
    }

    render() {
        
          let val = this.props.loading ? 'Loading' : (
                this.props.users.map( data=> {
                    return (
                        <h1 key={data.id}>
                        {data.question}
                        </h1>
                    )
                })  
            )
        

        return (
            <div>
                {val}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        users: reduxState.reduxReducer.users,
        loading: reduxState.reduxReducer.loading
    }
}

const mapDispatchToProps = (dispatch, currentProps) => {
    //console.log(currentProps)
    console.log('abs')
    return {
        fetchUsers: () => dispatch(actionObj.fetchUsers())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Comp3)