import { } from '../constant';

const initState = { blogInfo: null };

export default function blogReducer(preState = initState, { type, data }) {
	switch (type) {
		case '':
			return;
		default:
			return preState;
	}
}