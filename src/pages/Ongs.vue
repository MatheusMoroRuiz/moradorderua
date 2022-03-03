<template>
  <q-page padding>
    <div class="q-gutter-md row justify-center">
      <h6 class="text-white">Lista de ONG's</h6>
    </div>

    <div class="q-pa-md bg-grey-10">
      <q-card v-for="ong in ongs" :key="ong.id" class="q-mb-md my-card">
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              {{ ong.nome }}
            </div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            ></div>
          </div>
        </q-card-section>
        <q-separator />
        <br />
        <q-card-section class="q-pt-none">
          <div class="">
            Rua: <span class="text-caption text-grey">{{ ong.rua }}</span>
            n°: <span class="text-caption text-grey">{{ ong.numero }}</span>
          </div>          
          <div class="">
            Bairro: <span class="text-caption text-grey">{{ ong.bairro }}</span>
          </div>
          <div class="">
            Cidade: <span class="text-caption text-grey">{{ ong.cidade }}, {{ ong.uf }}</span>
            
          </div>
          <div class="">
            
          </div>
          <div class="">
            E-mail: <span class="text-caption text-grey">{{ ong.email }}</span>
          </div>
          <div class="">
            Celular:
            <span class="text-caption text-grey">{{ ong.celular }}</span>
          </div>
          <div class="">
            Telefone:
            <span class="text-caption text-grey">{{ ong.telefone }}</span>
          </div>
          <div class="">
            Descrição:
            <span class="text-caption text-grey">{{ ong.descricao }}</span>
          </div>
        </q-card-section>

        <q-separator />


      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      filter: [],
    };
  },
  mounted() {
    this.$store.dispatch("ongs/listar");
  },

  computed: {
    ongs() {
      return this.$store.state.ongs.ongs;
    },
  },
};
</script>
