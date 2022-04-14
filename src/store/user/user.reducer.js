import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
	currentUser: null,
};

// reducer function
export const userReducer = (state = INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload,
			};
		default:
			//need to return state here so react knows its using the wrong reducer so it leave it alone
			return state;
	}
};
