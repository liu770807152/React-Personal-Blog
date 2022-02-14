/**
 * This function is used for creating action objects.
 * @returns action objects
 */
// introduce constants of types
// import { INCREMENT, DECREMENT } from '../constant';

const userInfoChangeAction = (data) => {
	return (dispatch) => {
		const action = {
			type: 'changeUserInfo',
			payload: data
		};
		dispatch(action);
	};
};

export {
	userInfoChangeAction
};