import {combineReducers} from 'redux'
import cakeReducer from './reducers/cakeReducer'
import iceCreamReducer from './reducers/iceCreamReducer'
import reduxReducer from './reducers/reduxReducer'


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    reduxReducer: reduxReducer
})


export default rootReducer