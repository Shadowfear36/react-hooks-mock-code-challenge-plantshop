import React, {useState} from "react";

function PlantCard({id, name, image, price, plants, setPlants}) {

  const [inStock, setInStock] = useState(true);

  const [editPrice, setEditPrice] =useState("");

  function handleClick(){
    setInStock(!inStock);
  }

  function handleDelete(){
    setPlants(plants.filter(plant => plant.name !== name))

    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .catch(err => console.log(err));

  }

  function handleEditPrice(e) {
    setEditPrice(e.target.value)
  }

  function submitPrice(e) {
    e.preventDefault();
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "price": editPrice
      })
    })
    .then(res => res.json())
    .catch(err => console.log(err));
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <form onSubmit={submitPrice}>
      <input
      type= "text"
      id="edit"
      placeholder="Edit Price"
      value = {editPrice}
      onChange={handleEditPrice}
      ></input>
      <button>Submit New Price</button>
      </form>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
