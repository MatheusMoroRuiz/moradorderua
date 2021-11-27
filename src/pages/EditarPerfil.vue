<template>
  <q-page padding>
    <div class="row items-center">
      <q-btn flat color="white" round dense icon="arrow_back" to="/" />
      <p class="text-h5 q-ma-none text-white">Editar Perfil</p>
    </div>

    <div class="column items-center">
      <q-btn flat>
        <q-avatar size="110px">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
      </q-btn>
      <p class="text-h5 text-white">Alterar Foto</p>
    </div>
    <q-form class="q-bt-3 q-gutter-lg col-10">
      <div class="column">
        <h6 class="q-mt-none q-mb-sm text-white">
          Altere suas informações aqui:
        </h6>
        <label class="text-h6 text-white">Nome</label>
        <q-input
          outlined
          v-model="form.nome"
          bg-color="white"
          color="grey-8"
          label-color="grey-8"
          placeholder="Escreva aqui o seu novo nome"
        />
      </div>
      <div class="column">
        <label class="text-h6 text-white">Telefone</label>
        <q-input
          outlined
          v-model="form.telefone"
          bg-color="white"
          color="grey-8"
          label-color="grey-8"
          placeholder="Escreva aqui o seu novo telefone"
        />
      </div>
      <div class="column">
        <label class="text-h6 text-white">E-mail</label>
        <q-input
          outlined
          v-model="form.email"
          bg-color="white"
          color="grey-8"
          label-color="grey-8"
          placeholder="Escreva aqui o seu novo email"
        />
      </div>
      <div>
        <q-btn
          class="full-width"
          size="md"
          color="black"
          label="SALVAR ALTERAÇÕES"
          @click="alterar()"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  data(){
    return {
      form: {
        nome: "",
        telefone: "",
        email: ""
      }
    }
  },
  computed: {
    usuario() {
      return this.$store.state.usuarios.usuario;
    },
  },
  methods: {
    alterar() {
      var dados = {
        id: this.usuario.id,
        ...this.form,
      };
      this.$store
        .dispatch("usuarios/alterar", dados)
        .then((resp) => {
          this.$q.notify({
            message: "Alterado com sucesso!",
            color: "positive",
          });
        })
        .catch((erro) => {
          var mensagens = erro.response.data;
          for (var campo in mensagens) {
            for (var msg in mensagens[campo]) {
              this.$q.notify({
                message: `Erro ${campo}: ${mensagens[campo][msg]}`,
                color: "negative",
              });
            }
          }
        });
    },
  },
  mounted() { 
   this.form = this.usuario;
  }
};
</script>
<style scoped>
.linha {
  border-top: 1px solid white;
  margin: 20px 0;
}
</style>
