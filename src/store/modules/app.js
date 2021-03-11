const app = {
  state: {
		device: 'mobile',
	},
	mutations: {
	  SET_APP_DEVICE: (state, v) => {
			state.device = v
		},
	},
	actions: {
		SetAppDevice({commit}, v) {
			commit('SET_APP_DEVICE', v)
		}
  }
}

export default app