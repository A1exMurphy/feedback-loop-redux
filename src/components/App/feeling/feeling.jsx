import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function FeelingForm() {
    const cartContents = useSelector(store => store.feelingContents)

    //create local state for holding input value
    let [feelingResult, setFeelingResult] = useState('');

    const dispatch = useDispatch();

        //function to update local state with user input
        const handleInputChange = (target) => {
            setFeelingResult(event.target.value)
        };

    
    return(
        <>
            {/* <form> */}
            <input></input>
            {/* </form> */}
        </>
    )
}

export default FeelingForm;