import React from "react";
import "./RankingList.scss";
import ProfileCard from "../ProfileCard";
import LikeabilityTooltip from "../LikeabilityTooltip";
import { useStateValue } from "../../contextAPI/StateProvider";
import { Profile } from "../../contextAPI/reducer";

// O componente de RankingList fica responsável por:
const RankingList: React.FC = () => {
  // 1. Ler o state global
  const [{ rankingList }] = useStateValue();

  // 2. Estilizar a lista do ranking
  return (
    <div className="RankingList">
      <div>
        {rankingList.map((profile: Profile, i: number) => (
          <LikeabilityTooltip {...profile} key={profile.__id}>
            <ProfileCard {...profile} index={i + 1} />
          </LikeabilityTooltip>
        ))}
      </div>
    </div>
  );
};

export default RankingList;
