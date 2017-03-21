import * as types from "../constants/ActionTypes";

const initialState = {
    isMobile: false,
    width: null,
    height: null
};

export default function env(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
