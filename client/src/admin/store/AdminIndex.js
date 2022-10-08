import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/AdminIndexReducer";
import thunk from "redux-thunk";
//reducer
// import AdminIndexReducer from "../reducers/AdminIndexReducer";
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

