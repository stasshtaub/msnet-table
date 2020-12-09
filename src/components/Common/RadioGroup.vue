<template>
  <div
    role="radiogroup"
    class="radio-group">
    <label
      :key="i"
      v-for="(option, i) in options"
      role="radio"
      :class="{ 'radio-group__label': true, 'radio-group__label--active': value === option[valueProp] }">
      <input
        v-model="_value"
        type="radio"
        class="radio-group__orig-radio"
        :value="option[valueProp]"
      />
      <span class="radio-group__text">{{ option[labelProp] }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioGroup",

  props: {
    value: {
      type: [Boolean, String, Number],
      required: true
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
@import "~@/scss/components/radio-group";
</style>
