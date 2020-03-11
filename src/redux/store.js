import { createStore } from "redux";
import listGroupReducer from './reducers/listGroupReducer';

let store = createStore(listGroupReducer);
export default store;
