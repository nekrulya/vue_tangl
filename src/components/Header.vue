<template>
  <header class="header">
    <div class="header__title">{{ headerTitle }}</div>
    <div class="header__exit">
      <button>Выйти</button>
    </div>
  </header>
</template>

<script>
export default {
  props: ["headerTitle"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.header {
  height: 30px;
  width: 100%;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
}
</style>
