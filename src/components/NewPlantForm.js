import React, {useState} from "react";

function NewPlantForm({plants, setPlants}) {

  const URL = "http://localhost:6001/plants";

  const initialState = {
    name: "",
    image: "",
    price: "",
  }

  function handleChange(e){
    setFormState({...formState, [e.target.name]: e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault();

    let newPlantObj = {
      "name": formState.name,
      "image": formState.image,
      "price": formState.price
  };

  setPlants([...plants, newPlantObj])

  setFormState(initialState);
  }

  const [formState, setFormState] = useState(initialState);

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" value={formState.name} />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" value={formState.image}/>
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" value={formState.price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
