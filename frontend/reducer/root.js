import sessionReducer from "./session_reducer"
import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer"
import errorsReducer from "./errors_reducer"

export default combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer
})