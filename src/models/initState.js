export default {
	state: {
		methods: ['Get', 'Post', 'Put', 'Delete'],
		selectedMethod: 'Get'
	},
	reducers: {
		selectedMethod(state, payload) {
			return {
				...state,
				selectedMethod: payload
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
		}
	})
};
