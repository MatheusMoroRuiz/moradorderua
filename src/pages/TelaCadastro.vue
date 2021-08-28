<template>
  <q-page padding>
    <q-btn flat round dense icon="arrow_back" to="/login" />
    <div class="text-center">
      <h4>Ajude os moradores de rua da sua cidade!</h4>
    </div>
    <div class="row justify-center">
      <q-form class="q-gutter-md col-10">
        <m-input label="Nome" />
        <m-input label="E-mail" />
        <m-input label="CPF/CNPJ" />
        <m-input label="Telefone" />
        <m-input label="Senha" />
        <div>
          <m-btn label="CADASTRE-SE" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import MInput from "components/MInput";
import MBtn from 'components/MBtn';
export default {
  components: { MInput, MBtn },
  // name: 'PageName',
};
</script>
