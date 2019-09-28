import React from "react";
import { Button } from 'reactstrap';

export default function PreviousButton (props) {

    return (
        <Button style ={{opacity: '0.9' }}color="secondary" size="lg" block onClick={() => {props.handlePreviousButton()}}>
            Previous
        </Button>
    )
}