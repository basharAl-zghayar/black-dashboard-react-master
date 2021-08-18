/* eslint-disable no-useless-concat */

import http from '../common/http/index';
import AppConsts from '../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/opportunity/";

export async function addOpportunity(addOpportunity) {
    const data = await http.post(apiEndpoint + 'addOpportunity', addOpportunity);
    return data;
}
export async function updateOpportunity(updateOpportunity) {
    const data = await http.put(apiEndpoint + 'editOpportunity', updateOpportunity);
    return data;
}

export async function deleteOpportunity(id) {
    const data = await http.put(apiEndpoint + 'deleteOpportunity/' + `${id}`);
    return data;
}
export async function showAllOpportunity() {
    const data = await http.get(apiEndpoint + 'showAllOpportunity');
    return data;
}
export async function showOpportunityById(id) {
    const data = await http.get(apiEndpoint + 'showOpportunityById/' + `${id}`);
    return data;
}
export async function changeStateOpportunity(id, state) {
    const data = await http.put(apiEndpoint + 'changeStateOpportunity' + `${id}/` + `${state}`);
    return data;
}