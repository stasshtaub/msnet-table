<template>
  <vue-good-table
    :columns="columns"
    :rows="rows"
    :sort-options="{ enabled: false }"
    styleClass="custom-table">
    <template #table-column="{ column }">
      <span class="text text--bold">{{ column.label }}</span>
    </template>
    <template #table-row="{ column, row, formattedRow }">
      <div
        v-if="column.field === 'img'"
        class="custom-table__checkbox-cell">
        <Checkbox
          class="custom-table__checkbox"
          v-model="selected"
          :native-value="row.sku"/>
        <img
          class="custom-table__img"
          :src="row.img"/>
      </div>
      <span v-else>
        {{ formattedRow[column.field] }}
      </span>
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
          field: "name"
        },
        {
          ...common,
          label: "Площадка",
          field: "platform"
        },
        {
          ...common,
          label: "Категория",
          field: "category"
        },
        {
          ...common,
          label: "Бренд",
          field: "brand"
        },
        {
          ...common,
          label: "Продавец",
          field: "seller"
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
        {
          img: "https://picsum.photos/id/1/30",
          sku: "165446325",
          name: "Носки СОВА, 1 шт",
          platform: "Ozon",
          category: "Одежда, обувь аксессуары/Женщина т",
          brand: "СОВА",
          seller: "Сова",
          color: null,
          availability: 2,
          comment: 2,
          rate: 4.86,
          spp: 4.86,
          avg: 1,
          potential: 6125,
          price: 350,
          wasIn: 4,
          salesCount: 32,
          proceeds: 11840
        },
        {
          img: "https://picsum.photos/id/2/30",
          sku: "165441464",
          name: "Носки Веселый носочни",
          platform: "Ozon",
          category: "Одежда, обувь аксессуары/Женщина т",
          brand: "СОВА",
          seller: "Сова",
          color: null,
          availability: 2,
          comment: 2,
          rate: 4.86,
          spp: 4.86,
          avg: 1,
          potential: 6125,
          price: 350,
          wasIn: 4,
          salesCount: 32,
          proceeds: 11840
        }
      ],
      selected: []
    };
  }
};
</script>

<style lang="scss">
@import "~@/scss/components/table";
</style>
