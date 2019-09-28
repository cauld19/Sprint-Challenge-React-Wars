import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard.js";
import axios from "axios";

export default function CharacterList() {

    const [data, setData] = useState([]);

    useEffect(() => {
    
        axios
          .get(`https://swapi.co/api/people/`)
          .then(result => {
              setData(result.data.results)
            console.log(result.data.results);
          })
          .catch(err => {
            console.log(err);
          });
    
      }, []);



    return (
        <div>
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
        </div>
    )
}