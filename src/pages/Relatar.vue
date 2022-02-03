<template>
  <q-page padding >
    <div class="row justify-center">
      <span class="text-white"> Clique no botão abaixo para ativar sua localização </span>
      <q-form class="q-gutter-md col-10">
        <div>
        <q-btn color="white" class="text-black full-width" label="Localização" @click="consultarLocalizacao" />
        
        </div>

        <q-input
          outlined
          color="cyan-6"
          dark
          label-color="grey-8"
          label="Rua"
          v-model="endereco.logradouro"
        />
        <q-input
          outlined
          color="cyan-6"
          dark
          label-color="grey-8"
          label="Bairro"
          v-model="endereco.bairro"
        />

        <div class="row">
          <div class="col">
            <q-input
              outlined
              color="cyan-6"
              dark
              label-color="grey-8"
              label="Cidade"
              v-model="endereco.cidade"
            />
          </div>
          <div class="col-4">
            <q-input
              outlined
              color="cyan-6"
              dark
              label-color="grey-8"
              label="Estado"
              v-model="endereco.estado"
            />
          </div>
        </div>

        <q-select
          outlined
          dark
          v-model="form.sexo"
          :options="options"
          color="cyan-6"
          label="Sexo do morador"
          label-color="grey-8"
        />

        <q-input
          v-model="form.condicaoFisica"
          outlined
          label="Condição física do morador"
          type="textarea"
          color="cyan-6"
          dark
          label-color="grey-8"
          placeholder="Exemplo: está com fome, está doente, está com frio, etc."
        />
        <q-input
          v-model="form.caracteristicas"
          outlined
          color="cyan-6"
          dark
          label="Características do morador"
          type="textarea"
          label-color="grey-8"
          placeholder="Exemplo: cor do cabelo, cor da pele, alto ou baixo, tamanho do cabelo, estilo de roupa, etc."
        />
        <div>
          <q-btn
            size="md"
            class="full-width text-black"
            color="white"
            label="ENVIAR RELATÓRIO"
            @click="enviarForm()"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {   
      form: {
        sexo: "",
        condicaoFisica: "",
        caracteristicas: "",

      },
      endereco: {
        logradouro: "",      
        bairro: "",
        cidade: "",
        estado: "",
        lat: [],
        lng: [],
      },
      options: ["Masculino", "Feminino"],
      
      
    };
  },
  methods: {
    consultarLocalizacao() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.endereco.lat = position.coords.latitude,                 
        this.endereco.lng = position.coords.longitude

        console.log(this.endereco)

        this.buscar()       
                    
      });         
    },

    buscar() {             
      this.$store.dispatch("maps/getAddress", this.endereco).then(r => {
        console.log(r)
        this.endereco.logradouro = r.data.results[0].address_components[1].long_name +", " + r.data.results[0].address_components[0].long_name;
        this.endereco.bairro = r.data.results[0].address_components[2].long_name
        this.endereco.cidade = r.data.results[0].address_components[3].long_name
        this.endereco.estado = r.data.results[0].address_components[4].long_name      
      });
    },

    enviarForm() {
      var dados = {
        ...this.form,
        ...this.endereco,
      };
      this.$store
        .dispatch("relatos/inserir", dados)
        .then((resp) => {
          this.$q.notify({
            message: "Inserido com sucesso!",
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
        });
      this.$store
        .dispatch("endereco/inserir", dados)
        .then((resp) => {
          this.$q.notify({
            message: "Inserido com sucesso!",
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
        });      
    },  

  },

};

</script>

