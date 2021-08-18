/* eslint-disable no-useless-concat */

import http from '../common/http/index';
import AppConsts from '../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/projectsRaces/";

export async function addProjectsRaces(addProjectsRaces) {
    const data = await http.post(apiEndpoint + 'add', addProjectsRaces);
    return data;
}
export async function updateProjectsRaces(updateProjectsRaces) {
    const data = await http.put(apiEndpoint + 'edit', updateProjectsRaces);
    return data;
}

export async function deleteProjectsRaces(id) {
    const data = await http.delete(apiEndpoint + 'delete/' + `${id}`);
    return data;
}
export async function showAllProjectsRaces() {
    const data = await http.get(apiEndpoint + 'all');
    return data;
}
export async function showProjectsRacesById(id) {
    const data = await http.get(apiEndpoint + 'showByID/' + `${id}`);
    return data;
}
