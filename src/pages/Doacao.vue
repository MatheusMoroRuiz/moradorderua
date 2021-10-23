<template>
  <q-page>
    <q-toolbar class="text-white">
      <q-btn flat round dense icon="arrow_back" to="/" />
      <q-toolbar-title class="text-h5">Efetuar Doação</q-toolbar-title>
    </q-toolbar>
    
    <div class="column items-stretch justify-center" style="min-height: calc(100vh - 50px)">
      <div class="q-pa-md justify-center text-white" style="flex: 0; padding-bottom: 50px; ">
        <div class="items-stretch justify-around" style="min-height: calc(30vh - 50px)">
          Enviar Doação
          Extrato
        </div>
      </div>      
      <div class="q-pa-md bg-white" style="flex: 1 0;">
        <div style="margin-top: -50px" class="q-pa-md bg-black text-white text-h5 text-center rounded-borders">
          FORMAS DE DOAÇÃO
        </div>
          <div class="q-pa-md items-start q-gutter-md">
            <q-card class="width: 100% max-width: 250px">
              <q-card-section>
                <div class="text-h5 text-weight-bolder text-black text-h5 ">Cartão de crédito </div>
                 Utilize seu cartão de crédito para efetuar uma doação e nos ajudar com este trabalho.
              </q-card-section>
            </q-card>
            <q-card class="width: 100% max-width: 250px">
              <q-card-section>
                <div class="text-h5 text-weight-bolder text-black text-h5 ">PIX </div>
                 Faça um PIX simples e fácil para efetuar uma doação e nos ajudar com este trabalho.
              </q-card-section>
            </q-card>
            <q-card class="width: 100% max-width: 250px">
              <q-card-section>
                <div class="text-h5 text-weight-bolder text-black text-h5 ">Boleto Bancário</div>
                 Pague através do Boleto para efetuar uma doação e nos ajudar com este trabalho.
              </q-card-section>
            </q-card>
        </div>
      </div>
    </div>
  </q-page>

</template>

<script>
export default {
  // name: 'PageName',
};
</script>
