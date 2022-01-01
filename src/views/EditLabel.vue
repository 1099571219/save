<template>
  <Layout>
    <div><icon name="left" /><span>编辑标签 </span></div>
    <Notes fieldName="备注" placeholder="在这里输入备注" @update:value='onUpdateNotes'/>
  </Layout>
</template>

<script lang='ts'>
import tagListModel from "@/components/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Notes from "@/components/Money/Notes.vue";

@Component({
  components: { Notes },
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace("/404");
    }
  }
  onUpdateNotes(value:string){
    //   
  }
}
</script>

<style lang="scss" scoped>
</style>