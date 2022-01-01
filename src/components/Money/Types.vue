<template>
  <ul class="types">
    <li :class="value === '-' && 'selected'" @click="selectType('-')">支出</li>
    <li :class="value === '+' && 'selected'" @click="selectType('+')">收入</li>
  </ul>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Types extends Vue {
  //'-' 表示指出，'+'表示收入
  @Prop() readonly value!: string;
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  selectType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknow");
    }
    this.$emit("update:value", type);
  }
  // 只有在变化时才会触发
}
</script>

<style lang="scss" scoped>
.types {
  display: flex;
  background-color: #a2d79f;
  font-size: 24px;
  color: #666;
  text-align: center;

  li {
    padding: 21px 0;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #666;
    }
  }
}
</style>