<template>
  <div class="tags">
    <div class="new">
      <input type="text" v-model="newTagName" :placeholder="warn" />
      <button @click="create">新增标签</button>
    </div>
    <div class="scroll">
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import CreateTagInText from "@/mixins/CreateTagInText";

@Component({
  mixins: [CreateTagInText],
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
@import "~@/assets/style/Input.scss";
.tags {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  height: 25vh;
  > .scroll {
    flex-grow: 1;
    overflow: auto;
    > .current {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      > li {
        $bg: #fdae91;
        background-color: $bg;
        color: #344763;
        $h: 0.8rem;
        line-height: $h;
        height: $h;
        font-size: 0.5rem;
        border-radius: 0.4rem;
        padding: 0 0.5rem;
        margin: 0.2rem;
        display: flex;
        &.selected {
          background-color: darken($color: $bg, $amount: 30%);
          color: #eee;
        }
      }
    }
  }
  > .new {
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    input {
      padding: 0.2rem;
      max-width: 5rem;
    }
    button {
      color: #55bc7e;
      background: transparent;
      border: none;
      border-bottom: 1px solid #55bc7e;
      font-size: 0.4rem;
    }
  }
}
</style>