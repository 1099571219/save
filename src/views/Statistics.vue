<template>
  <Layout classPreFix="layout">
    <div class="background">
      <h1 class="backgroundTitle">统计</h1>
      <div class="content">
        <tabs
          class="tabs"
          classPrefix="type"
          :dataSource="typeList"
          :value.sync="type"
        />
        <div class="scroll">
          <ol v-if="groupedList.length > 0">
            <li v-for="(group, index) in groupedList" :key="index">
              <h3 class="title">
                {{ beautify(group.title) }} <span>￥{{ group.total }}</span>
              </h3>
              <ol>
                <li v-for="item in group.items" :key="item.id" class="record">
                  <span>{{ tagString(item.tags) }}</span
                  ><span class="notes">{{ item.notes }}</span
                  ><span>￥{{ item.amount }}</span>
                </li>
              </ol>
            </li>
          </ol>
          <div v-else class="noResult">目前没有记录</div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tabs from "@/components/Tabs.vue";
import dayjs from "dayjs";
import clone from "@/components/lib/clone";

type RecordItem = {
  tags: Tag[];
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

const oneDay = 86400 * 1000;

@Component({
  components: { tabs },
})
export default class Statistics extends Vue {
  tagString(tags: Tag[]) {
    return tags.length === 0 ? "无" : tags.map((t) => t.name).join("，");
  }
  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, "day")) {
      return "今天";
    } else if (day.isSame(now.subtract(1, "day"), "day")) {
      return "昨天";
    } else if (day.isSame(now.subtract(2, "day"), "day")) {
      return "前天";
    } else if (day.isSame(now, "year")) {
      return day.format("M月D日");
    } else {
      return day.format("YYYY年MM月DD日");
    }
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get groupedList() {
    const { recordList } = this;
    if (recordList.length === 0) {
      return [];
    }
    const newList = clone(recordList)
      .filter((r) => r.type === this.type)
      .sort(
        (a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()
      );
    if (newList.length === 0) {
      return [] as Result;
    }
    type Result = { title: string; total?: number; items: RecordItem[] }[];

    const result: Result = [
      {
        title: dayjs(newList[0].createdAt).format("YYYY-MM-DD"),
        items: [newList[0]],
      },
    ];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), "day")) {
        last.items.push(current);
      } else {
        result.push({
          title: dayjs(current.createdAt).format("YYYY-MM-DD"),
          items: [current],
        });
      }
    }
    result.map((group) => {
      group.total = group.items.reduce((sum, item) => sum + item.amount, 0);
    });

    return result;
  }
  beforeCreate() {
    this.$store.commit("fetchRecords");
  }

  type = "-";
  typeList = [
    { text: "支出", value: "-" },
    { text: "收入", value: "+" },
  ];
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/backgroundTitle.scss";
@import "~@/assets/style/background.scss";

.content {
  margin-top: $paddingTop;
  background-color: #f5f6fa;
  font-size: 0.4rem;
  border-radius: 0.4rem;
  max-width: 10rem;
  display: flex;
  flex-direction: column;
  min-height: 20vh;

  .scroll {
    overflow: auto;
    flex-grow: 1;
    max-height: 60vh;
  }
}
.noResult {
  font-size: 0.5rem;
  padding: 0.2rem;
  text-align: center;
}
.tabs {
  border-radius: 0.4rem 0.4rem 0 0;
  overflow: hidden;
  font-size: 0.6rem;
}
::v-deep {
  .type-tabs-item {
    &.selected {
      &::after {
        display: block;
      }
    }
  }
}
%item {
  padding: 0.3rem 0.4rem;
  line-height: 3vh;
  max-height: 6vh;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title {
  @extend %item;
  background-color: #f5f6fa;
}
.record {
  background: white;
  @extend %item;
  display: flex;
  flex-direction: columns;
  > span {
    align-self: center;
  }
}
.notes {
  margin-right: auto;
  margin-left: 1rem;
  color: #999;
  padding: 0;
}
::v-deep .interval-tabs-item {
  height: 3rem;
}
::v-deep .layout-content {
}
</style>