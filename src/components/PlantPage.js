import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const URL = "http://localhost:6001/plants"

  const [plants, setPlants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  let filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(searchInput.toLowerCase()))

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(obj => setPlants(obj))
    .catch(err => console.error(err));
  }, [])
  

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants}/>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <PlantList plants={filteredPlants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;
