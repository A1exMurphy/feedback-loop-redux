import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function CommentsForm() {
    const cartContents = useSelector(store => store.commentsContents)
    const history = useHistory();

    //create local state for holding input value
    let [commentsResult, setCommentsResult] = useState('');

    const dispatch = useDispatch();

        //function to update local state with user input
        const handleInputChange = (event) => {
            setCommentsResult(event.target.value)
        };

        const submitCommentsInput = () => {
            console.log('comments submit button', commentsResult)
            dispatch({
                type: "SAVE_COMMENTS_INPUT",
                payload: commentsResult
            })

            history.push("/")
        }
    
    return(
        <>
        <label>comments</label>
            
            <input 
                data-testid="input" 
                type="number" 
                onChange={handleInputChange}>
            </input>

            <button 
                data-testid="next"
                onClick={submitCommentsInput}
            >Next
            </button>

        </>
    )
}

export default CommentsForm;