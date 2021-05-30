export const state = () => ({
  isOpenSideBar: false,
})

export const mutations = {
  UPDATE_SIDEBAR_INFO(state, value) {
    state.isOpenSideBar = value
  },
}

export const actions = {
  updateSideBarInfo({ commit }, val) {
    commit('UPDATE_SIDEBAR_INFO', val)
  },
}
