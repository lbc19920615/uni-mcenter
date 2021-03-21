const app = {
	namespaced: true,
  state: {
		device: 'mobile',
		theme: uni.getSystemInfoSync().theme,
	},
	mutations: {
	  SET_DEVICE: (state, v) => {
			state.device = v
		},
		SET_THEME: (state, v) => {
			state.theme = v
		},
	},
	actions: {
		SetDevice({commit}, v) {
			commit('SET_DEVICE', v)
		},
		SetTheme({commit}, v) {
			commit('SET_THEME', v)
		}
  }
}

export default app
