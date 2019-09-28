import React from "react";

export default function NextButton (props) {

    return (
        <div>
            <button className="next-button" onClick={() => {props.handleNextButton()}}>
            Next Button
            </button>
        </div>
    )
}