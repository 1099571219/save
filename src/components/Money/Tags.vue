<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="tag in dataSource"
        :key="tag"
        :class="selectedTags.indexOf(tag) >= 0 && 'selected'"
        @click="toggle(tag)"
      >
        {{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class tags extends Vue {
  @Prop() dataSource: string[] | undefined;
  selectedTags: string[] = [];
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (this.selectedTags.indexOf(tag) >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  $bg: #dcf1d6;
  background-color: lighten($color: $bg, $amount: 100%);

  > .current {
    display: flex;
    flex-wrap: wrap-reverse;
    flex-direction: row;
    > li {
      $bg: #a2d79f;
      background-color: $bg;
      color: #666;
      $h: 24px;
      line-height: $h;
      height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin: 12px;
      &.selected {
        background-color: darken($color: $bg, $amount: 30%);
        color: #eee;
      }
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
}
</style>