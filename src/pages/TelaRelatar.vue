<template>
  <q-page padding>
    <div class="q-gutter-md row justify-center">
      <q-btn
        color="white"
        class="text-black"
        icon="location_on"
        label="CLIQUE AQUI"
      />
      <q-form class="q-gutter-md col-10">
        <q-select
          class="full-width"
          outlined
          v-model="model"
          :options="options"
          label="Sexo do morador"
          bg-color="white"
          color="grey-8"
          label-color="grey-8"
        />

        <div class="q-pa-md" style="max-width: 300px">
          <q-input
            v-model="condicao"
            outlined
            label="Condição física do morador"
            type="textarea"
            bg-color="white"
            color="grey-8"
            label-color="grey-8"
          />
        </div>
        <div class="q-pa-md" style="max-width: 300px">
          <q-input
            v-model="caracteristica"
            outlined
            label="Características do morador"
            type="textarea"
            bg-color="white"
            color="grey-8"
            label-color="grey-8"
          />
        </div>
      </q-form>
      <q-btn size="md" color="black" label="ENVIAR RELATÓRIO" />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      condicao: "",
      caracteristica: "",
      options: ["Masculino", "Feminino"],
    };
  },
};
</script>
