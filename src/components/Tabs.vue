<template>
  <ul class="tabs" :class="{[classPrefix+'-tabs']:classPrefix}">
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

type DataSourceItem = { text: string; value: string }

@Component
export default class Types extends Vue {
  @Prop({ required: true, type: Array }) dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;
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
  background-color: #dcf1d6;
  font-size: 24px;
  color: #666;
  text-align: center;

  &-item {
    padding: 21px 0;
    width: 50%;
    display: flex;
    height: 64px;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected{
      background-color: #ffd571;
      &::after {
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
}
</style>