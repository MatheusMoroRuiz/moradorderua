
<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-black">
        <q-tabs>
          <q-route-tab icon="home" label="Início" to="/" />
          <q-route-tab icon="assignment" label="Relatar" to="/relatar" />
          <q-route-tab icon="location_on" label="Localização" to="/localizacao" />
          <q-route-tab icon="format_list_bulleted" label="ONG's" to="/ongs" />
        </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
};
</script>

