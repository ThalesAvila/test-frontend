import React, { useEffect } from "react";
import "./RankingList.scss";
import { useStateValue } from "../../contextAPI/StateProvider";

const RankingList: React.FC = () => {
  const [{ rankingList }] = useStateValue();

  useEffect(() => {
    console.log("rankingList", rankingList);
  }, [rankingList]);

  return <div className="RankingList">RankingList</div>;
};

export default RankingList;
