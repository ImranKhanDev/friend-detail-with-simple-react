import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Friend.css";
const Friend = (props) => {
  const { id, name, email, website, phone } = props.friend;
  const url = `/friend/${id}`;
  const history = useHistory();

  const handleFriendClick = () => {
    history.push(`/friend/${id}`);
  };
  return (
    <div className="single-friend">
      <h1>This is single Friend</h1>
      <h1>I am : {name}</h1>
      <h2>Call me : {phone}</h2>
      <h2>
        Knock me at : {website} mail me : {email}
      </h2>
      <Link to={url}>visit me</Link>
      <br />
      <button onClick={handleFriendClick}>getknow</button>
    </div>
  );
};

export default Friend;
