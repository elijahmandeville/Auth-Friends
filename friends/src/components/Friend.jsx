import React from "react";
import faker from "faker";
import "./Friend.scss";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function Friend({ name, age, email, id, getData }) {
  const deleteFriend = id => {
    axiosWithAuth()
      .delete(`/friends/${id}`)
      .then(res => {
        console.log(res.data);
        getData();
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="ui card">
      <div className="ui slide masked reveal image">
        <img className="visible content" src={faker.image.avatar()} alt="" />
        <img className="hidden content" src={faker.image.avatar()} alt="" />
      </div>
      <div className="content">
        <h1 className="header">{name}</h1>
      </div>
      <div className="meta">
        <p className="date">{age}</p>
        <p className="date">{email}</p>
        <button
          className="date ui button cardButton"
          onClick={() => deleteFriend(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Friend;
