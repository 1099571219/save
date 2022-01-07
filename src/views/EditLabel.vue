<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack" />
      <span class="title">编辑标签 </span>
      <span class="rightIcon"></span>
    </div>
    <div class="note-wrapper">
      <Notes
        :value="currentTag.name"
        @update:value="update"
        fieldName="标签名"
        placeholder="请输入标签名"
      />
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Notes from "@/components/Money/Notes.vue";
import Button from "@/components/Button.vue";
import tagStore from "@/store/tagStore";

@Component({
  components: { Notes, Button },
})
export default class EditLabel extends Vue {
  get currentTag() {
    return this.$store.state.currentTag;
  }
  created() {
    const id = this.$route.params.id;
    console.log(id)
    this.$store.commit('fetchTag')
    this.$store.commit("setCurrentTag", id);
    if (!this.currentTag) {
      console.log('no tag')
      this.$router.replace("/404");
    }else{
      console.log('has tag')
    }
  }
  update(name: string) {
    if (this.currentTag) {
      this.$store.commit("updateTag", { id: this.currentTag.id, name });
    }
  }
  remove() {
    if (this.currentTag) {
      this.$store.commit("removeTag", this.currentTag.id);
    }
  }
  goBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
::v-deep .notes {
  display: flex;
  padding: 25px 0;
  margin: 0 5vw;
  background-color: #fff;
  overflow: hidden;
  align-items: center;
  border-radius: 10px;
  > .name {
    min-width: 90px;

    color: #333;
    font-size: 16px;
    padding: 0 16px;
  }
  input {
    flex-grow: 1;
    background: transparent;
    border: none;
    color: #666;
  }
}
.navBar {
  text-align: center;
  font-size: 20px;
  padding: 20px 16px;
  background: #55bc7e;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .title {
  }
  > .leftIcon {
    width: 24px;
    height: 24px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.note-wrapper {
  // background: white;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>