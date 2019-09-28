import React from "react";
import { Button } from 'reactstrap';

export default function PreviousButton (props) {

    return (
        <Button color="secondary" size="lg" block onClick={() => {props.handlePreviousButton()}}>
            Previous
        </Button>
    )
}