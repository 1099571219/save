<template>
  <Layout classPreFix="layout">
        <h1 class="mainTitle">欢迎使用小柴记账</h1>
        <tabs
          class="tabs"
          :dataSource="recordTypeList"
          :value.sync="record.type"
        />
        <!-- 只要是传一个东西进去，然后要更新它就使用.sync 在内部使用$emit('update:value',更新后的参数) -->

        <Tags @update:value="record.tags = $event" class="tags" />
        <div class="notes">
          <notes
            fieldName="备注"
            placeholder="在这里输入备注"
            @update:value="onUpdateNotes"
            :value.sync="record.notes"
          />
        </div>
        <number-pad
          :value.sync="record.amount"
          @submit="saveRecord"
          class="numberPad"
        />
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
import popMessage from "@/components/lib/popMessage";

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
      return popMessage("请选择至少一个标签", "error");
    }
    if (this.record.amount === 0) {
      return popMessage("请输入金额", "warning");
    }
    this.$store.commit("createRecord", this.record);
    popMessage("已保存");
    this.record.notes = "";
  }
}
</script>
<style lang="scss" scoped >
@import "~@/assets/style/backgroundTitle.scss";
@import "~@/assets/style/background.scss";
::v-deep .tabs {
  background-color: transparent;
  color: #fff;
  &-item {
    font-size: 0.6rem;
    height: 1.5rem;
    &.selected {
      background-color: #fff;
      &::after {
        background-color: transparent;
      }
    }
  }
}
::v-deep .tags {
  background-color: #fff;
  max-height: 30vh;
}
::v-deep .notes {
  max-height: 10vh;
}
::v-deep .numberPad {
  flex-grow: 1;
  > .output {
    max-height: 10vh;
    font-size: 5vh;
    line-height: 10vh;
  }
  > .buttons {
  }
}
::v-deep .layout-content {
  display: flex;
  flex-direction: column;
  padding-top: $paddingTop;

}

</style>
