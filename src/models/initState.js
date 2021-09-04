export default {
	state: {
		methods: ['Get', 'Post', 'Put', 'Delete'],
		selectedMethod: 'Get',
		userHeaders: []
	},
	reducers: {
		selectedMethod(state, payload) {
			return {
				...state,
				selectedMethod: payload
			};
		},
		userInput(state, payload) {
			return {
				...state,
				userInput: payload || ''
			};
		},
		userHeaders(state, payload) {
			return {
				...state,
				userHeaders: payload || []
			};
		}
	},
	effects: (dispatch) => ({
		async setSelectedMethodAction(payload, rootState) {
			try {
				dispatch.initState.selectedMethod(payload);
			} catch (error) {
				console.log(error);
			}
		},
		async updateUserInputAction(payload, rootState) {
			try {
				dispatch.initState.userInput(payload);
			} catch (error) {
				console.log(error);
			}
		},
		async setUserHeadersAction(payload, rootState) {
			try {
				dispatch.initState.userHeaders(payload);
			} catch (error) {
				console.log(error);
			}
		}
	})
};
