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
    <tags
      :dataSource="tags"
      @update:dataSource="onUpdateTags"
      @update:tags="onUpdateTagsChanged"
    />
  </Layout>
</template>

<script lang="ts">
import Notes from "@/components/Money/Notes.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import Types from "@/components/Money/Types.vue";
import store from "@/store/index2";
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";

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
  components: { NumberPad, Types, Notes, Tags },
})
export default class Money extends Vue {
  tags: Tag[] = store.tagList;
  recordList = store.recordList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateTagsChanged(value: []) {
    this.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    store.createRecord(this.record);
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
