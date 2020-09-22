import React, { useEffect } from "react";
import "./RankingList.scss";
import ProfileCard from "../ProfileCard";
import { useStateValue } from "../../contextAPI/StateProvider";
import { Profile } from "../../contextAPI/reducer";

const RankingList: React.FC = () => {
  const [{ rankingList }] = useStateValue();

  useEffect(() => {
    console.log("rankingList", rankingList);
  }, [rankingList]);

  return (
    <div className="RankingList">
      {rankingList.map((el: Profile) => (
        <ProfileCard key={el.__id} {...el} />
      ))}
    </div>
  );
};

export default RankingList;
