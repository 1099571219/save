<template>
  <Layout classPreFix="layout">
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
  font-size: 0.6rem;
  color: #666;
  border-radius: 0.4rem;
  overflow: auto;
  max-height: 60vh;
  ::-webkit-scrollbar {
    width: 0;
  }
  > .tag {
    min-height: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #c6c6c6;
    padding: 0 0.32rem;
    svg {
      color: #666;
      width: 0.4rem;
      height: 0.4rem;
    }
  }
}
.createTag {
  &-wrapper {
    text-align: center;
    position: fixed;
    max-width: 500px;
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
.createTag-wrapper {
  bottom: 2rem;
}
::v-deep .layout-content {
  padding-top: $paddingTop;
}
</style>
