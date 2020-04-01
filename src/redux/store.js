import {createStore, combineReducers} from 'redux'
import listReducer from './listReducer.js'
import inputReducer from './inputReducer.js'
const store = createStore(combineReducers({
// reducers
input: inputReducer ,
list: listReducer

})


)
export default store