<template>
  <ul class="tabs" :class="{ [classPrefix + '-tabs']: classPrefix }">
    <li
      v-for="item in dataSource"
      :key="item.value"
      :class="liClass(item)"
      class="tabs-item"
      @click="selected(item)"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

type DataSourceItem = { text: string; value: string };

@Component
export default class Types extends Vue {
  @Prop({ required: true, type: Array }) dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;
  @Prop({ default: "21px" }) paddingY?: string;
  selected(item: DataSourceItem) {
    this.$emit("update:value", item.value);
  }
  liClass(item: DataSourceItem) {
    return {
      [this.classPrefix + "-tabs-item"]: this.classPrefix,
      selected: item.value === this.value,
    };
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  background-color: #fff;
  color: #344763;
  text-align: center;
  max-height: 1.28rem;
  &-item {
    width: 50%;
    display: flex;
    height: 1.28rem;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 20px 0px 0 0;
    &:last-child {
      border-radius: 0px 20px 0 0;
    }
    &.selected {
      color: #344763;
      background-color: #ffffff;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: #32c26b;
      }
    }
  }
}
</style>