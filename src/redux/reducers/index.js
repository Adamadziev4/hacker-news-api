import { combineReducers } from "redux";

import newsIdsListReducer from "./newsIdsList";
import commentsIdsListReducer from "./commentsIdsList";

const rootReducer = combineReducers({
  newsIdsList: newsIdsListReducer,
  commentsIdsList: commentsIdsListReducer,
});

export default rootReducer;
