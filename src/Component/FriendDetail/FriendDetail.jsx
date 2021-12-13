import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const FriendDetail = () => {
  const { friendId } = useParams();

  const [friend, setFriend] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);

  return (
    <div>
      <h1> </h1>
      <h2>Hi i am : {friend.name}</h2>

      <h2>Call me : {friend.phone}</h2>
    </div>
  );
};

export default FriendDetail;
