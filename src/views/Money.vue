<template>
  <Layout classPreFix="layout">
    <div class="background">
      <div class="content">
        <h1 class="backgroundTitle">欢迎使用小柴记账</h1>
        <number-pad
          :value.sync="record.amount"
          @submit="saveRecord"
          class="numberPad"
        />
        <!-- 只要是传一个东西进去，然后要更新它就使用.sync 在内部使用$emit('update:value',更新后的参数) -->
        <div class="notes">
          <notes
            fieldName="备注"
            placeholder="在这里输入备注"
            @update:value="onUpdateNotes"
            :value.sync="record.notes"
          />
        </div>

        <Tags @update:value="record.tags = $event" class="tags" />
        <tabs
          class="tabs"
          :dataSource="recordTypeList"
          :value.sync="record.type"
        />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import Notes from "@/components/Money/Notes.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
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
    if (!this.record.tags || this.record.tags.length === 0) {
      return this.$message({
        showClose: true,
        message: '请至少选择一个标签',
        type: 'error',
        center: true,
      });
      // return window.alert("请选择至少一个标签");
    }
    if (this.record.amount === 0) {
      return this.$message({
        showClose: true,
        message: '请填写金额',
        type: 'error',
        center: true,
      });

      // return window.alert("请填写金额");
    }
    this.$store.commit("createRecord", this.record);

    this.$message({
      showClose: true,
      message: '保存成功',
      type: 'success',
      center: true,
    });

    // return window.alert("保存成功");
    this.record.notes = "";
  }
}
</script>

<style lang="scss" scoped >
@import "~@/assets/style/backgroundTitle.scss";
@import "~@/assets/style/background.scss";
  .backgroundTitle {
    width: 100vw;
    text-align: center;
    top: 2vh;
    color: #fff;
    left: 50vw;
    transform: translateX(-50%);
    @media (min-width:500px) {
    width: auto;
    }
  }
::v-deep .tabs {
  background-color: transparent;
  color: #fff;
  &-item {
    height: 44px;
    &.selected {
      background-color: #fff;
      &::after {
        background-color: transparent;
      }
    }
  }
}
.background {
  padding-top: 16vh;
  @media (min-width:500px) {
    padding-top: 11vh;
  }

  .content {
    $bg: #dcf1d6;
    display: flex;
    flex-direction: column-reverse;
    @media (min-width: 500px) {
      margin: 0 25px;
      max-width: 450px;
      max-height: 80vh;
    }
    margin: 0 5vw;
    max-height: 150vw;
  }
}
::v-deep .tags {
  background-color: #fff;
}
</style>
