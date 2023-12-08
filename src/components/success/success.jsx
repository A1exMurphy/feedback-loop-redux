import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function SuccessScreen() {
    const history = useHistory();


    const newFeedback = () => {

        history.push('/')
    }

    return(
        <>
            <h3>Successful Submission!</h3>
            <button onClick={newFeedback}>New Feedback</button>
        </>
    )
}


export default SuccessScreen;