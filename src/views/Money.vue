<template>
  <Layout classPreFix='layout'>
      <div class="tags">
        
        <div class="new">
          <button>新增标签</button>
        </div>
        <ul class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
      </div>
      <div>
        <label class="notes">
          <span class="name">备注</span>
          <input type="text" placeholder="在这里输入备注" />
        </label>
      </div>
      <div>
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
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
      </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Money",
});
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  background-color: #dcf1d6;
  overflow: auto;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  background-color: #dcf1d6;
  > .current {
    display: flex;
    flex-wrap: wrap-reverse;
    flex-direction: row;
    > li {
      background-color: #a2d79f;
      color: #666;
      $h: 24px;
      line-height: $h;
      height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin: 12px;
    }
  }
  > .new {
    margin-left: 16px;
    padding-top: 16px;
    padding-bottom: 13.38px;
    button {
      font-size: 16px;
      color: #666;
      background: transparent;
      border: none;
      border-bottom: 1px solid #666;
      padding: 0 5px;
    }
  }
  &.selected {
  }
}
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
      //   &:nth-child(1) {
      //     background: $bg;
      //   }
      //   &:nth-child(2),
      //   &:nth-child(6) {
      //     background: darken($bg, 1%);
      //   }
      //   &:nth-child(3),
      //   &:nth-child(7),
      //   &:nth-child(11) {
      //     background: darken($bg, 1% * 2);
      //   }
      //   &:nth-child(4),
      //   &:nth-child(8),
      //   &:nth-child(12),
      //   &:nth-child(16) {
      //     background: darken($bg, 1% * 3);
      //   }
      //   &:nth-child(5),
      //   &:nth-child(9),
      //   &:nth-child(13),
      //   &:nth-child(17) {
      //     background: darken($bg, 1% * 4);
      //   }
      //   &:nth-child(10),
      //   &:nth-child(14),
      //   &:nth-child(18) {
      //     background: darken($bg, 1% * 5);
      //   }
      //   &:nth-child(15),
      //   &:nth-child(19) {
      //     background: darken($bg, 1% * 6);
      //   }
    }
  }
}
</style>