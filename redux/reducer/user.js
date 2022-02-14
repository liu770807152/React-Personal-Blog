import { } from '../constant';

const initState = { userInfo: null };

export default function userReducer(preState = initState, { type, data }) {
	switch (type) {
		case 'changeUserInfo':
			return;
		default:
			return preState;
	}
}