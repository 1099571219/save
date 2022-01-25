<template>
  <div>
    <label class="notes">
      <span class="name">{{ this.fieldName }}</span>
      <input
        type="text"
        :value="value"
        @input="onValueChanged($event.target.value)"
        :placeholder="placeholder"
      />
    </label>
  </div>
</template>

<script lang = 'ts'>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class notes extends Vue {
  @Prop({ default: "" }) readonly value!: string;
  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string;
  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  display: flex;
  padding: 0.4rem;
  background-color: #fff;
  align-items: center;
  border-radius: 0 0 0.4rem 0.4rem;
  > .name {
    color: #333;
    font-size: 0.4rem;
    padding: 0 0.4rem;

  }
  input {
    flex-grow: 1;
    background: transparent;
    border: none;
    color: #666;
    max-width: 60vw;
  }
}
</style>