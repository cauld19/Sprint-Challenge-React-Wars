import React from "react";
import { Button } from 'reactstrap';

export default function NextButton (props) {

    return (
        <Button style ={{marginTop: '10px' }} color="primary" size="lg" block onClick={() => {props.handleNextButton()}}>
            Next
        </Button>
    )
}