<template>
  <Layout classPreFix="layout">
    <number-pad />
    <types />
    <notes />
    <tags :data-source="tags" />
  </Layout>
</template>

<script lang="ts">
import Notes from "@/components/Money/Notes.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import Types from "@/components/Money/Types.vue";
import Vue from "vue";

export default Vue.extend({
  components: { NumberPad, Types, Notes, Tags },
  name: "Money",
  data() {
    return {
      tags: ["衣", "食", "住", "行", "彩票"],
    };
  },
});
</script>

<style lang="scss">
.layout-content {
  $bg: #dcf1d6;
  display: flex;
  flex-direction: column-reverse;
  background-color: lighten($color: $bg, $amount: 50%);
  overflow: auto;
}
</style>
