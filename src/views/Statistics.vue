<template>
  <Layout>
    <tabs classPrefix="types" :dataSource="typeList" :value.sync="type" />
    <tabs
      classPrefix="interval"
      :dataSource="intervalList"
      :value.sync="interval"
    />
    <ol>
      <li v-for="(group,index) in result" :key="index">
        <h3 class="title">{{group.title}}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id"
              class="record"
          ><span>{{tagString(item.tags)}}</span><span class="notes">{{item.notes}}</span><span>￥{{item.amount}}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tabs from "@/components/Tabs.vue";

type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: string; //类 小于类型 / 构造函数
};
type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
};
type Tag = {
  id: string;
  name: string;
};

@Component({
  components: { tabs },
})
export default class Statistics extends Vue {
   tagString(tags: Tag[]) {
      return tags.length === 0 ? '无' : tags.join(',');
    }
    get recordList() {
      return (this.$store.state as RootState).recordList;
    }
    get result() {
      const {recordList} = this;
      type HashTableValue = { title: string, items: RecordItem[] }
      const hashTable: { [key: string]: HashTableValue } = {};
      for (let i = 0; i < recordList.length; i++) {
        const [date, time] = recordList[i].createdAt!.split('T');
        hashTable[date] = hashTable[date] || {title: date, items: []};
        hashTable[date].items.push(recordList[i]);
        console.log(date)
      }
      return hashTable;
    }
    beforeCreate() {
      this.$store.commit('fetchRecords');
    }

  type = "-";
  interval = "day";
  intervalList = [
    { text: "按天", value: "day" },
    { text: "按周", value: "week" },
    { text: "按月", value: "month" },
  ];
  typeList = [
    { text: "支出", value: "-" },
    { text: "收入", value: "+" },
  ];
}
</script>

<style scoped lang="scss">
::v-deep {
  .type-tabs-item {
    background: white;
    &.selected {
      background: #c4c4c4;
      &::after {
        display: none;
      }
    }
  }
}
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title {
  @extend %item;
}
.record {
  background: white;
  @extend %item;
  display: flex;
  flex-direction: columns;
  >span{
    align-self: center;
  }
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
  padding: 0;
}
::v-deep .interval-tabs-item {
  height: 48px;
}
</style>