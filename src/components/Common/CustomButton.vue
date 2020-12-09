<template>
  <button
    :class="`custom-button custom-button--${ type }`"
    :type="nativeType">
    <slot name="prepend"></slot>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CustomButton",

  props: {
    nativeType: {
      type: String,
      default: "button"
    },

    type: {
      type: String,
      default: "primary"
    }
  }
};
</script>

<style lang="scss">
@import "~@/scss/components/custom-button";
</style>
