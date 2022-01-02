<template>
  <Layout>
    <div class="tags">
      <router-link
        class="tag"
        v-for="tag in tags"
        :key="tag.id"
        :to="`/labels/edit/${tag.id}`"
      >
        <span>{{ tag.name }}</span>
        <icon name="right" />
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import tagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Button from "@/components/Button.vue";

@Component({
  components: { Button },
})
export default class Labels extends Vue {
  tags = window.tagList;
  createTag() {
    const name = window.prompt('请输出标签名')
    if(name){
      window.create(name)
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

  > .tag {
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
