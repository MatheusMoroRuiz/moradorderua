<template>
  <q-page padding>
    <div class="q-gutter-md row justify-center">
      <h6 class="text-white">Lista de ONG's</h6>
    </div>

    <div class="q-pa-md bg-grey-10">

    <q-card v-for="ong in ongs" :key="ong.id" class="q-mb-md my-card">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14761.89853363644!2d-49.0514103!3d-22.33570045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf6767accbc561%3A0x9a34c30518a523d6!2sBauru%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1634946053630!5m2!1spt-BR!2sbr" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

      <q-card-section>
        <q-btn
          fab
          color="blue"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{ ong.nome }}
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            250 ft
          </div>
        </div>

      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          {{ ong.telefone }}
        </div>
        <div class="text-caption text-grey">
          {{ ong.descricao }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <label class="text-h6"> DOAÇÃO </label>
        <q-btn flat round icon="volunteer_activism" />
      </q-card-actions>
    </q-card>
</div>
  </q-page>
</template>

<script>
export default {
data(){
  return {
    filter:[]
  }
},
mounted () {
  this.$store.dispatch("ongs/listar");

},

computed: {
  ongs () {
    return this.$store.state.ongs.ongs;
  }
},

};
</script>
