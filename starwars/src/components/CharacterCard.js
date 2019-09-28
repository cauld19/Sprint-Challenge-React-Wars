import React from "react";

export default function CharacterCard(props) {

    return (
        <div className="character-card" key={props.name}>
            <h2>Name: {props.name}</h2>
            <p>Birth year: {props.birthYear}</p>
            <p>Height: {props.height}cm</p>
            <p>Mass: {props.mass}kg</p>
            <p>Films: {props.films}</p>    
        </div>
    )
}