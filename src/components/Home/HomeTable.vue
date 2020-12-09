<template>
  <vue-good-table
    :columns="columns"
    :rows="filteredRows"
    :sort-options="{ enabled: false }"
    styleClass="custom-table"
  >
    <template #table-column="{ column }">
      <span class="text text--bold">{{ column.label }}</span>
      <TableFilters
        v-if="column.withFilters"
        :searchString.sync="filters[column.field].search"
        :filter.sync="filters[column.field]"
        :isActive.sync="filters[column.field].isActive"
        :disabled="!!column.disabledFilters"
        @submit="filter"
        @reset="resetFilters"
      />
    </template>
    <template #table-row="{ column, row, formattedRow }">
      <div
        :class="{
          'custom-table__td-inner': true,
          'custom-table__td-inner--truncated': ['name', 'category'].includes(
            column.field
          ),
        }"
      >
        <div v-if="column.field === 'img'" class="custom-table__checkbox-cell">
          <Checkbox
            class="custom-table__checkbox"
            v-model="selected"
            :native-value="row.sku"
          />
          <img class="custom-table__img" :src="row.img" />
        </div>
        <span
          v-else-if="['name', 'category', 'brand'].includes(column.field)"
          class="text text--blue"
        >
          {{ formattedRow[column.field] }}
        </span>
        <span v-else>
          {{ formattedRow[column.field] }}
        </span>
      </div>
    </template>
  </vue-good-table>
</template>

<script>
import Checkbox from "@/components/Common/Checkbox";
import TableFilters from "@/components/Home/TableFilters";

const initFilterOption = (option = null) => ({
  option: option,
  query: null
});

const initFilter = () => ({
  search: "",
  operator: "and",
  left: initFilterOption("contain"),
  right: initFilterOption(),
  isActive: false
});

const rowsDb = Array.from({ length: 10 }, (_, i) => ({
  img: `https://picsum.photos/id/${ i + 1 }/30`,
  sku: `${ 165446325 + i }`,
  name: "Носки СОВА, 1 шт",
  platform: "Ozon",
  category: "Одежда, обувь аксессуары/Женщина т",
  brand: "СОВА",
  seller: "Сова",
  color: null,
  availability: 2,
  comment: 2 + i,
  rate: (4.86 + i * 0.1).toFixed(2),
  spp: (4.86 + i * 0.5).toFixed(2),
  avg: (1 + i * 0.3).toFixed(2),
  potential: (6125 + i * 5).toFixed(2),
  price: 350 + i * 10,
  wasIn: 4 + i,
  salesCount: 32 + i,
  proceeds: 11840 + i * 20
}));

export default {
  name: "HomeTable",

  components: {
    Checkbox,
    TableFilters
  },

  data() {
    const common = {
      thClass: "custom-table__th",
      tdClass: "custom-table__td",
      width: "77px"
    };

    const withFilters = { ...common, withFilters: true };

    return {
      columns: [
        {
          ...common,
          thClass: "vgt-center-align custom-table__th",
          tdClass: "vgt-center-align custom-table__td",
          label: "Фото",
          field: "img"
        },
        {
          ...withFilters,
          label: "SKU",
          field: "sku"
        },
        {
          ...withFilters,
          label: "Название",
          field: "name",
          width: "155px"
        },
        {
          ...withFilters,
          disabledFilters: true,
          label: "Площадка",
          field: "platform"
        },
        {
          ...withFilters,
          label: "Категория",
          field: "category",
          width: "230px"
        },
        {
          ...withFilters,
          label: "Бренд",
          field: "brand"
        },
        {
          ...withFilters,
          label: "Продавец",
          field: "seller",
          width: "155px"
        },
        {
          ...withFilters,
          disabledFilters: true,
          label: "Цвет",
          field: "color"
        },
        {
          ...withFilters,
          label: "Наличие",
          field: "availability",
          type: "number"
        },
        {
          ...withFilters,
          label: "Коммент",
          field: "comment",
          type: "number"
        },
        {
          ...withFilters,
          label: "Рейтинг",
          field: "rate",
          type: "number"
        },
        {
          ...withFilters,
          label: "СПП",
          field: "spp",
          type: "number"
        },
        {
          ...withFilters,
          label: "Среднее",
          field: "avg",
          type: "number"
        },
        {
          ...withFilters,
          label: "Потенц",
          field: "potential",
          type: "number"
        },
        {
          ...withFilters,
          label: "Цена",
          field: "price",
          type: "number"
        },
        {
          ...withFilters,
          label: "Был в на",
          field: "wasIn",
          type: "number"
        },
        {
          ...withFilters,
          label: "Продажи",
          field: "salesCount",
          type: "number"
        },
        {
          ...withFilters,
          label: "Выручка",
          field: "proceeds",
          type: "number"
        }
      ],

      rows: rowsDb,
      filters: {
        sku: initFilter(),
        name: initFilter(),
        platform: initFilter(),
        category: initFilter(),
        brand: initFilter(),
        seller: initFilter(),
        color: initFilter(),
        availability: initFilter(),
        comment: initFilter(),
        rate: initFilter(),
        spp: initFilter(),
        avg: initFilter(),
        potential: initFilter(),
        price: initFilter(),
        wasIn: initFilter(),
        salesCount: initFilter(),
        proceeds: initFilter()
      },
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
      ],
      selected: []
    };
  },

  computed: {
    filteredRows() {
      const { rows, filters } = this;
      return rows.filter((row) => {
        for (const key in filters) {
          if (filters[key]?.search && !`${ row[key] }`.includes(filters[key].search)) {
            return false;
          }
        }
        return true;
      });
    }
  },

  methods: {
    filter() {
      const { filters } = this;

      this.rows = rowsDb.filter((row) => {
        for (const key in filters) {
          const { left, right, operator } = filters[key];

          if (left.query) {
            switch (left.option) {
              case "contain":
                if (!row[key].includes(left.query)) {
                  if (operator === "and") {
                    return false;
                  } else {
                    if (right.option && right.query) {
                      switch (right.option) {
                        case "contain":
                          if (!row[key].includes(right.query)) {
                            return false;
                          }
                          break;
                      }
                    }
                  }
                }
                break;
            }
          }
        }

        return true;
      });
    },

    resetFilters () {
      const { filters } = this;
      for (const key in filters) {
        filters[key] = initFilter();
      }
      this.filter();
    }
  }
};
</script>

<style lang="scss">
@import "~@/scss/components/table";
</style>
