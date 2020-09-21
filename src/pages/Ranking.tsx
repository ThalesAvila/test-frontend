import React, { useEffect } from "react";
import RankingList from "../components/RankingList";
import { useStateValue } from "../contextAPI/StateProvider";

interface state {
  rankingList: string[];
}

const Ranking: React.FC = () => {
  const [{ rankingList }] = useStateValue();

  useEffect(() => {
    console.log(rankingList);
  }, [rankingList]);

  return (
    <section>
      <RankingList />
    </section>
  );
};

export default Ranking;
