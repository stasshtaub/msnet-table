<template>
  <vue-good-table
    :columns="columns"
    :rows="rows"
    :sort-options="{
      enabled: false
    }"
    styleClass="custom-table">
    <template #table-column="{ column }">
      <span class="text text--bold">{{ column.label }}</span>
    </template>
  </vue-good-table>
</template>

<script>
export default {
  name: "HomeTable",

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
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "~@/scss/components/table";
</style>
