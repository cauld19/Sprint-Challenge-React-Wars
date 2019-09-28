import React from "react";

export default function PreviousButton (props) {

    return (
        <div>
            <button className="next-button" onClick={() => {props.handlePreviousButton()}}>
            Previous Characters
            </button>
        </div>
    )
}