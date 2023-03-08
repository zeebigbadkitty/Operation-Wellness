import React, { useState, useEffect } from "react";
import axios from "axios";

function DrugSearch() {
  const [drugs, setDrugs] = useState([]);
  const [selectedDrug, setSelectedDrug] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch drug data from MongoDB
    axios
      .get("mongodb://127.0.0.1:27017/drugsDB/drugs")
      .then((response) => setDrugs(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDrugSelect = (drug) => {
    setSelectedDrug(drug);
    setSearchTerm("");
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleAddDrug = (event) => {
    event.preventDefault();
    
    setMessage(`Added ${selectedDrug} to user ${userId}`);
  };

  
  const filteredDrugs = drugs.filter((drug) =>
    drug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Drug Search</h1>
      <form onSubmit={handleAddDrug}>
        <label htmlFor="search">Search for a drug:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <ul>
          {filteredDrugs.map((drug, index) => (
            <li key={index} onClick={() => handleDrugSelect(drug)}>
              {drug}
            </li>
          ))}
        </ul>
        <label htmlFor="userId">User ID:</label>
        <input type="text" id="userId" onChange={handleUserIdChange} />
        <button type="submit" disabled={!selectedDrug}>
          Add Drug
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DrugSearch;