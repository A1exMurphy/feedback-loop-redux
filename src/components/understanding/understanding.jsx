import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function UnderstandingForm() {
    const cartContents = useSelector(store => store.understandingContents)
    const history = useHistory();

    //create local state for holding input value
    let [understandingResult, setUnderstandingResult] = useState('');

    const dispatch = useDispatch();

        //function to update local state with user input
        const handleInputChange = (event) => {
            setUnderstandingResult(event.target.value)
        };

        const submitUnderstandingInput = () => {
            console.log('understanding submit button', understandingResult)
            dispatch({
                type: "SAVE_UNDERSTANDING_INPUT",
                payload: understandingResult
            })

            history.push("/support")
        }
    
    return(
        <>
        <label>understanding</label>
            
            <input 
                data-testid="input" 
                type="number" 
                onChange={handleInputChange}>
            </input>

            <button 
                data-testid="next"
                onClick={submitUnderstandingInput}
            >Next
            </button>

        </>
    )
}

export default UnderstandingForm;