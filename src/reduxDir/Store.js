import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'
//import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';


const Store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);


//const Store = createStore(rootReducer, applyMiddleware(logger))

export default Store

