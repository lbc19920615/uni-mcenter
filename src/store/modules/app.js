const app = {
	namespaced: true,
  state: {
		device: 'mobile',
	},
	mutations: {
	  SET_DEVICE: (state, v) => {
			state.device = v
		},
	},
	actions: {
		SetDevice({commit}, v) {
			commit('SET_DEVICE', v)
		}
  }
}

export default app