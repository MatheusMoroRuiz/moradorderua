<template>
  <q-layout view="lHh lpR lFf">
    <q-header class="bg-blue-grey-6">
      <q-toolbar class="text-black">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="400"
      overlay
      behavior="mobile"
    >
      <q-scroll-area
        style="
          height: calc(100% - 200px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item clickable v-ripple to="/ajuda">
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section> Ajuda </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="politicaprivacidade">
            <q-item-section avatar>
              <q-icon name="menu_book" />
            </q-item-section>

            <q-item-section> Politica de Privacidade </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/configuracoes">
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>

            <q-item-section> Configurações </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-list>
        <q-item clickable v-ripple to="">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>

          <q-item-section> Sair </q-item-section>
        </q-item>
      </q-list>
      <q-img
        v-if="usuario != null"
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-btn flat to="/editarperfil">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-btn>
          <div class="text-weight-bold">{{ usuario.nome }}</div>
          <div>{{ usuario.email }}</div>
        </div>
      </q-img>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-blue-grey-6 text-black">
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
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const usuario = computed(() => store.state.usuarios.usuario);

    return {
      drawer: ref(false),
      usuario,
    };
  },
  async mounted() {
    try {
      await this.$store.dispatch("usuarios/carregarToken");
    } catch (e) {
      this.$router.replace("/login");
    }
  },
};
</script>
