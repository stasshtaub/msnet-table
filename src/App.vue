<template>
  <HomeTable />
</template>

<script>
import HomeTable from "@/components/Home/HomeTable";

export default {
  name: "App",

  components: { HomeTable }
};
</script>

<style lang="scss">
@import "~@/scss/base/reset";
@import "~@/scss/base/typography";
</style>
