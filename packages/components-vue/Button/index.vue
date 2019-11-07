<template>
  <a :class="classNames" :disabled="disabled" @click="$emit('click')">
    <slot></slot>
  </a>
</template>
 
<script lang="ts">
import Vue, { PropType } from "vue";

export type ButtonSize = "small" | "large";
export type ButtonVariant = "primary" | "secondary" | "success" | "danger";

export default Vue.extend({
  props: {
    size: {
      type: String as PropType<ButtonSize>
    },
    variant: {
      type: String as PropType<ButtonVariant>
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classNames(): Object {
      return {
        button: true,
        primary: this.variant === "primary",
        secondary: this.variant === "secondary",
        success: this.variant === "success",
        danger: this.variant === "danger",
        small: this.size === "small",
        large: this.size === "large"
      };
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@components/css";

@include button-classes();

</style>
