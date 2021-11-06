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
    <q-form class="q-gutter-lg col-10">
      <div class="column">
        <label class="text-h6 text-white">Nome</label>
      <q-input
        outlined
        bg-color="white"
        color="grey-8"
        label-color="grey-8"
        placeholder="Atual nome do usuário"
      />
      </div>
      <div class="column">
        <label class="text-h6 text-white">Telefone</label>
      <q-input
        outlined
        bg-color="white"
        color="grey-8"
        label-color="grey-8"
        placeholder="Atual telefone do usuário"
      />
      </div>
      <div class="column">
        <label class="text-h6 text-white">E-mail</label>
      <q-input
        outlined
        bg-color="white"
        color="grey-8"
        label-color="grey-8"
        placeholder="Atual e-mail do usuário" 
      />
      </div>
      <div>
      <q-btn class="full-width" size="md" color="black" label="SALVAR ALTERAÇÕES"/>
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  computed: {
    usuario () {
      return this.$store.state.usuarios.usuario;
    }
  }
 
};
</script>
