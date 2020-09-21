import React, { useEffect } from "react";
import RankingList from "../components/RankingList";
import { useStateValue } from "../contextAPI/StateProvider";
import { actionTypes } from "../contextAPI/reducer";

import api from "../services/api";

const Ranking: React.FC = () => {
  const [_, dispatch] = useStateValue();

  useEffect(() => {
    api.get("matchboxbrasil.json").then((r) => {
      dispatch({
        type: actionTypes.SAVE_RANKING_LIST,
        rankingList: r.data.data,
      });
    });
  }, []);

  return (
    <section>
      <RankingList />
    </section>
  );
};

export default Ranking;
