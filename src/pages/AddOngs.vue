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
              label="*Cidade"
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

        <q-input
          class="col"
          outlined
          color="cyan-6"
          dark
          label-color="grey-8"
          label="Tel"
          v-model="form.telefone"
        />
        <q-input
          class="col"
          outlined
          color="cyan-6"
          dark
          label-color="grey-8"
          label="Cel"
          v-model="form.celular"
        />
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
            label="CADASTRAR"
            @click="enviarCadastro()"
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
    };
  },
  methods: {
    enviarCadastro() {
      var dados = {
        ...this.form,
        
      };
      if( !(this.form.nome == "" || this.form.cnpj == "" || this.form.ceps == "" || this.form.rua == "" || this.form.numero == "" ||
       this.form.bairro == "" || this.form.cidade == "" || this.form.uf == ""  ||
        this.form.email == "" || this.form.descricao == "" )) {
      console.log(this.form)
      this.$store
        .dispatch("ongs/cadastrar", dados)
        .then((resp) => {
          console.log(this.dados)
          this.$q.notify({
            message:
              "Cadastro enviado com sucesso! Agora iremos analisar as informações antes de postá-la, por favor aguarde.",
            color: "positive",
            position: "center",
          });
        })
        .catch((erro) => {
          console.log(erro.response);
          var mensagens = erro.response.data.errors;
          for (var i in mensagens) {
            this.$q.notify({
              message: mensagens[i].message,
              color: "negative",
            });
          }
        })
       }
      else {
        this.$q.notify({
          message: "Preencha todos os dados obrigatórios",
          color: "negative",
        });
      }
    },
  },
};
</script>
