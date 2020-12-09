<template>
  <div class="table-filters">
    <input
      class="table-filters__search"
      v-model="_searchString"
      :disabled="disabled"
    />
    <div
      class="table-filters__filter-wrp"
      v-click-outside="onOutsideClick">
      <div :class="{ 'table-filters__filter': true, 'table-filters__filter--active': isActive }">
        <button
          class="table-filters__filter-btn"
          :disabled="disabled"
          @click="toggleActive">
          <IconFilter />
        </button>
        <div
          v-if="isActive"
          class="table-filters__tooltip">
          <form @submit.prevent="onSubmit" @reset="onReset">
            <header>
              <p class="table-filters__title text text--gray">Колонка должна:</p>
            </header>
            <CustomSelect
              v-model="_filter.left.option"
              :options="filterOptions"
            />
            <input
              class="input input--gray table-filters__query"
              v-model="_filter.left.query"
              placeholder="значение"
            />
            <template v-if="_filter.left.query">
              <RadioGroup
                class="table-filters__radio"
                v-model="_filter.operator"
                :options="filterOperators"
              />
              <CustomSelect
                v-model="_filter.right.option"
                :options="filterOptions"
              />
              <input
                class="input input--gray table-filters__query"
                v-model="_filter.right.query"
                placeholder="значение"
              />
            </template>
            <footer class="table-filters__footer">
              <CustomButton
                class="table-filters__btn"
                native-type="submit">
                Фильтровать
              </CustomButton>
              <CustomButton
                class="table-filters__btn"
                native-type="reset"
                type="danger-light">
                <template #prepend>
                  <IconCross />
                </template>
                Сбросить
              </CustomButton>
            </footer>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from "@/components/Common/CustomSelect";
import RadioGroup from "@/components/Common/RadioGroup";
import IconFilter from "@/components/Icons/IconFilter";
import IconCross from "@/components/Icons/IconCross";
import CustomButton from "@/components/Common/CustomButton";
import ClickOutside from "vue-click-outside";

export default {
  name: "Table",

  components: {
    CustomSelect,
    RadioGroup,
    IconFilter,
    CustomButton,
    IconCross
  },
  
  directives: {
    ClickOutside
  },

  props: {
    searchString: {
      type: String,
      required: true
    },

    filter: {
      type: Object,
      required: true
    },

    isActive: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    filterOptions: [
      {
        label: "содержать",
        value: "contain"
      }
    ],

    filterOperators: [
      {
        label: "«И»",
        value: "and"
      },
      {
        label: "«Или»",
        value: "or"
      }
    ]
  }),

  computed: {
    _searchString: {
      get() {
        return this.searchString;
      },

      set(value) {
        this.$emit("update:searchString", value)
      }
    },

    _filter: {
      get() {
        return this.filter;
      },

      set(value) {
        this.$emit("update:filter", value)
      }
    },

    _isActive: {
      get() {
        return this.isActive;
      },

      set(value) {
        this.$emit("update:isActive", value)
      }      
    }
  },

  methods: {
    onSubmit() {
      this.$emit("submit")
    },

    onReset() {
      this.$emit("reset")
    },

    toggleActive() {
      this._isActive = !this._isActive;
    },

    onOutsideClick() {
      if (this.isActive) {
        this._isActive = false;
      }
    }
  }
};
</script>

<style lang="scss">
@import "~@/scss/components/table-filters";
@import "~@/scss/components/input";
</style>
