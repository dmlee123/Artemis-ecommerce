import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/firebase/reducer/reducer.utils";

// used to be dispatch function - replacing dispatch with createAction
// if not used createAction, most likely will have to import dispatch, etc
export const setCurrentUser = (user) => {
	return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
}
