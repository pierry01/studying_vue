import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMenuVisible: true,
    user: {
      name: "Jean Mendonça",
      email: "pierrybm@gmail.com",
    },
    categories: [
      { title: "Categoria 1" },
      { title: "Categoria 2" },
      { title: "Categoria 3" },
      { title: "Categoria 4" },
      { title: "Categoria 5" },
      { title: "Categoria 6" },
      { title: "Categoria 7" },
      { title: "Categoria 8" },
    ],
    articles: [
      { title: "Article 1" },
      { title: "Article 2" },
      { title: "Article 3" },
    ],
    users: [
      { name: "User 1", email: "user@1.com" },
      { name: "User 2", email: "user@2.com" },
    ],
  },
  mutations: {
    toggleMenu(state, isVisible) {
      if (isVisible === undefined) state.isMenuVisible = !state.isMenuVisible;
      else state.isMenuVisible = isVisible;
    },
  },
});
