<template>
  <h1 class="h1">
    <slot></slot>
  </h1>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import "@components/css";

.h1 {
  @include h1();
}

</style>