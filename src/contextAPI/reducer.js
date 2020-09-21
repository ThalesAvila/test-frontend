export const initialState = {
  rankingList: [],
};

export const actionTypes = {
  SAVE_RANKING_LIST: "SAVE_RANKING_LIST",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SAVE_RANKING_LIST:
      return { ...state, rankingList: action.rankingList };
    default:
      return state;
  }
};

export default reducer;
