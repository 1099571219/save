<template>
  <Layout class="wrapper">
    <div class="background">
      <h1 class="backgroundTitle">自定义标签</h1>
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
        <input type="text" v-model="newTagName" :placeholder="warn" /><Button
          @click="create"
          >新建标签</Button
        >
        <!-- <Button @click="createTag">新建标签</Button> -->
      </div>
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
@import "~@/assets/style/Input.scss";
@import "~@/assets/style/backgroundTitle.scss";
@import "~@/assets/style/background.scss";

.tags {
  background-color: #fff;
  font-size: 16px;
  color: #666;
  border-radius: 10px;
  overflow: auto;
  max-height: 60vh;
  margin: 0 5vw;
  @media (min-width:500px) {
    max-width: 450px;
    margin: 0 25px;
  }
  ::-webkit-scrollbar {
    width: 0;
  }
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
  &-wrapper {
    text-align: center;
    position: fixed;
    max-width: 500px;
    margin-bottom: 10px;
    bottom: 15vw;
    left: 50vw;
    transform: translateX(-50%);
    width: 100%;
    input {
      padding: 1vh 0;
      padding-left: 1em;
      margin-right: 10px;

      max-width: 50vw;
    }
  }
}
@media (min-width: 500px) {
  .createTag-wrapper {
    bottom: 10vh;
  }
}
</style>
