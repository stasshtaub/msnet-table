module.exports = {
  publicPath: "",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/scss/utils/variables";`
      }
    }
  }
}