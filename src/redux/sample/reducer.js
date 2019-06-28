import actions from "./actions";

const initState = {
	data: [],
	loading: false,
	error: null,
	message:null
};

export default (state = initState, action) => {
	switch (action.type) {
		case actions.SAMPLE_START:
			return {
				...state,
				loading: true,
				error: null,
				message: null,
			};

		case actions.SAMPLE_START_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				data: action.payload
			};

		case actions.SAMPLE_START_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error
			};
		default:
			return state;
	}
};
