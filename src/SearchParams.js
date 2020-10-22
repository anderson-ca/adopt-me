import React, { useState } from "react";

const SearchParams = () => {
    const [location, updateLocation] = useState("Austin, TX")

    return (
        <div className="search-params">
            <form action="">
                <label htmlFor="location">
                    Location
                    <input 
                    id="location" 
                    value={location} 
                    placeholder="Location"
                    onChange={event => updateLocation(event.target.value)}
                     />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default SearchParams;