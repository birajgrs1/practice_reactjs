// Importing Redux
const redux = require('redux');

const INITIAL_VALUE = {
    counter: 0
};

// Reducer
// This function updates the state based on the action type.
const reducer = (store = INITIAL_VALUE, action) => {
    let newStore = store;
    if(action.type === 'INCREMENT'){
        newStore = {counter: store.counter+1};
    }
    else if(action.type === 'DECREMENT'){
        newStore = {counter: store.counter-1};

    }
    else if(action.type === 'ADDITION'){
        newStore = {counter: store.counter + action.payload.number};

    }
    
    return newStore;

};

// Store
// The store requires a reducer to manage state.
const store = redux.createStore(reducer);

// Subscriber
// This function will be called whenever the state is updated.
const subscriber = () => {
    const state = store.getState(); 
    console.log(state); 
};

store.subscribe(subscriber);

// Dispatch actions
store.dispatch({ type: 'INCREMENT' }); 
store.dispatch({ type: 'DECREMENT' }); 
store.dispatch({ type: 'INCREMENT' }); 
store.dispatch({ type: 'ADDITION', payload: {number: 8}}); 
store.dispatch({ type: 'INCREMENT' }); 
store.dispatch({ type: 'DECREMENT' }); 

/*
 We need to setup all 4 basic things:

1. Reducer
2. Store
3. Subscriber
4. Actions
*/

/*
Run using:
node demo_redux.js
*/
