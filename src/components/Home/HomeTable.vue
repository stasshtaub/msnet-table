<template>
  <vue-good-table
    :columns="columns"
    :rows="rows"
    :sort-options="{
      enabled: false
    }"/>
</template>

<script>
export default {
  name: "HomeTable",

  data: () => ({
    columns: [
      {
        label: "Фото",
        field: "img"
      },
      {
        label: "SKU",
        field: "sku"
      },
      {
        label: "Название",
        field: "name"
      },
      {
        label: "Площадка",
        field: "platform"
      },
      {
        label: "Категория",
        field: "category"
      },
      {
        label: "Бренд",
        field: "brand"
      },
      {
        label: "Продавец",
        field: "seller"
      },
      {
        label: "Цвет",
        field: "color"
      },
      {
        label: "Наличие",
        field: "availability",
        type: "number"
      },
      {
        label: "Коммент",
        field: "comment",
        type: "number"
      },
      {
        label: "Рейтинг",
        field: "rate",
        type: "number"
      },
      {
        label: "СПП",
        field: "spp",
        type: "number"
      },
      {
        label: "Среднее",
        field: "avg",
        type: "number"
      },
      {
        label: "Потенц",
        field: "potential",
        type: "number"
      },
      {
        label: "Цена",
        field: "price",
        type: "number"
      },
      {
        label: "Был в на",
        field: "wasIn",
        type: "number"
      },
      {
        label: "Продажи",
        field: "salesCount",
        type: "number"
      },
      {
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
  })
};
</script>

<style lang="scss"></style>
