import React from 'react'
import './Completion.css'
import paymentComplete from './../paymentComplete.PNG'
function Completion() {

    //After completion of payment just return to homepage
    const ReturnToHome = () => {
        window.location.reload()
    }
    return (
        <div className="completionContainer">
            <img src={paymentComplete} alt={"Payment Done"} />
            <h>Payment Done</h>
            <div className="details">
                <h>You Paid 500 Rs </h>
            </div>
            <button type="button"
                onClick={ReturnToHome}
            >
                Return to home <i class="fas fa-home"></i></button>
        </div>
    )
}

export default Completion
