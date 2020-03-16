import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import Loader from "react-loader-spinner";
import AddForm from "./AddForm";
import "./FriendList.scss";

function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getData();
  }, [setFriends]);

  const getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  };

  if (friends.length === 0) {
    return (
      <div className="key spinner">
        <Loader type="Puff" color="#204963" height="60" width="60" />
        <p>Loading Data</p>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <AddForm getData={getData} />
      <div className="friend-list">
        {friends.map((friend, index) => {
          return (
            <Friend
              name={friend.name}
              age={friend.age}
              email={friend.email}
              key={index}
              id={friend.id}
              getData={getData}
            />
          );
        })}
      </div>
      <h1>Content</h1>
    </div>
  );
}

export default FriendsList;
