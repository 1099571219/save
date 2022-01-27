<template>
  <div class="wrapper" :class="classPreFix && `${classPreFix}-wrapper`">
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
@import "~@/assets/style/background.scss";

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  &::before {
      content: "";
      z-index: -1;
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 10rem;
      padding-top: 5rem;
      background-color: #55bc7e;
    }
  > .content {
    margin: $mainMargin;
    flex-grow: 1;
    $bg: #dcf1d6;
    
  }
  > Nav {
  }
}
.layout-content {
}
</style>
