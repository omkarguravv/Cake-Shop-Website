import { authConstants } from "../actions/constants";

const initialState = {
    name: 'omkar'

};

export default  (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state={
                ...state,
                ...action.payload
            }
            break;

    }
    return state;
}