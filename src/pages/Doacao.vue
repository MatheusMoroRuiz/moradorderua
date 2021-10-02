<template>
  <q-page>
    <q-header class="bg-grey-5">
      <q-toolbar class="text-black">
        <q-btn flat round dense icon="arrow_back" to="/" />
        <q-toolbar-title class="text-h5">Efetuar Doação</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <div class="column items-stretch justify-evenly" style="min-height: calc(100vh - 50px)">
      <div class="q-pa-md justify-evenly" style="flex: 0; padding-bottom: 50px; ">
        <q-btn flat label="Enviar Doação" no-caps/> <q-btn flat label="Extrato" no-caps/>
      </div>
      <div class="q-pa-md bg-white" style="flex: 1 0;">
        <div
          style="margin-top: -50px"
          class="q-pa-md bg-black text-white text-h5 text-center rounded-borders">
          FORMAS DE DOAÇÃO
        </div>
          <q-btn label="Teste" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
