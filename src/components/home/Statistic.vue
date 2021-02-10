<template>
  <div class="statistic">
    <div class="statistic-icon">
      <i :class="icon" :style="style"></i>
    </div>

    <div class="statistic-info">
      <span class="statistic-title">{{ title }}</span>
      <span class="statistic-value">{{ value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "value", "icon", "color"],
  computed: {
    style() {
      return "color: " + (this.color || "#000");
    },
  },
};
</script>

<style>
.statistic {
  flex: 1;
  display: flex;
  border-radius: 8px;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1.5);
}

.statistic-icon {
  display: flex;
  align-items: center;
}

.statistic-icon i {
  font-size: 5rem;
}

.statistic-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.statistic-title {
  font-size: 1.2rem;
}

.statistic-value {
  font-size: 3rem;
}
</style>
