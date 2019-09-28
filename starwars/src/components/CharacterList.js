import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard.js";
import axios from "axios";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton.js";
import { Container, Row } from "reactstrap";

export default function CharacterList() {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const handleNextButton = () => {
        setPage(page + 1)
        console.log(page);
    }

    function handlePreviousButton () {
        if (page === 1) {
            setPage(1)
        } else {
            setPage(page - 1);
        }
        console.log(page)
    }

    useEffect(() => {
    
        axios
          .get(`https://swapi.co/api/people/?page=${page}`)
          .then(result => {
              setData(result.data.results)
            console.log(result.data);
          })
          .catch(err => {
            console.log(err);
          });
    
      }, [page]);



    return (
        <Container>
            <Row>
                {data.map(data => {
                    return (
                        <CharacterCard 
                            name={data.name}
                            films={data.films.length}
                            birthYear={data.birth_year}
                            height={data.height}
                            mass={data.mass}
                            key={data.name}
                        />
                    );
                })}
            </Row>
            <NextButton 
                handleNextButton={handleNextButton}
            />
            <PreviousButton 
                handlePreviousButton={handlePreviousButton}
            />
        </Container>
    )
}