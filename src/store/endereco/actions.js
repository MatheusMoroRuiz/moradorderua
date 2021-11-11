import { api } from "src/boot/axios";

export function inserir({commit}, endereco) {
    return api.post('/endereco/', endereco)
};