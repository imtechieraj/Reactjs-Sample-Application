import * as redux from 'redux';

// Create a action
export const Increment = 'Increment';
export const Decrement = 'Decrement';

const intialState = {
    count: 0,
}

const reducer = (state = intialState, action) => {
    console.log(action)
    switch (action.type) {
        case Increment: {
            return { ...state, count: state.count + 1 }
        }
        case Decrement: {
            return { ...state, count: state.count - 1 }
        }
        default: {
            return state;
        }
    }
}

const store = redux.createStore(reducer);
export default store;
