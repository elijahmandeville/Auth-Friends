import React from "react";
import faker from "faker";
import "./Friend.scss";

function Friend({ name, age, email }) {
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
      </div>
    </div>
  );
}

export default Friend;
