/* eslint-disable no-useless-concat */

import http from '../common/http/index';
import AppConsts from '../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/Exhibition/";

export async function addExhibition(addExhibition) {
    const data = await http.post(apiEndpoint + 'addExhibition', addExhibition);
    return data;
}
export async function updateExhibition(updateExhibition) {
    const data = await http.put(apiEndpoint + 'editExhibition', updateExhibition);
    return data;
}

export async function deleteExhibition(id) {
    const data = await http.put(apiEndpoint + 'deleteExhibition', { data: { id: id } });
    return data;
}
export async function showAllExhibitions() {
    const data = await http.get(apiEndpoint + 'showAllExhibition');
    return data;
}
export async function showExhibitionById(id) {
    const data = await http.get(apiEndpoint + 'showExhibitionById' + `${id}`);
    return data;
}