import React from "react";
import "./ProfileCard.scss";
import { Profile } from "../../contextAPI/reducer";

const ProfileCard: React.FC<Profile> = ({
  picture,
  name,
  description,
  index,
}) => {
  const striped = Number(index) % 2 === 0;
  return (
    <div className={`ProfileCard ${striped && "ProfileCard--striped"}`}>
      <div className="ProfileCard-Avatar">
        <img src={picture} alt={name} />
        {/* Adicionando flexibilidade ao componente, exibir posição apenas se index estiver definido */}
        {index && <span>{index}</span>}
      </div>
      <div className="ProfileCard-Info">
        <strong>{name}</strong>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
