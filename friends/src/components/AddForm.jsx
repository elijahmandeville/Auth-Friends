import "./AddForm.scss";
import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function AddForm(props) {
  const [friend, setFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChanges = e => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", friend)
      .then(res => {
        console.log(res);
        props.getData();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Add a new Friend</h1>
      <form className="ui form add-form">
        <div className="field">
          <label> Name</label>
          <input
            type="text"
            name="name"
            placeholder="enter name"
            value={friend.name}
            onChange={handleChanges}
          />
        </div>
        <div className="field">
          <label>age</label>
          <input
            type="number"
            name="age"
            placeholder="enter age"
            value={friend.age}
            onChange={handleChanges}
          />
        </div>
        <div className="field">
          <label>email</label>
          <input
            type="email"
            name="email"
            placeholder="enter email"
            value={friend.email}
            onChange={handleChanges}
          />
        </div>
      </form>
      <button onClick={handleSubmit} className="data ui button" type="submit">
        Submit
      </button>
    </div>
  );
}

export default AddForm;
