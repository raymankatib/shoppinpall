export default {
	state: {
		accountPageType: 'accountDetails'
	},
	reducers: {
		accountPageType(state, payload) {
			return {
				...state,
				accountPageType: payload
			};
		}
	},
	effects: (dispatch) => ({
		async setAccountPageTypeAction(payload, rootState) {
			try {
				dispatch.initState.accountPageType(payload);
			} catch (error) {
				// console.log(error)
			}
		},
		async timeoutAction(error) {
			console.log(error.message);
			if (error.code === 'ECONNABORTED') {
				return dispatch.notifications.note({ message: 'Somthing went wrong, request timeout!' });
			}
			if (error.message === 'Network Error') {
				return dispatch.notifications.note({ message: 'No server connection!' });
			}
		}
	})
};
