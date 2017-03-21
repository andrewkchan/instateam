import { combineReducers } from "redux";
import env from "../reducers/env";
import nav from "../reducers/nav";
import team from "../reducers/team";

const rootReducer = combineReducers({
    env,
    nav,
    team
});

export default rootReducer;
