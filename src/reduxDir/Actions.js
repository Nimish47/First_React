let actionObj = {

    fetchUsers : () => {
        console.log('enter')
        return dispatch => {
            dispatch(actionObj.fetchRequest())
            fetch('http://localhost:3069/JScoding')
            .then(res => res.json())
            .then(data => dispatch(actionObj.fetchSuccess(data)))
            .catch(err => dispatch(actionObj.fetchError(err.message)))
        }
    },

    buyCake: (counter = 1) => {
        return {
            type: 'BUY_CAKE',
            counter: counter
        }
    },

    buyIceCream: reduxName => {
        return {
            type: 'BUY_ICE_CREAM',
            reduxName: reduxName

        }
    },

    fetchRequest: () => {
        return {
            type: 'FETCH_USERS_REQUEST'
        }
    },

    fetchSuccess: data => {
        return {
            type: 'FETCH_USERS_SUCCESS',
            payload: data
        }
    },

    fetchError: data => {
        return {
            type: 'FETCH_USERS_ERROR',
            payload: data
        }
    }
}

export default actionObj