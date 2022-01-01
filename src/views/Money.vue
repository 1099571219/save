<template>
  <Layout classPreFix="layout">
    {{ recordList }}
    <number-pad :value.sync="record.amount" @submit="saveRecord" />
    <!-- 只要是传一个东西进去，然后要更新它就使用.sync 在内部使用$emit('update:value',更新后的参数) -->
    <types :value.sync="record.type" />
    <notes @update:value="onUpdateNotes" />
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
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import recordListModel from "@/components/models/recordListModel";
import tagListModel from "@/components/models/tagListModel";

type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date; //类 小于类型 / 构造函数
};

// 数据库升级 数据迁移
const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();

@Component({
  components: { NumberPad, Types, Notes, Tags },
})
export default class Money extends Vue {
  tags:string[] = tagList;
  recordList: RecordItem[] = recordList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateTagsChanged(value: string[]) {
    this.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    // 深拷贝，避免内存地址一致的bug
    const record2: RecordItem = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
    console.log(this.recordList);
  }
  @Watch("recordList")
  onRecordListChanged() {
    recordListModel.save(this.recordList);
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
</style>
