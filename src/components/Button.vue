<template>
  <button class="button" @click="$emit('click', $event)"><slot /></button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.button {
  background-color: #55bc7e;
  border: none;
  height: 0.8rem;
  padding: 0 16px;
  color: #fff;
  border-radius: 10%;
  min-width: 4em;
  font-size: 0.4rem;

  &-wrapper {
    text-align: center;
    margin-top: 44px;
  }
}
</style>