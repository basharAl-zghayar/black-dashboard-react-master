/* eslint-disable no-useless-concat */
import http from '../common/http/index';
import AppConsts from '../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/trainer/";

export async function addTrainer(addTrainers) {
    const data = await http.post(apiEndpoint + 'add', addTrainers);
    return data;
}
export async function updateTrainer(updateTrainers) {
    console.log(updateTrainers);
    const data = await http.put(apiEndpoint + 'edit', updateTrainers);
    return data;
}
export async function deleteTrainer(id) {
    const data = await http.delete(apiEndpoint + 'delete/' + `${id}`);
    return data;
}
export async function showAllTrainers() {
    const data = await http.get(apiEndpoint + 'all');
    return data;
}
export async function showTrainersById(id) {
    const data = await http.get(apiEndpoint + 'showByID/' + `${id}`);
    return data;
}