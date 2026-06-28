import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

useEffect(() => {
        axios
            .get(`https://6a4039c09b6d371e83818d36.mockapi.io/crud-youtube/${id}`)
            .then((res) => {
                setName(res.data.name);
                setEmail(res.data.email);
                setPhone(res.data.phone);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`https://6a4039c09b6d371e83818d36.mockapi.io/crud-youtube/${id}`, {
                name: name,
                email: email,
                phone: phone
            })
            .then(() => {
                navigate("/read");
            });
    }
  return (
    <>
    <h2>Update</h2>
      <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" value={name}
   onChange={(e) => setName(e.target.value)} 
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Phone</label>
    <input type="text" className="form-control" value={phone}
    onChange={(e) => setPhone(e.target.value)}
    />
  </div>
  
  
  <button type="submit" className="btn btn-primary">Update</button>
</form>
    </>
  )
}

export default Update;