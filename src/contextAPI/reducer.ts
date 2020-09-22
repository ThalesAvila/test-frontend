export interface Profile {
  __id: string;
  name: string;
  description: string;
  picture: string;
  positive: number | null;
  negative: number | null;
}

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
