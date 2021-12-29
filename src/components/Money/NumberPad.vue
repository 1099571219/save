<template>
  <div class="numberPad">
    <div class="output">100</div>
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>*</button>
      <button class="ok">ok</button>
      <button>0</button>
      <button>.</button>
      <button>%</button>
      <button>/</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  background-color: #dcf1d6;
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
      width: 20%;
      border: none;
      $bg: #dcf1d6;
      &.ok {
        height: 7.9vh * 2;
        float: right;
      }
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5) {
        background: darken($bg, 0.5% * 1);
      }
      &:nth-child(6),
      &:nth-child(7),
      &:nth-child(8),
      &:nth-child(9),
      &:nth-child(10) {
        background: darken($bg, 0.5% * 3);
      }
      &:nth-child(11),
      &:nth-child(12),
      &:nth-child(13),
      &:nth-child(14) {
        background: darken($bg, 0.5% * 6);
      }
      &:nth-child(16),
      &:nth-child(17),
      &:nth-child(18),
      &:nth-child(19),
      &:nth-child(15) {
        background: darken($bg, 0.5% * 9);
      }
    }
  }
}
</style>