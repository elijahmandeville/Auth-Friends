import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "./AddForm.scss";

function AddForm(props) {
  const [friend, setFriend] = useState({ name: "", age: "", email: "" });

  const handleChange = e => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", friend)
      .then(res => {
        props.getData();
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Add a Friend</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={friend.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="number"
          name="age"
          value={friend.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <input
          type="email"
          name="email"
          value={friend.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
}

export default AddForm;
