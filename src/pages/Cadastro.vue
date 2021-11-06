<template>
  <q-page padding>
    <q-btn flat color="white" round dense icon="arrow_back" to="/login" />
    <div class="text-center">
      <h4 class="text-white">Ajude os moradores de rua da sua cidade!</h4>
    </div>
    <div class="row justify-center">
      <q-form class="q-gutter-md col-10">
        <m-input v-model="form.nome" label="Nome" />
        <m-input v-model="form.email" label="E-mail" />
        <m-input v-model="form.documento" label="CPF" />
        <m-input v-model="form.telefone" label="Telefone" />
        <m-input v-model="form.senha" label="Senha" type="password" />
        <m-input
          v-model="form.confirmarsenha"
          label="Confirmar senha"
          type="password"
        />
        <div>
          <m-btn label="CADASTRE-SE" @click="enviarForm()" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import MInput from "components/MInput";
import MBtn from "components/MBtn";
export default {
  components: { MInput, MBtn },
  // name: 'PageName',
  data() {
    return {
      form: {
        nome: "",
        email: "",
        documento: "",
        telefone: "",
        senha: "",
        confirmarsenha: "",
      },
    };
  },
  methods: {
    enviarForm() {
      var dados = {
        ...this.form,
      };
      this.$store
        .dispatch("usuarios/inserir", dados)
        .then((resp) => {
          this.$q.notify({
            message: "Inserido com sucesso!",
            color: "positive",
          });
          this.$router.push("/");
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
};
</script>
