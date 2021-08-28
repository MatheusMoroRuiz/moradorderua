<template>
  <q-layout class="fundo" view="hHh Lpr fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  // name: 'LayoutName',

}
</script>
<style scoped>
.fundo {
  background: url(~assets/FotoLogin.png) top center no-repeat;
  background-size: cover;
}
</style>
