import { createStore } from "vuex";
import * as fromApi from "./fetchFromApi";
export default createStore({
  modules: {
    fromApi,
  },
  state: {
  },
});
