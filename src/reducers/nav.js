import * as types from "../constants/ActionTypes";

const initialRoute = { path: ["team"] };
const initialState = { route: initialRoute };

export default function nav(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_PATH:
            return { ...state, route: action.route };
        default:
            return state;
    }
}
