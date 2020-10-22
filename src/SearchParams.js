import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, updateLocation] = useState("Austin, TX");
  const [animal, updateAnimal] = useState("Dog");
  const [breed, updateBreed] = useState("");
  const [breeds, updateBreeds] = useState([]);

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => updateLocation(event.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(event) => updateAnimal(event.target.value)}
            onBlur={(event) => updateAnimal(event.target.value)}
          >
            <option value="all">All</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            name="breed"
            id="breed"
            value={breed}
            onChange={(event) => updateBreed(event.target.value)}
            onBLur={(event) => updateBreed(event.target.value)}
          >
            <option value="all">All</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
