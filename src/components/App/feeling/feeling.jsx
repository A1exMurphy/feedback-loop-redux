import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function FeelingForm() {
    const cartContents = useSelector(store => store.feelingContents)

    //create local state for holding input value
    let [feelingResult, setFeelingResult] = useState('');

    const dispatch = useDispatch();

        //function to update local state with user input
        const handleInputChange = (event) => {
            setFeelingResult(event.target.value)
        };

        const submitFeelingInput = () => {
            console.log('feeling submit button', feelingResult)
            dispatch({
                type: "SAVE_FEELING_INPUT",
                payload: feelingResult
            })
        }
    
    return(
        <>

            <input type="number" onChange={handleInputChange}></input>
            <button 
                onClick={submitFeelingInput}
            >Next
            </button>

        </>
    )
}

export default FeelingForm;