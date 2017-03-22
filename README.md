# instateam

By Andrew Chan

## Quick start

1. `npm install`
2. `npm start`
3. Open a browser and go to `localhost:8080`

## Notes

* Click on the top right button to instantly populate your mock team with fake team members. :)
* State is used in several components to store UI state; never to store application state. There are several places where storing UI state in Redux would not only be unnecessary but un-performant and unwieldy. I.e. when considering user input for the team member search box, the underlying application data is not being changed by search queries (you aren't adding, updating, or deleting users when searching for them); the only thing changing is the UI being displayed, that is the selection of users being displayed. Hence that state is purely UI state and can be properly stored in React component state.
* Redux-thunk is used for action-chaining. This means some actions have "side effects".
