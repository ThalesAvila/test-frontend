export interface Profile {
  __id: string;
  name: string;
  description: string;
  picture: string;
  positive: number | null;
  negative: number | null;
  index: number | null;
}

/* Optei por utilizar contextAPI para implementar a DataLayer da aplicação.
   Não havia necessidade porém, supondo um cenário em que tivessemos uma segunda rota "/profile"
   por exemplo. Ao ter uma única fonte de verdade com o state global, seria possível reutilizar o
   componente RankingList, já que sua responsabilidade é de exclusivamente ler o state global e renderizar
   os items correspondentes.
*/
export const initialState = {
  rankingList: [],
};

export type ACTIONTYPE = { type: "SAVE_RANKING_LIST"; rankingList: Profile[] };

export const actionTypes = {
  SAVE_RANKING_LIST: "SAVE_RANKING_LIST",
};

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "SAVE_RANKING_LIST":
      return {
        ...state,
        rankingList: [...action.rankingList].map((profile) => {
          profile.name = profile.name.split(" ").slice(0, 2).join(" ");
          return profile;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
