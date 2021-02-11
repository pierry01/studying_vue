import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMenuVisible: false,
    mode: "save",
    user: null,
    categories: [
      {
        id: "1",
        title: "Categoria 1",
        children: [
          { id: "1", title: "Article 1 - Categoria 1" },
          { id: "2", title: "Article 2 - Categoria 1" },
          { id: "3", title: "Article 3 - Categoria 1" },
        ],
      },
      {
        id: "2",
        title: "Categoria 2",
        children: [
          { id: "1", title: "Article 1 - Categoria 2" },
          { id: "2", title: "Article 2 - Categoria 2" },
          { id: "3", title: "Article 3 - Categoria 2" },
          { id: "4", title: "Article 4 - Categoria 2" },
          { id: "5", title: "Article 5 - Categoria 2" },
        ],
      },
      {
        id: "3",
        title: "Categoria 3",
        children: [
          { id: "1", title: "Article 1 - Categoria 3" },
          { id: "2", title: "Article 2 - Categoria 3" },
        ],
      },
      {
        id: "4",
        title: "Categoria 4",
        children: [
          { id: "1", title: "Article 1 - Categoria 4" },
          { id: "2", title: "Article 2 - Categoria 4" },
          { id: "3", title: "Article 3 - Categoria 4" },
          { id: "4", title: "Article 4 - Categoria 4" },
        ],
      },
    ],
    users: [
      {
        id: "1",
        name: "User 1",
        email: "user@1.com",
        admin: false,
        password: "123123",
        confirmPassword: "123123",
      },
      {
        id: "2",
        name: "User 2",
        email: "user@2.com",
        admin: false,
        password: "123123",
        confirmPassword: "123123",
      },
      {
        id: "3",
        name: "User 3",
        email: "user@3.com",
        admin: false,
        password: "123123",
        confirmPassword: "123123",
      },
      {
        id: "4",
        name: "User 4",
        email: "user@4.com",
        admin: true,
        password: "123123",
        confirmPassword: "123123",
      },
      {
        id: "5",
        name: "User 5",
        email: "user@5.com",
        admin: true,
        password: "123123",
        confirmPassword: "123123",
      },
      {
        id: "6",
        name: "User 6",
        email: "user@6.com",
        admin: false,
        password: "123123",
        confirmPassword: "123123",
      },
      {
        id: "7",
        name: "User 7",
        email: "user@7.com",
        admin: true,
        password: "123123",
        confirmPassword: "123123",
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
