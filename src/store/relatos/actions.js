import { api } from "src/boot/axios";

export function inserir({commit}, form) {
    return api.post('/relatos/', form)
};
