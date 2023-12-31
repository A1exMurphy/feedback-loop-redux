
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function SuccessScreen() {
    const history = useHistory();


    const newFeedback = () => {

        history.push('/')
    }

    return(
        <>
            <h1>Thank You!</h1>
            <h3>You have made a feedback submission!</h3>
            <button 
                data-testid="next"
                onClick={newFeedback}>
                    New Feedback
            </button>
        </>
    )
}


export default SuccessScreen;