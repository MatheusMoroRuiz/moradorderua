<template>
  <q-page padding>
    <div class="q-gutter-md row justify-center">
      <h6 class="text-white">Lista de ONG's presente em sua cidade</h6>
    </div>

    <div class="q-pa-md bg-grey-10 text-white">
      <q-list dark bordered separator>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label class="text-h6">{{ ong1[0] }}</q-item-label>
            <q-item-label caption>{{ ong1[1] }}</q-item-label>
          </q-item-section>
        </q-item>
          <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label class="text-h6">{{ ong2[0] }}</q-item-label>
            <q-item-label caption>{{ ong2[1] }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label class="text-h6">{{ ong3[0] }}</q-item-label>
            <q-item-label caption>{{ ong3[1] }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label class="text-h6">{{ ong4[0] }}</q-item-label>
            <q-item-label caption>{{ ong4[1] }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label class="text-h6">{{ ong5[0] }}</q-item-label>
            <q-item-label caption>{{ ong5[1] }}</q-item-label>
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
      ong1: ["ONG 1", "ONG de Bauru para ajudar Moradores"],
      ong2: ["ONG 2", "ONG de Marília para ajudar Moradores"],
      ong3: ["ONG 3", "ONG de Jaú para ajudar Moradores"],
      ong4: ["ONG 4", "ONG de Guarulhos para ajudar Moradores"],
      ong5: ["ONG 5", "ONG de São Paulo para ajudar Moradores"],
    };
  },
};
</script>
