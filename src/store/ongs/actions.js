import { api } from "src/boot/axios";

export function listar({state, commit}) {
    return api.get('/ongs/').then(resposta => {
        commit('setOngs', resposta.data);
        return resposta;
    })
};
