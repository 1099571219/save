<template>
  <Layout>
    <tabs classPrefix="types" :dataSource="typeList" :value.sync="type" />
    <tabs classPrefix="interval" :dataSource="intervalList" :value.sync="interval" />
  <div>
    type:{{type}}
    <hr>
    interval:{{interval}}
  </div>

  </Layout>
</template>


<script lang="ts">
import Vue from "vue";
import Types from "@/components/Money/Types.vue";
import { Component } from "vue-property-decorator";
import tabs from "@/components/Tabs.vue";

@Component({
  components: { Types, tabs },
})
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = [
    { text: "按天", value: "day" },
    { text: "按周", value: "week" },
    { text: "按月", value: "month" },
  ];
  typeList=[
    {text:'支出',value:'-'},
    {text:'收入',value:'+'},
  ]
}
</script>

<style lang="scss" scoped>
::v-deep .types-tabs-item {
  background-color: #dcf1d6;
  &.selected {
    background-color: #a2d79f;
    &::after {
      display: none;
    }
  }
}
</style>