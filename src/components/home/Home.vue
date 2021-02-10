<template>
  <div class="home">
    <PageTitle icon="fa fa-home" main="Dashboard" sub="Base de Conhecimento" />

    <div class="statistics">
      <Statistic
        title="Categorias"
        icon="fa fa-folder"
        color="#d54d50"
        :value="categories.length"
      />

      <Statistic
        title="Artigos"
        icon="fa fa-file"
        color="#3bc480"
        :value="articles.length"
      />

      <Statistic
        title="Usuários"
        icon="fa fa-user"
        color="#3282cd"
        :value="users.length"
      />
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import Statistic from "./Statistic";
import { mapState } from "vuex";
// import axios from "axios";

export default {
  components: { PageTitle, Statistic },
  computed: mapState(["categories", "articles", "users"]),
  // methods: {
  //   getStatistics() {
  //     axios.get("/statistics").then((res) => (this.statistic = res.data));
  //   },
  // },
  // mounted() {
  //   this.getStatistics();
  // },
};
</script>

<style>
.statistics {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
