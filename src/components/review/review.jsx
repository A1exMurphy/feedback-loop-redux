
import { useSelector } from "react-redux";
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

        }})
        history.push('/success')
    }

    return(
        <>
            <h2>review</h2>
            <button 
                data-testid="next"
                onClick={submitFeedback}>
                Submit
            </button>

            <h4>
                feeling: {userInput[0]}
            </h4>
                
            <h4>
                understanding: {userInput[1]}
            </h4>
                
             <h4>
                support: {userInput[2]}
            </h4>

            <h4>
                comments: {userInput[3]}
            </h4>
        </>
    )


}


export default ReviewInputs;