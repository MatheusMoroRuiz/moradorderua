<template>
  <q-page padding>
    <q-btn flat round color="white" dense icon="arrow_back" to="/" />

    <div class="row justify-center">
      <q-form class="q-gutter-md col-10">
        <div class="row justify-center">
          <p class="text-h5 text-white q-ma-none">Cadastro de Ong's</p>
        </div>
        <q-input
          outlined
          color="cyan-6"
          dark
          label-color="grey-8"
          label="Nome da ONG"
        />

        <q-input
          outlined
          color="cyan-6"
          dark
          label-color="grey-8"
          label="CNPJ"
        />

        <q-input
          outlined
          color="cyan-6"
          dark
          label-color="grey-8"
          label="CEP"
        />
        <div class="row">
          <div class="col-8">
            <q-input
              outlined
              color="cyan-6"
              dark
              label-color="grey-8"
              label="Rua"
            />
          </div>
          <div class="col">
            <q-input
              outlined
              color="cyan-6"
              dark
              label-color="grey-8"
              label="N°"
            />
          </div>
        </div>

        <q-input
          outlined
          color="cyan-6"
          dark
          label-color="grey-8"
          label="Bairro"
        />

        <div class="row">
          <div class="col-8">
            <q-input
              outlined
              color="cyan-6"
              dark
              label-color="grey-8"
              label="Cidade"
            />
          </div>
          <div class="col">
            <q-input
              outlined
              color="cyan-6"
              dark
              label="UF"
              label-color="grey-8"
            />
          </div>
        </div>

        <q-input
          outlined
          color="cyan-6"
          dark
          label-color="grey-8"
          label="Telefone"
        />

        <q-input
          outlined
          dark
          color="cyan-6"
          label="E-mail"
          label-color="grey-8"
        />

        <q-input
          outlined
          label="Descrição da ONG"
          type="textarea"
          color="cyan-6"
          dark
          label-color="grey-8"
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
  // name: 'PageName',
};
</script>
