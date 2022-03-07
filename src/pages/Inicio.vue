<template>
  <q-page>
    <body>
      <h5
        style="
          color: white;
          text-align: center;
          margin-bottom: 15px;
          margin-top: 20px;
        "
      >
        Nossa intenção com o Empathy
      </h5>
      <p
        style="
          color: white;
          text-align: center;
          font-size: 13px;
          margin: 25px;
          margin-top: 0;
        "
      >
        Cada usuário que tiver o aplicativo instalado em seu aparelho celular,
        poderá de sua cidade relatar todos os moradores de rua que ele encontrar
        em uma determinada localização. Terá um local específico no aplicativo
        de fácil acesso para os usuários concluírem esse relatório. Nós,
        administradores do aplicativo, automaticamente pegaremos esses relatos e
        enviaremos para as ONG’s locais de cada município para que elas façam o
        trabalho de poder ajudar esses moradores de rua. Nós, ao pensarmos na
        criação desse APP tivemos uma visão mais humanitária e de ajuda social
        para com os moradores de rua.
      </p>

      <br />
      <br />
      <section class="estatisticas">
        <q-img
          src="~/assets/space.jpg"
          spinner-color="white"
          height="115px"
          fit="cover"
        >
          <div class="q-ml-sm">
            <table class="corletra">
              <tr>
                <th class="bordas">Número de relatos diários</th>
                <th class="borda">Número de relatos Totais</th>
              </tr>
              <tr>
                <td class="bordas">{{estatistica.dia}}</td>
                <td class="borda">{{estatistica.totais}}</td>
              </tr>
            </table>
          </div>
        </q-img>
      </section>
    </body>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  // name: 'PageName',
  data() {
    return {
      estatistica: {
        dia:"00000",
        totais: "00000"
      }
    };
  },
};
</script>

<style>
/*.fonte {
  font-size: 18px;
  font-weight: bold;
}
.fonte1 {
  font-size: 16px;
}*/
.borda {
  border-left: 0px solid #dddddd;
  text-align: center;
  padding: 9px;
}
.bordas {
  text-align: center;
  padding: 9px;
}

.corletra {
  color: #f7f7f7;
}
</style>
