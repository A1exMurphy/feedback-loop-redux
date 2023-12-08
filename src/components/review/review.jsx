import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";



function ReviewInputs() {
    const userInput = useSelector(store => store.userInput)
    console.log(userInput, "userInput")

    const history = useHistory();


    const submitFeedback = () => {axios({
        method: "POST",
        url: '/feedback',
        data: {
            feeling: userInput[0],
            understanding: userInput[1],
            support: userInput[2],
            comments: userInput[3]

        }
})}

    return(
        <>
            <button onClick={submitFeedback}>
                Submit
            </button>
        </>
    )


}


export default ReviewInputs;