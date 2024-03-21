import React, { useState } from 'react';
import Data from '/db.json'; // Importing the existing JSON data

const Update = ({data,setData}) => {
  // const [formData, setFormData] = useState({
  //   id: '',
  //   name: '',
  //   category: '',
  //   subcategory: '',
  //   createdAt: '',
  //   updatedAt: '',
  //   price: '',
  //   sale_price: ''
  // });
  // // console.log(Data.Data)
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newData = { ...formData };
  //   const updatedData = [...Data.Data, newData];// Adding the new data to the existing array
  //   localStorage.setItem('data', JSON.stringify(Data.Data)); // Storing the updated data in local storage
  //   alert('Data added successfully!');
  // };
  function handleSubmit(event) {
    event.preventDefault();
  
    const formdata = new FormData(event.target);
  
    // Do a bit of work to convert the entries to a plain JS object
    const value = Object.fromEntries(formdata.entries());
    setData([...data, value])
    // console.log(data)
    // console.log(value);
  }
  
  // const form = document.querySelector('form');
  // form.addEventListener('submit', handleSubmit);

  return (
    <div className='flex justify-center align-center flex-col h-screen w-screen'>
      <form onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" />

        <label For="category">Category:</label><br />
        <input type="text" id="category" name="category"  required /><br />
       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Update;
