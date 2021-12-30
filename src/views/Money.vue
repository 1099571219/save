<template>
  <Layout classPreFix="layout">
    <number-pad />
    <types :xxx="1234" />
    <div>
      <notes />
    </div>
    <tags />
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
});
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
  background-color: #dcf1d6;
  overflow: auto;
}
</style>
