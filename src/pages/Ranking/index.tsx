import React, { useEffect } from "react";
import RankingList from "../../components/RankingList";
import Header from "../../components/Header";
import { useStateValue } from "../../contextAPI/StateProvider";
import { actionTypes } from "../../contextAPI/reducer";
import api from "../../services/api";

import "./Ranking.scss";

const Ranking: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, dispatch] = useStateValue();

  useEffect(() => {
    // A página Ranking fica responsável por executar a função que requisita os dados
    api.get("matchboxbrasil.json").then((r) => {
      // E ao resolver a promise, despacha a action que salva a lista no state global
      dispatch({
        type: actionTypes.SAVE_RANKING_LIST,
        rankingList: r.data.data,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="Ranking">
      <Header title="ranking" />
      <RankingList />
    </section>
  );
};

export default Ranking;
