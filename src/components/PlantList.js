import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants}) {

  const renderPlants = plants.map(plant => (
      <PlantCard key={plant.id} id={plant.id} name={plant.name} image={plant.image} price={plant.price} plants={plants} setPlants={setPlants}/>
  ))

  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
