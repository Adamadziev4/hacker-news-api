const initialState = {
  newsIdsList: [],
};

const newsIdsList = (state = initialState, action) => {
  if (action.type === "newsIdsList/set") {
    return {
      newsIdsList: action.payload,
    };
  }

  return state;
};

export default newsIdsList;
