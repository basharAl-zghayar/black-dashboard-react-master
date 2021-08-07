/* eslint-disable no-useless-concat */
import http from '../../common/http/index';
import AppConsts from '../../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/ItemCost/";

export async function addItemCost(addItemCosts) {
    const data = await http.post(apiEndpoint + 'addItemCost', addItemCosts);
    return data;
}
export async function updateItemCost(updateItemCosts) {
    const data = await http.put(apiEndpoint + 'editItemCost', updateItemCosts);
    return data;
}
export async function deleteItemCost(id) {
    const data = await http.delete(apiEndpoint + 'deleteItemCost/' + `${id}`);
    return data;
}
export async function showAllItemCosts() {
    const data = await http.get(apiEndpoint + 'showAllItemCost');
    return data;
}
export async function showItemCostByCode(code) {
    const data = await http.get(apiEndpoint + 'showItemCostByCode/' + `${code}`);
    return data;
}