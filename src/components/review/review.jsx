import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

let feedback = {};


function ReviewInputs() {
    const userInput = useSelector(store => store.userInput)
    console.log(userInput, "userInput")

    const history = useHistory();


    // axios(
    //     method: "POST",
    //     url:,
    //     data: {
    //         feeling: userInput[0],
    //         understanding: userInput[1],

    //     }
    // )
}


export default ReviewInputs;