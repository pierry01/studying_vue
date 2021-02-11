<template>
  <aside class="menu" v-show="isMenuVisible">
    <div class="menu-filter">
      <i class="fa fa-search fa-lg"></i>
      <input
        type="text"
        placeholder="Digite para filtrar..."
        v-model="treeFilter"
        class="filter-field"
      />
    </div>

    <Tree
      :data="treeData"
      :options="treeOptions"
      :filter="treeFilter"
      ref="tree"
    />
  </aside>
</template>

<script>
import { mapState } from "vuex";
import Tree from "liquor-tree";

export default {
  computed: mapState(["isMenuVisible"]),
  components: { Tree },
  data() {
    return {
      treeFilter: "",
      treeData: this.getTreeData(),
      treeOptions: {
        propertyNames: { text: "title" },
        filter: { emptyText: "Categoria não encontrada..." },
      },
    };
  },
  methods: {
    getTreeData() {
      return this.$store.state.categories;
    },
  },
};
</script>

<style>
.menu {
  grid-area: menu;
  background: linear-gradient(to right, #232526, #414345);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.menu a,
.menu a:hover {
  color: #fff;
  text-decoration: none;
}

.menu .tree-node.selected > .tree-content,
.menu .tree-node .tree-content:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.tree-arrow.has-child {
  filter: brightness(2);
}

.menu .menu-filter {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid #aaa;
}

.menu .menu-filter i {
  color: #aaa;
  margin-right: 10px;
}

.menu input {
  color: #ccc;
  font-size: 1.2rem;
  border: 0;
  outline: none;
  width: 100%;
  background-color: transparent;
}

.tree-filter-empty {
  color: #ccc;
  margin-left: 20px;
  font-size: 1.2rem;
}
</style>
