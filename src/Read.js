import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {

    const [data, setData] = useState([]);

function getData(){
    axios
    .get("https://6a4039c09b6d371e83818d36.mockapi.io/crud-youtube")
    .then((res) => {
        console.log(res.data);
        setData(res.data);
});
}

function handleDelete(id){
    console.log("Delete clicked", id);
    axios
    .delete(`https://6a4039c09b6d371e83818d36.mockapi.io/crud-youtube/${id}`)
    .then(() => {
        getData();
    })
    .catch((err) => {
        console.log(err);
    });
}

 useEffect(() => {
    getData();
 }, []);

  return (
  <>
  <h2>Read operation</h2>

<div className="d-flex justify-content-end mb-3">
      <Link to="/create">
        <button className="btn btn-secondary">
          Create
        </button>
      </Link>
    </div>

<table className="table table-striped table-hover table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name of the person</th>
      <th scope="col">Email ID</th>
      <th scope="col">Phone Number</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {
     data.map((eachData) => {
        return (
            <>
            
    <tr key={eachData.id}>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
      <td>{eachData.phone}</td>
      <td>
        <Link to={`/update/${eachData.id}`}>
        <button className ="btn btn-success">Edit</button>
        </Link>
      </td>
      <td><button className ="btn btn-danger" onClick={() => handleDelete(eachData.id)}>Delete</button>
      </td>
    </tr> 
            </>
        );
        })
  }
  </tbody>
</table>
  </>  
  );
};

export default Read;