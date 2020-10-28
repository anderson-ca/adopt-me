import React from "react";
import Pet from "./Pet.js";

const Results = ({ pets }) => {
  console.log(pets[0])
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>Oh hooman, such empty!</h1>
      ) : (
        pets.map(pet => (
          <Pet
            id={pet.id}
            key={pet.id}
            name={pet.name}
            animal={pet.type}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;