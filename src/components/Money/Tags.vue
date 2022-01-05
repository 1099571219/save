<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
      <input type="text" v-model="newTagName" :placeholder="warn" />
    </div>
    <ul class="current">
      <li
        v-for="tag in tagList"
        :key="tag.id"
        :class="selectedTags.indexOf(tag) >= 0 && 'selected'"
        @click="toggle(tag)"
      >
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import CreateTagInText from '@/mixins/CreateTagInText'

@Component({
  mixins:[CreateTagInText]
})
export default class tags extends Vue {
  warn = "在这里输入标签名";
  newTagName = "";

  get tagList() {
    return this.$store.state.tagList;
  }
  selectedTags: string[] = [];
  created() {
    this.$store.commit("fetchTag");
  }
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (this.selectedTags.indexOf(tag) >= 0) {
      this.selectedTags.splice(index, 1);
      this.$emit("update:value", this.selectedTags);
    } else {
      this.selectedTags.push(tag);
      this.$emit("update:value", this.selectedTags);
      // this.$store.state.tagList = this.selectedTags
    }
  }

  onInputChange(event: string) {
    this.newTagName = event;
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/Input.scss';
.tags {
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  $bg: #dcf1d6;
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
    display: flex;
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