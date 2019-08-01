import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'
import  thunk  from 'redux-thunk'
import logger from 'redux-logger'
const config=process.env.NODE_ENV==="develepment"
  ?applyMiddleware(thunk,logger): applyMiddleware(thunk)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
	config
));

export default store