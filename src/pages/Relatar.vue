<template>
  <q-page padding>
    <div class="q-gutter-md row justify-center">
      <span class="text-weight-bold text-white"
        >Clique abaixo para ativar a sua localização</span
      >
    </div>
    <div class="q-gutter-md row justify-center">
      <q-btn
        color="white"
        class="text-black"
        icon="location_on"
        label="CLIQUE AQUI"
      />
      <q-form class="q-gutter-md col-10">
        <q-select
          outlined
          dark 
          v-model="sexo"
          :options="options"
          color="cyan-5" 
          label="Sexo do morador"
          label-color="white"
        />

        <q-input
          v-model="condicao"
          outlined
          label="Condição física do morador"
          type="textarea"
          color="cyan-5" 
          dark 
          label-color="white"
          placeholder="Exemplo: está com fome, está doente, está com frio, etc."
        />
        <q-input
          v-model="caracteristica"
          outlined
          color="cyan-5" 
          dark
          label="Características do morador"
          type="textarea"
          label-color="white"
          placeholder="Exemplo: cor do cabelo, cor da pele, alto ou baixo, tamanho do cabelo, estilo de roupa, etc."
        />
        <div>
          <q-btn
            size="md"
            class="full-width text-black"
            color="white"
            label="ENVIAR RELATÓRIO"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      sexo: "",
      condicao: "",
      caracteristica: "",
      options: ["Masculino", "Feminino"],
    };
  },
};
</script>
