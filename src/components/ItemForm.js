import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm( {onItemFormSubmit} ) {
  
  const [newItemName, setNewItemName] = useState("")
  const [newItemCategory, setNewItemCategory] = useState("Produce") 

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: newItemName,
      category: newItemCategory,
    }
    onItemFormSubmit(newItem);
    setNewItemName("");
    setNewItemCategory("Produce");
  }

  function handleNewItemName(e) {
    setNewItemName(e.target.value)
  }

  function handleNewItemCategory(e) {
    setNewItemCategory(e.target.value)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newItemName} onChange={handleNewItemName}/>
      </label>

      <label>
        Category:
        <select name="category" value={newItemCategory} onChange={handleNewItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
