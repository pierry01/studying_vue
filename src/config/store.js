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
      {
        id: "1",
        name: "User 1",
        email: "user@1.com",
        admin: true,
      },
      {
        id: "2",
        name: "User 2",
        email: "user@2.com",
        admin: false,
      },
      {
        id: "3",
        name: "User 3",
        email: "user@3.com",
        admin: false,
      },
      {
        id: "4",
        name: "User 4",
        email: "user@4.com",
        admin: true,
      },
      {
        id: "5",
        name: "User 5",
        email: "user@5.com",
        admin: true,
      },
      {
        id: "6",
        name: "User 6",
        email: "user@6.com",
        admin: false,
      },
    ],
  },
  mutations: {
    toggleMenu(state, isVisible) {
      if (isVisible === undefined) state.isMenuVisible = !state.isMenuVisible;
      else state.isMenuVisible = isVisible;
    },
  },
});
