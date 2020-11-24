const initialState = {
    numOficeCreams: 100,
    reduxName:''
}

const iceCreamReducer = (state = initialState, action) => {

    //console.log(action)
    switch (action.type) {
        case 'BUY_ICE_CREAM': return {
            ...state,
            numOficeCreams: state.numOficeCreams - 1,
            reduxName: action.reduxName
        }

        default: return state;
    }

}

export default iceCreamReducer