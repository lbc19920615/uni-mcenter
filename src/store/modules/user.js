import {getToken, removeToken} from "@/utils/auth/token";

const user = {
	state: {
		token: getToken(),
	},
	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token
		},
	},

	actions: {
		// 前端 登出
		FedLogOut({
				commit
			}) {
			return new Promise(resolve => {
				commit('SET_TOKEN', '')
				removeToken()
				resolve()
			})
		}
	}
}

export default user
