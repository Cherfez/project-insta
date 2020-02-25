import React, { useState } from "react";
import SASS from "../style/global.scss";

export default function Card() {
  const users = [
    {
      userName: "Julia",
      avatarPic: "https://media.nu.nl/m/m1mxrliau1t4_wd640.jpeg",
      postedPicture:
        "https://upload.wikimedia.org/wikipedia/commons/5/59/Regent%27s_Park_bandstand.jpg"
    },
    {
      userName: "Tony S.",
      avatarPic:
        "https://images.cdn.superguide.nl/8GQpIhdweaXQLTE_xOpsSKLZZ3c=/0x0:2000x1270/890x0/smart/superguide.nl/s3fs-public/main_media/avengers-iron-man.jpg?itok=VimKgK7k",
      postedPicture:
        "https://cdn.mos.cms.futurecdn.net/WifosGGPMBhMCVM3bvbrzf.jpg"
    }
  ];

  return (
    <div className="card">
      <div className="card-body">
        {users.map(user => {
          return (
            <div>
              <img src={user.avatarPic} className="avatar" alt="avatar" />
              <h3 className="userName">{user.userName}</h3>
              <img
                src={user.postedPicture}
                className="userPostedPic"
                alt="posted picture"
              />
            </div>
          );
        })}
      </div>
      <div className="card-body">
        <q>heart</q> <q>bubble</q> <q>share</q>
        <p>count of likes</p>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p>See all comments...</p>
        <p>Timestamp</p>
        <p>Add a comment....</p>
      </div>
    </div>
  );
}
