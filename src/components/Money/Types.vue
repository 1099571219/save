<template>
  <ul class="types">
    <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
    <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
  </ul>
</template>

<script>
export default {
  name: "Types",
  data() {
    return {
      type: "-", //'-'表示指出，'+'表示收入
    };
  },
  props: ["xxx"],
  mounted() {
    console.log(this.xxx);
  },
  methods: {
    selectType(type) {
      if (type !== "-" && type !== "+") {
        throw new Error("type is unknow");
      }
      this.type = type;
    },
  },
};
</script>

<style lang="scss" scoped>
.types {
  display: flex;
  background-color: #a2d79f;
  font-size: 24px;
  color: #666;
  text-align: center;

  li {
    padding: 21px 0;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #666;
    }
  }
}
</style>