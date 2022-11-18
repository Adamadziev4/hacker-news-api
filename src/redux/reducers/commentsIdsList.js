const initialState = {
  commentsIdsList: [],
};

const commentsIdsList = (state = initialState, action) => {
  if (action.type === "commentsIdsList/set") {
    return {
      commentsIdsList: action.payload,
    };
  }

  return state;
};

export default commentsIdsList;
