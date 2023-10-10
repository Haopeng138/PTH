import { React, useState, useEffect } from "react";
import { getAnimals } from "../service/Controller";

import "./Animals.css";

function Animals({ token }) {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        getAnimals(token).then((res) => {
            setAnimals(res.animalsImages);
        });
    });

    return (
        <div>
            <h2>Animales</h2>
            <div className="animal-container">
                {animals.map((animal) => (
                    <img src={animal} alt="animal" width="400" />
                ))}
            </div>
        </div>
    );
}

export default Animals;
