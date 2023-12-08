import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function SupportForm() {
    const history = useHistory();

    //create local state for holding input value
    let [supportResult, setSupportResult] = useState('');

    const dispatch = useDispatch();

        //function to update local state with user input
        const handleInputChange = (event) => {
            setSupportResult(event.target.value)
        };

        const submitSupportInput = () => {
            console.log('support submit button', supportResult)
            dispatch({
                type: "SAVE_SUPPORT_INPUT",
                payload: supportResult
            })

            history.push("/comments")
        }
    
    return(
        <>
        <label>support</label>
            
            <input 
                data-testid="input" 
                type="number" 
                onChange={handleInputChange}>
            </input>

            <button 
                data-testid="next"
                onClick={submitSupportInput}
            >Next
            </button>

        </>
    )
}

export default SupportForm;