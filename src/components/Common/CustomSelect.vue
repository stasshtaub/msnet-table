<template>
  <div class="custom-select">
    <select v-model="_value">
      <option
        hidden
        disabled
        selected
        :value="null">
        Выберите
      </option>
      <option
        :key="optionValue"
        :value="value"
        v-for="{ value: optionValue, label } in options">
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",

  props: {
    value: {
      type: [Boolean, String, Number],
      default: null
    },

    options: {
      type: Array,
      required: true
    },

    valueProp: {
      type: String,
      default: "value"
    },

    labelProp: {
      type: String,
      default: "label"
    }
  },

  computed: {
    _value: {
      get() {
        return this.value
      },

      set(value) {
        this.$emit("input", value)
      } 
    }
  }
};
</script>

<style lang="scss">
@import "~@/scss/components/custom-select";
</style>
