<template>
  <Layout classPreFix="layout">
    <number-pad :value.sync="record.amount" @submit="saveRecord" />
    <!-- 只要是传一个东西进去，然后要更新它就使用.sync 在内部使用$emit('update:value',更新后的参数) -->
    <tabs :dataSource="recordTypeList" :value.sync="record.type"/>
    <div class="notes">
      <notes
        fieldName="备注"
        placeholder="在这里输入备注"
        @update:value="onUpdateNotes"
      />
    </div>
    <Tags />
  </Layout>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import Notes from "@/components/Money/Notes.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import recordTypeList from "@/constants/recordTypeList";

type Tag = {
  id: string;
  name: string;
};
type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date; //类 小于类型 / 构造函数
};

// 数据库升级 数据迁移
@Component({
  components: { NumberPad, Notes, Tags, Button, Tabs },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }
  recordTypeList = recordTypeList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };
  created() {
    this.$store.commit("fetchRecords");
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    this.$store.commit("createRecord", this.record);
  }
}
</script>

<style lang="scss" scoped >
::v-deep .layout-content {
  $bg: #dcf1d6;
  display: flex;
  flex-direction: column-reverse;
  background-color: lighten($color: $bg, $amount: 50%);
  overflow: auto;
}
.notes {
  padding: 12px 0;
}
</style>
