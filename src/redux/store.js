import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';


const feelingInput = (state = "", action) => {
    if(action.type === "SAVE_FEELING_INPUT") {
        console.log(action.payload, "feelingResult")
        // axios(
        //     method: post,
        //     data: action.payload)
        return(
            state + action.payload
        )
    } return state;
}


const store = createStore(
    combineReducers({
        feelingInput,

    }),
    applyMiddleware(logger),
);


export default store;