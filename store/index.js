const mutations = {
  SET_USER(state, user) {
    state.user = user
  }
}

const state = () => ({
  user: null
})


const actions = {
  async onAuthStateChangedAction(state, { authUser, claims }) {
    if (!authUser) {
      // remove state
      state.commit('SET_USER', null)

    } else {
      const { uid, email } = authUser
      state.commit('SET_USER', {
        uid,
        email,
      })
    }
  },
}



const getters = {
  getUser(state) {
    return state.user
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
}
