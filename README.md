# This is a simple flux implementation.
- main code in `src` folder
- The idea is that React will rerender its subcomponents lazily depending on the state of its parent components, so every time we dispatch an action, it will call the reducer, create a copy of the current state, perform the operation and return the new state.
- In this case, we wrap our main component with the `Capacitor` class in `flux.js`, which includes a built in `dispatcher`, which is passed into the main component as a prop.
- The dispatcher calls the action to Do (in the `action.js` file), which runs the reducer in (`reducer.js`) and modifies the store (the MAIN state tree).
- the store is also passed into the Main Component, which is a map that governs whatever needs to be rerendered.
- `index.js` is the main entry point.
Usage:
-`this.props.dispatcher('namespace.action')`
- add your action to `actions.js`
- hook it up with `reducers.js`
- let the app rerender. the logic to rerender should be in each subcomponent.

## Features:
- the dispatcher can also take an array of actions, which will rerender only once after the whole chain of actions are completed.
- `flux.js` has a composeActions method that allows you to combine other separate components with their own actions and reducers into the Main app if you so choose.

## Limitation:
- if you have an async action in an array of actions that need re-rendering, you will have to separate the chain and then dispatch the next action. e.g.:
```
this.props.dispatcher([
  'foo.action1',
  'foo.action2',
  'foo.asyncAction',
']).then(() =>{
  this.props.dispatcher('foo.actionAfterAsync')
})
```
# To Run:
- make sure your node version is up to date.
- run `npm install`
- for local dev server, run `npm run start`. The app should bundle and start the server with hot reloading @ `localhost:8080`
