import GetData from "../api/api";

export const namespaced = true;
// this is our state  for reducer
export const state = {
  coins: [],
};

/// this is our reducer
export const mutations = {
  ADD_DATA(state, Payload) {
    state.coins = Payload;
  },
};

export const actions = {
  getData({ commit }) {
    console.log("clicked")
    GetData()
      .then((data) => {
        console.log("from :", data);
        commit("ADD_DATA", data);
      })
      .catch((e) => console.log(e));
  },
};
