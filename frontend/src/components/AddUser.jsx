import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();

  const handleSubmitUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/crud_users", {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white p-3">
        <form onSubmit={handleSubmitUser}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter User Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Enter User Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <select
            className="form-select mb-3"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
