import { api } from "src/boot/axios";

export function listar({state, commit}) {
    return api.get('/ongs/').then(resposta => {
        commit('setOngs', resposta.data);
        return resposta;
    })
};

export function cadastrar({commit, dispatch}, form) {
    return api.post('/ongs/', form).then(resposta => {
        commit('setOngs', resposta.data);
        return resposta;
    })
  
  }