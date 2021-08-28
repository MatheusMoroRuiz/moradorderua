<template>
<q-page padding class="flex justify-center content-center">  
    <q-form class="q-gutter-y-md form-login q-pa-md rounded-borders">
      <q-input outlined  bg-color="white" shadow-text="Insira seu e-mail" label="Usuário"/>
      <q-input outlined  bg-color="white" shadow-text="Insira sua senha" label="Senha" type="password"/>
      <div>
        <q-btn
          color="black"
          label="Entrar"
          class="full-width"
        />
      </div>

		<div>
			<span class="text-weight-bold text-dark">Não possui conta?</span> 
       <router-link to="/cadastro" class="text-negative text-h6">CADASTRE-SE</router-link>
		</div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
<style scoped>
  .form-login {
    background-color: rgba(254, 254, 254, 0.5);
  }
</style>