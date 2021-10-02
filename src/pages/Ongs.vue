<template>
  <q-page padding>
    <div class="q-gutter-md row justify-center">
      <h6 class="text-white">Lista de ONG's presente em sua cidade</h6>
    </div>

    <div class="q-pa-md bg-grey-10 text-white">
      <q-list dark bordered separator>
        <q-item v-for="ong in ongs" :key="ong.id" clickable v-ripple>
          <q-item-section>
            <q-item-label class="text-h6">{{ ong.nome }}</q-item-label>
            <q-item-label caption>{{ ong.desc }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    ongs(){
      return this.$store.state.ongs.ongs;
    }
  }
};
</script>
