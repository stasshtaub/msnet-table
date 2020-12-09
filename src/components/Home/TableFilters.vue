<template>
  <div class="table-filters">
    <input
      class="table-filters__search"
      v-model="_searchString"
    />
    <div class="table-filters__filter-wrp">
      <div class="table-filters__filter">
        <button class="table-filters__filter-btn">
          <IconFilter />
        </button>
        <div class="table-filters__tooltip">
          <p class="table-filters__title text text--gray">Колонка должна:</p>
          <CustomSelect
            v-model="_filter.left.option"
            :options="filterOptions"
          />
          <input
              class="table-filters__query"
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
              class="table-filters__query"
              v-model="_filter.right.query"
              placeholder="значение"
            />
          </template>
          <footer class="table-filters__footer">
            <CustomButton class="table-filters__btn">
              Фильтровать
            </CustomButton>
            <CustomButton
              class="table-filters__btn"
              type="danger-light">
              <template #prepend>
                X
              </template>
              Сбросить
            </CustomButton>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from "@/components/Common/CustomSelect";
import RadioGroup from "@/components/Common/RadioGroup";
import IconFilter from "@/components/Icons/IconFilter";
import CustomButton from "@/components/Common/CustomButton";

export default {
  name: "Table",

  components: {
    CustomSelect,
    RadioGroup,
    IconFilter,
    CustomButton
  },

  props: {
    searchString: {
      type: String,
      required: true
    },

    filter: {
      type: Object,
      required: true
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
    }
  }
};
</script>

<style lang="scss">
@import "~@/scss/components/table-filters";
</style>
