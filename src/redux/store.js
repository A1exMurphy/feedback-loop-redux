import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';



const userInput = (state = [], action) => {

    if(action.type === "SAVE_FEELING_INPUT") {
        console.log(action.payload, "feelingResult")

        return(
            [...state, action.payload]
        )
    }
    if(action.type === "SAVE_UNDERSTANDING_INPUT") {

        return(
            [...state, action.payload]
        )
    }
    if(action.type === "SAVE_SUPPORT_INPUT") {

        return(
            [...state, action.payload]
        )
    }
    if(action.type === "SAVE_COMMENTS_INPUT") {

        return(
            [...state, action.payload]
        )
    }
    return state;
}


const store = createStore(
    combineReducers({
        userInput,

    }),
    applyMiddleware(logger),
);


export default store;