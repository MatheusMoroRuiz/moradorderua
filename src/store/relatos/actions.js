import { api } from "src/boot/axios";

export function inserir({commit}, form) {
    return api.post('/relatos/', form)
};

export function stats({state, commit}) {
    return api.get('/relatos/stats').then(resposta => {
        commit('setStats', resposta.data);
        return resposta;
        
    })
};

