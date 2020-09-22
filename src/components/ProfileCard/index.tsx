import React from "react";
import "./ProfileCard.scss";
import { Profile } from "../../contextAPI/reducer";

const ProfileCard: React.FC<Profile> = ({ picture, name, description }) => {
  return (
    <div className="ProfileCard">
      <div className="ProfileCard-Avatar">
        <img src={picture} alt="" />
        <span>1</span>
      </div>
      <div className="ProfileCard-Info">
        <strong>{name}</strong>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
