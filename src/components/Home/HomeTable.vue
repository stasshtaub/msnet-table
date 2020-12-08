<template>
  <vue-good-table
    :columns="columns"
    :rows="rows"
    :sort-options="{ enabled: false }"
    styleClass="custom-table"
  >
    <template #table-column="{ column }">
      <span class="text text--bold">{{ column.label }}</span>
    </template>
    <template #table-row="{ column, row, formattedRow }">
      <div :class="{ 'custom-table__td-inner': true, 'custom-table__td-inner--truncated': ['name', 'category'].includes(column.field) }">
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

export default {
  name: "HomeTable",

  components: { Checkbox },

  data() {
    const common = {
      thClass: "custom-table__th",
      tdClass: "custom-table__td",
      width: "77px"
    };

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
          ...common,
          label: "SKU",
          field: "sku"
        },
        {
          ...common,
          label: "Название",
          field: "name",
          width: "155px"
        },
        {
          ...common,
          label: "Площадка",
          field: "platform"
        },
        {
          ...common,
          label: "Категория",
          field: "category",
          width: "230px"
        },
        {
          ...common,
          label: "Бренд",
          field: "brand"
        },
        {
          ...common,
          label: "Продавец",
          field: "seller",
          width: "155px"
        },
        {
          ...common,
          label: "Цвет",
          field: "color"
        },
        {
          ...common,
          label: "Наличие",
          field: "availability",
          type: "number"
        },
        {
          ...common,
          label: "Коммент",
          field: "comment",
          type: "number"
        },
        {
          ...common,
          label: "Рейтинг",
          field: "rate",
          type: "number"
        },
        {
          ...common,
          label: "СПП",
          field: "spp",
          type: "number"
        },
        {
          ...common,
          label: "Среднее",
          field: "avg",
          type: "number"
        },
        {
          ...common,
          label: "Потенц",
          field: "potential",
          type: "number"
        },
        {
          ...common,
          label: "Цена",
          field: "price",
          type: "number"
        },
        {
          ...common,
          label: "Был в на",
          field: "wasIn",
          type: "number"
        },
        {
          ...common,
          label: "Продажи",
          field: "salesCount",
          type: "number"
        },
        {
          ...common,
          label: "Выручка",
          field: "proceeds",
          type: "number"
        }
      ],
      rows: [
        ...Array.from({ length: 10 }, (_, i) => ({
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
        }))
      ],
      selected: []
    };
  }
};
</script>

<style lang="scss">
@import "~@/scss/components/table";
</style>
