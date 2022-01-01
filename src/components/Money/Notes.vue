<template>
  <div>
    <label class="notes">
      <span class="name">{{ this.fieldName }}</span>
      <input type="text" v-model="value" :placeholder="placeholder" />
    </label>
  </div>
</template>

<script lang = 'ts'>
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class notes extends Vue {
  value = "";
  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string;
  @Watch("value")
  onValueChanged(value: string, oldValue: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  display: flex;
  padding: 25px 0;
  background-color: #dcf1d6;
  align-items: center;

  > .name {
    color: #333;
    font-size: 14px;
    padding: 0 16px;
  }
  input {
    flex-grow: 1;
    background: transparent;
    border: none;
    color: #666;
  }
}
</style>