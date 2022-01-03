<template>
  <Layout classPreFix="layout">
    {{ recordList }}
    <number-pad :value.sync="record.amount" @submit="saveRecord" />
    <!-- 只要是传一个东西进去，然后要更新它就使用.sync 在内部使用$emit('update:value',更新后的参数) -->
    <types :value.sync="record.type" />
    <div class="notes">
      <notes
        fieldName="备注"
        placeholder="在这里输入备注"
        @update:value="onUpdateNotes"
      />
    </div>
    <tags />
  </Layout>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import Notes from "@/components/Money/Notes.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import Types from "@/components/Money/Types.vue";
import store from "@/store/index";
import oldStore from "@/store/index2";
import recordStore from "@/store/recordStore";
import Vue from "vue";
import { Component } from "vue-property-decorator";
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
  components: { NumberPad, Types, Notes, Tags, Button },
  computed: {
  },
})
export default class Money extends Vue {
  recordList = oldStore .recordList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    recordStore.createRecord(this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
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
