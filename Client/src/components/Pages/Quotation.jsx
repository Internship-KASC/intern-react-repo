import React, { useState } from "react";
import Data from "./QuotationData.json";
import "./Quotation.css";

function Quotation() {
  const [data, setData] = useState(Data);
  return (
    <>
      <div className='formBox'>
        <div className='form-input'>
          <AddItem setData={setData} />
          <table>
            <thead>
              <th>S.no</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Unit Cost</th>
              <th>Action</th>
            </thead>
            {data.map((current) => (
              <tr>
                <td>{current.sno}</td>
                <td>{current.Item}</td>
                <td>{current.Quantity}</td>
                <td>{current.UnitCost}</td>
                <td>
                  <button className='edit-button'>Edit</button>
                  <button className='delete-button'>Delete</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

function AddItem(setData) {
  function handelValues(event) {
    event.preventDefault();
    const VendorName = event.target.elements.VendorName.value;
    const Item = event.target.elements.Item.value;
    const Quantity = event.target.elements.Quantity.value;
    const UnitCost = event.target.elements.UnitCost.value;
    const newItem = {
      id: 4,
      VendorName,
      Item,
      Quantity,
      UnitCost,
    }
    setData(prevData => prevData.concat(newItem))
  }
  return (
    <form className='form-quote' onSubmit={handelValues}>
      <input
        type='text'
        name='VendorName'
        placeholder='Enter the Vendor name'
      />
      <input type='text' name='Item' placeholder='Enter Item Name' />
      <input type='number' name='Quantity' placeholder='Enter Quantity' />
      <input type='number' name='UnitCost' placeholder='Enter Cost per Unit' />
      <button type='submit'>Add Item</button>
    </form>
  );
}

export default Quotation;




---------------------------------------working code--------------------------------------

import React, { useState } from "react";

function QuotationForm() {
  // Initialize state variables for form values
  const [vendorName, setVendorName] = useState("");
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

  // Initialize state variable for the list of items
  const [items, setItems] = useState([]);

  // Event handler for adding an item to the list
  const handleAddItem = () => {
    // Create a new item object
    const newItem = { itemName, quantity, unitPrice };
    // Add the new item to the list
    setItems([...items, newItem]);
    // Clear the item input fields
    setItemName("");
    setQuantity("");
    setUnitPrice("");
  };

  // Event handler for submitting the form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new quotation object with the form values and item list
    const newQuotation = { vendorName, items };
    console.log(newQuotation); // Replace with your submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Vendor Name:
        <input
          type='text'
          value={vendorName}
          onChange={(event) => setVendorName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Item Name:
        <input
          type='text'
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
      </label>
      <label>
        Quantity:
        <input
          type='number'
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
      </label>
      <label>
        Unit Price:
        <input
          type='number'
          value={unitPrice}
          onChange={(event) => setUnitPrice(event.target.value)}
        />
      </label>
      <button type='button' onClick={handleAddItem}>
        Add Item
      </button>
      <br />
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.itemName}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button type='submit'>Create Quotation</button>
    </form>
  );
}

export default QuotationForm;
