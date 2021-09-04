<template>
  <q-page padding class="flex justify-center content-center">
    <q-form class="q-gutter-y-md form-login q-pa-md rounded-borders">
      <div class="text-center">
        <span class="text-weight-bold text-dark text-h5">Faça seu login!</span>
      </div>
      <m-input placeholder="Insira seu e-mail" v-model="form.email" label="E-mail" />
      <m-input placeholder="Insira sua senha" v-model="form.senha" label="Senha" type="password" />
      <div>
        <m-btn label="Entrar" @click="logar()" />
      </div>

      <div>
        <span class="text-weight-bold text-dark">Não possui conta?</span>
        <router-link to="/cadastro" class="text-negative text-h6"
          >CADASTRE-SE</router-link
        >
      </div>
    </q-form>
  </q-page>
</template>

<script>
import MInput from "components/MInput";
import MBtn from "components/MBtn";
export default {
  components: { MInput, MBtn },
  // name: 'PageName',

 data(){
    return {
      form: {
        email: "",
        senha: ""
      }
    }
  }
};
</script>
<style scoped>
.form-login {
  background-color: rgba(254, 254, 254, 0.5);
}
</style>
