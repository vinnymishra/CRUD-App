import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault(); 
  console.log("clicked");
  axios.post("https://6a4039c09b6d371e83818d36.mockapi.io/crud-youtube",
    {
    name: name, 
    email: email,
    phone: phone
    }
  )


    .then(() => {
      navigate("/read");
    });
};



    return (
    <>
    <div className="d-flex justify-content-between m-2">
    <h2>Create User</h2>
    <button className="btn btn-primary" onClick={() => navigate("/read")}>
      Show Data
    </button>
    </div>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control"
    onChange={(e) => setName(e.target.value)} />
  </div>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp"
    onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Phone Number</label>
    <input type="text" className="form-control"
    onChange={(e) => setPhone(e.target.value)} />
  </div>
  
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
    );
};
export default Create;
