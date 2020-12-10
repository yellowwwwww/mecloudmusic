import {applyMiddleware,createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers  from './reducers'
import state from './state'

const store = createStore(
    reducers,
    state,
    applyMiddleware(thunk)
)

export default store
