<template>
  <div class="user-admin">
    <b-table hover striped :items="users" :fields="fields"> </b-table>
  </div>
</template>

<script>
// import axios from "axios";
import { mapState } from "vuex";

export default {
  computed: mapState(["users"]),
  data() {
    return {
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        {
          key: "admin",
          label: "Administrador",
          sortable: true,
          formatter: (value) => (value ? "Sim" : "Não"),
        },
        { key: "actions", label: "Ações" },
      ],
    };
  },
  // data() {
  //   return {
  //     mode: "save",
  //     user: {},
  //     users: [],
  //   };
  // },
  // methods: {
  //   loadUsers() {
  //    AXIOS
  //   },
  // },
  // mounted() {
  //   this.loadUsers();
  // },
};
</script>

<style></style>
