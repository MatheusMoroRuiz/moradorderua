<template>
  <q-page padding>
    <div class="q-gutter-md row justify-center">
      <h6>Lista de ONG's presente em sua cidade</h6>
    </div>
    <q-list bordered separator>
        <q-item-section>
          <q-item-label class="text-h5">{{ $data.ongs }}</q-item-label>
          <q-item-label class="text-h6" caption>{{ $data.descricao }}</q-item-label>
        </q-item-section>
    </q-list>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data (){
    return {
      ongs: 
        "Caridade",
      descricao:
        "Ajudamos moradores de rua"
    }
  }
}
</script>
