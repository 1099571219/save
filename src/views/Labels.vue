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
      <input type="text" v-model="newTagName" :placeholder="warn" />
      <Button @click="create">新建标签</Button>
      <!-- <Button @click="createTag">新建标签</Button> -->
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import { mixins } from "vue-class-component";
import TagHelper from "@/mixins/TagHelper";
import CreateTagInText from "@/mixins/CreateTagInText";


@Component({
  components: { Button },
  mixins: [CreateTagInText],
})
export default class Labels extends mixins(TagHelper) {
  get tags() {
    return this.$store.state.tagList;
  }
  created() {
    this.$store.commit("fetchTag");
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/Input.scss';

input{
  margin-right: 10px;
}
.tags {
  background-color: #fff;
  font-size: 16px;
  margin: 16px 16px;
  color: #666;
  border-radius: 10px;
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
