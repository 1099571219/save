<template>
  <Layout classPreFix="layout">
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
import popMessage from "@/components/lib/popMessage";

@Component({
  components: { Notes, Button },
})
export default class EditLabel extends Vue {
  get currentTag() {
    return this.$store.state.currentTag;
  }
  created() {
    const id = this.$route.params.id;
    this.$store.commit("fetchTag");
    this.$store.commit("setCurrentTag", id);
    if (!this.currentTag) {
      console.log("no tag");
      this.$router.replace("/404");
    } else {
      console.log("has tag");
    }
  }
  update(name: string) {
    if (this.currentTag) {
      this.$store.commit("updateTag", { id: this.currentTag.id, name });
    }
  }
  remove() {
    this.$confirm("是否确认删除该标签?", "删除标签", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
      center: true,
      closeOnPressEscape: true,
    })
      .then(() => {
        if (this.currentTag) {
          this.$store.commit("removeTag", this.currentTag.id);
          this.$router.go(1);
          popMessage("删除成功!");
        }
      })
      .catch(() => {
        popMessage("已取消删除", "info");
      });
  }
  goBack() {
    const text = this.currentTag.name;
    if (text !== "") {
      this.$router.back();
    }else{
        popMessage("标签名不能为空", "error");
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .content {
}
::v-deep .notes {
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0;
  margin: 0 0.3rem;
  background-color: #fff;
  overflow: hidden;
  align-items: center;
  border-radius: 10px;
  > .name {
    color: #333;
    font-size: 0.5rem;
  }
  input {
    background: transparent;
    border: none;
    color: #666;
    font-size: 0.5rem;
  }
}
.navBar {
  text-align: center;
  font-size: 0.4rem;
  padding: 0.4rem 0.32rem;
  background: #55bc7e;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .leftIcon {
    width: 0.48rem;
    height: 0.48rem;
  }
  > .rightIcon {
    width: 0.48rem;
    height: 0.48rem;
  }
}
.note-wrapper {
  // background: white;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  margin-top: 2rem;

  Button {
    height: 1rem;
    padding: 0 1rem;
  }
}
</style>