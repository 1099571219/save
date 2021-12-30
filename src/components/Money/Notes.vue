<template>
  <label class="notes">
    {{ value }}
    <span class="name">备注</span>
    <input
      type="text"
      :value="value"
      @input="onInput"
      placeholder="在这里输入备注"
    />
  </label>
</template>

<script lang = 'ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class notes extends Vue {
  value = "";
  onInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    this.value = input.value;
  }
}
</script>

<style lang="scss" scoped>
.notes {
  display: flex;
  padding: 25px 0;
  background-color: #dcf1d6;
  align-items: center;

  > .name {
    color: #333;
    font-size: 14px;
    padding: 0 16px;
  }
  input {
    flex-grow: 1;
    background: transparent;
    border: none;
    color: #666;
  }
}
</style>