<template>
  <Layout>
    <ol class="tags">
      <li v-for="tag in tags" :key="tag.id">
        <span>{{ tag.name }}</span>
        <icon name="right" />
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import tagListModel from "@/components/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";
tagListModel.fetch();

@Component
export default class Labels extends Vue {
  tags = tagListModel.data;
  createTag() {
    const name = window.prompt("请输入标签名");
    if (name) {
      const message = tagListModel.create(name);
      if (message === "duplicated") {
        window.alert("标签名重复了");
      } else if (message === "success") {
        window.alert("添加成功");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background-color: #fff;
  font-size: 16px;
  margin: 16px 16px;
  color: #666;
  border-radius: 10%;
  overflow: hidden;

  > li {
    min-height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #c6c6c6;
    padding: 0 16px;

    svg {
      color: #666;
      width: 20px;
      height: 20px;
    }
  }
}
.createTag {
  background-color: #ffd571;
  border: none;
  height: 40px;
  padding: 0 16px;
  color: #fff;
  border-radius: 10%;
  &-wrapper {
    text-align: center;
    margin-top: 44px;
  }
}
</style>
