import * as types from "../constants/ActionTypes";
import { constructUrl, parseUrl } from "../utils/RouteUtils";

export function changePath(route) {
    return {
        type: types.CHANGE_PATH,
        route
    };
}

/*
Sets browser back buttons and history/route navigation to work with our app.
*/
export function initNav() {
    return dispatch => {
        window.onpopstate = e => {
            dispatch(navigateBack(e));
        };

        if (window.location.hash !== "") {
            dispatch(navigateTo(parseUrl(window.location.hash)));
        }
    }
}

export function navigateBack(event) {
    return dispatch => {
        // if there is a route to navigate back to, go back to that route.
        if (event.state) {
            return dispatch(navigateTo(event.state.route, false));
        }
        //no browser history! don't navigate to any page.
        return null;
    }
}

export function navigateTo(route, shouldPushState = true) {
    return (dispatch, getState) => {
        const { nav } = getState();
        //if already at the route we want to navigate to, do nothing
        if (constructUrl(route) === constructUrl(nav.route)) {
            return null;
        }

        //should add to browser history, so back button works?
        if (shouldPushState) {
            pushState(route);
        }

        return dispatch(changePath(route));
    }
}

export function navigateHome() {
    return dispatch => {
        dispatch(navigateTo({ path: ["team"] }));
    };
}

/*
Add a route to the browser history so the back button works properly.
*/
function pushState(route) {
    history.pushState({ route }, "", `#/${constructUrl(route)}`);
}
