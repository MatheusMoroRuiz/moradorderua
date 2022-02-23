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
          v-model="form.nome"
        />

        <q-input
          outlined
          color="cyan-6"
          dark
          label-color="grey-8"
          label="CNPJ"
          v-model="form.cnpj"
        />

        <q-input
          outlined
          color="cyan-6"
          dark
          label-color="grey-8"
          label="CEP"
          v-model="form.ceps"
        />

        <div class="row">
          <div class="col-8 q-mr-md">
            <q-input
              outlined
              color="cyan-8"
              dark
              label-color="grey-8"
              label="Rua"
              v-model="form.rua"
            />
          </div>

          <div class="col-3">
            <q-input
              outlined
              color="cyan-6"
              dark
              label="N°"
              label-color="grey-8"
              v-model="form.numero"
            />
          </div>
        </div>

        <q-input
          outlined
          color="cyan-6"
          dark
          label-color="grey-8"
          label="Bairro"
          v-model="form.bairro"
        />

        <div class="row">
          <div class="col-8 q-mr-md">
            <q-input
              outlined
              color="cyan-8"
              dark
              label-color="grey-8"
              label="Cidade"
              v-model="form.cidade"
            />
          </div>

          <div class="col-3">
            <q-input
              outlined
              color="cyan-6"
              dark
              label="UF"
              label-color="grey-8"
              v-model="form.uf"
            />
          </div>
        </div>

        <div class="row">
          <q-input
            class="col"
            outlined
            color="cyan-6"
            dark
            label-color="grey-8"
            label="Tel"
            v-model="form.telefone"
          />
          <div class="col" />
        </div>
        <div class="row">
          <q-input
            class="col"
            outlined
            color="cyan-6"
            dark
            label-color="grey-8"
            label="Cel"
            v-model="form.celular"
          />
          <div class="col" />
        </div>

        <q-input
          outlined
          dark
          color="cyan-6"
          label="E-mail"
          label-color="grey-8"
          v-model="form.email"
        />

        <q-input
          outlined
          label="Descrição da ONG"
          type="textarea"
          color="cyan-6"
          dark
          label-color="grey-8"
          v-model="form.descricao"
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
    data() {
    return {
      form: {
        nome: "",
        cnpj: "",
        ceps: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: "",
        telefone: "",
        celular: "",
        email: "",
        descricao: "",
      },
    }
    }
};
</script>
