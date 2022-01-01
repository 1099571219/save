<template>
  <div class="numberPad">
    <div class="output">{{ output || "&nbsp;" }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="ok" @click="ok">ok</button>
      <button @click="inputContent">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class numberPad extends Vue {
  @Prop() readonly value!: number;
  output = this.value.toString();
  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent!;
    // 固定范围
    if (this.output.length === 16) {
      return;
    }
    // 初始化
    if (this.output === "0") {
      if (input === "0") {
        return;
      }
      if ("123456789".indexOf(input) >= 0) {
        this.output = input;
      } else if (input === ".") {
        this.output += input;
      } else if ("清空删除+-*/%".indexOf(input) >= 0) {
        return;
      }
      return;
    }
    // 小数点控制
    if (this.output.indexOf(".") >= 0) {
      if (input === ".") {
        return;
      }
    }
    this.output += input;
  }
  remove() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = this.output.slice(0, -1);
    }
  }
  clear() {
    this.output = "0";
  }
  ok() {
    const number = this.output;
    if (number === "0") {
      return;
    }
    this.$emit("update:value", this.output);
    this.$emit("submit", this.output);
    this.output = "0";
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  background-color: #fff;
  .output {
    @extend %innerShadow;
    text-align: right;
    font-size: 36px;
    color: #666;
    padding-right: 16px;
    padding-top: 26px;
    padding-bottom: 24px;
    font-family: Consolas, monospace;
  }
  .buttons {
    @extend %clearFix;
    > button {
      float: left;
      height: 7.9vh;
      width: 25%;
      border: none;
      $bg: darken(#dcf1d6, 20%);
      &.ok {
        height: 7.9vh * 2;
        float: right;
        background: #ffd571;
      }
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        background: darken($bg, 0.5% * 1);
      }
      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(7),
      &:nth-child(8) {
        background: darken($bg, 0.5% * 3);
      }
      &:nth-child(9),
      &:nth-child(10),
      &:nth-child(11) {
        background: darken($bg, 0.5% * 6);
      }
      &:nth-child(13),
      &:nth-child(14) {
        background: darken($bg, 0.5% * 9);
      }
      &:nth-child(13) {
        width: 50%;
      }
    }
  }
}
</style>