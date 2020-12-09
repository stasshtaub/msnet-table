<template>
  <label class="checkbox" tabindex="0">
    <input
      class="checkbox__input"
      v-model="_value"
      type="checkbox"
      :value="nativeValue"
    />
    <IconChecked class="checkbox__icon"/>
  </label>
</template>

<script>
import IconChecked from "@/components/Icons/IconChecked";

export default {
  name: "Checkbox",

  components: { IconChecked },

  props: {
    value: {
      type: [Array, Boolean],
      required: true,
    },

    nativeValue: {
      default: true,
    },
  },

  computed: {
    _value: {
      get() {
        return this.value;
      },

      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style lang="scss">
@import "~@/scss/components/checkbox";
</style>
