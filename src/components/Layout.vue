<template>
  <div class="layout-wrapper" :class="classPreFix && `${classPreFix}-wrapper`">
    <div class="content" :class="classPreFix && `${classPreFix}-content`">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
export default {
  name: "layout",
  props: ["classPreFix"],
};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-bottom:0.58rem;
}
.content {
  flex-grow: 1;
}
</style>
