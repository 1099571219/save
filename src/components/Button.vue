<template>
  <button class="button" 
  @click="$emit('click',$event)"><slot/></button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style lang="scss" scoped>
.button {
  background-color: #55bc7e;
  border: none;
  height: 40px;
  padding: 0 16px;
  color: #fff;
  border-radius: 10%;
  min-width: 4em;

  &-wrapper {
    text-align: center;
    margin-top: 44px;
  }
}
</style>