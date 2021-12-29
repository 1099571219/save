<template>
  <ul class="types">
    <li class="selected">支出</li>
    <li>收入</li>
  </ul>
</template>

<script>
export default {};
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