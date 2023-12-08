import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function FeelingForm() {

    const history = useHistory();

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
            //to navigate to the next page use useHistory here
            history.push("/understanding")
        }
    
    return(
        <>
        <label>feeling</label>
            
            <input 
                data-testid="input" 
                type="number" 
                onChange={handleInputChange}>
            </input>

            <button 
                data-testid="next"
                onClick={submitFeelingInput}
            >Next
            </button>

        </>
    )
}

export default FeelingForm;