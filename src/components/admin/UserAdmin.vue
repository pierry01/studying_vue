<template>
  <div class="user-admin">
    <b-form>
      <input type="hidden" id="user-id" v-model="user.id" />

      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Nome" label-for="user-name">
            <b-form-input
              id="user-name"
              type="text"
              v-model="user.name"
              :readonly="mode === 'remove'"
              placeholder="Informe o nome do usuário"
            >
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="E-mail" label-for="user-email">
            <b-form-input
              id="user-email"
              type="text"
              :readonly="mode === 'remove'"
              v-model="user.email"
              placeholder="Informe o e-mail do usuário"
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-form-checkbox
        v-show="mode === 'save'"
        id="user-admin"
        v-model="user.admin"
        class="mt-3 mb-3"
      >
        Administrador?
      </b-form-checkbox>

      <b-row v-show="mode === 'save'">
        <b-col md="6" sm="12">
          <b-form-group label="Senha" label-for="user-password">
            <b-form-input
              id="user-password"
              type="password"
              :readonly="mode === 'remove'"
              required
              placeholder="Informe a senha"
            >
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group
            label="Confirme a senha"
            label-for="user-confirm-password"
          >
            <b-form-input
              id="user-confirm-password"
              type="password"
              v-model="user.confirmPassword"
              required
              placeholder="Confirme a senha"
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-button variant="primary" v-if="mode === 'save'" @click="save">
        Salvar
      </b-button>

      <b-button variant="danger" v-if="mode === 'remove'" @click="remove">
        Excluir
      </b-button>

      <b-button class="ml-2" @click="reset">Cancelar</b-button>
    </b-form>
    <hr />
    <b-table hover striped :items="users" :fields="fields">
      <template slot="cell(actions)" slot-scope="data">
        <b-row>
          <b-col xs="12">
            <b-button
              variant="warning"
              @click="loadUser(data.item)"
              class="mr-2"
            >
              <i class="fa fa-pencil"></i>
            </b-button>

            <b-button variant="danger" @click="loadUser(data.item, 'remove')">
              <i class="fa fa-trash"></i>
            </b-button>
          </b-col>
        </b-row>
      </template>
    </b-table>
  </div>
</template>

<script>
// import axios from "axios";
// import { showError } from "@/global";
import { mapState } from "vuex";

export default {
  computed: mapState(["users", "user", "mode"]),
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
  methods: {
    loadUsers() {
      return this.$store.state.users;
    },
    loadUser(user, mode = "save") {
      this.$store.state.mode = mode;
      this.$store.state.user = user;
    },
    reset() {
      this.$store.state.mode = "save";
      this.$store.state.user = {};
      this.loadUsers();
    },
    save() {
      // const method = this.$store.state.user.id ? "put" : "post";
      // const id = this.$store.state.user.id
      //   ? `${this.$store.state.user.id}`
      //   : "";

      // PARA FINS DE ESTUDO, SÓ FUNCIONA O POST
      this.$store.state.users.push({
        id: this.$store.state.users.length + 1,
        name: this.user.name,
        email: this.user.email,
        admin: this.user.admin,
        password: this.user.password,
        confirmPassword: this.user.confirmPassword,
      });

      this.$toasted.global.defaultSuccess();
      this.reset();
      // PARA FINS DE ESTUDO, SÓ FUNCIONA O POST

      // const method = this.$store.user.id ? "put" : "post";
      // const id = this.user.id ? `${this.user.id}` : "";
      // axios[method](`${baseApiUrl}/users${id}`, this.user)
      //   .then(() => {
      //     this.$toasted.global.defaultSuccess();
      //     this.reset();
      //   })
      //   .catch(showError);
    },
    remove() {
      // const id = this.user.id;
      // axios
      //   .delete(`${baseApiUrl}/users/${id}`)
      //   .then(() => {
      //     this.$toasted.global.defaultSuccess();
      //     this.reset();
      //   })
      //   .catch(showError);
    },
    // loadUsers() {
    //   AXIOS;
    // },
  },
  // data() {
  //   return {
  //     mode: "save",
  //     user: {},
  //     users: [],
  //   };
  // },
  // mounted() {
  //   this.loadUsers();
  // },
};
</script>

<style></style>
