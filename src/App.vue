<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // created() {
  //   const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
  //   console.log(process.env.APIPATH ,process.env.CUSTOMPTH);
  //   // 'https://vue-course-api.hexschool.io/api/jackyu/products'
  //   // API伺服器路徑
  //   // 所申請的APIPath
  //   this.$http.get(api).then((response) => {
  //     console.log(response.data)
  //   });
  // }
}
</script>

<style lang="scss">
  @import "./assets/all";
</style>
