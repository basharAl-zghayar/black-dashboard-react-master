/* eslint-disable no-useless-concat */
import http from '../../common/http/index';
import AppConsts from '../../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/ExpansiveCost/";

export async function addExpansiveCosts(addExpansiveCosts) {
    const data = await http.post(apiEndpoint + 'addExpansiveCost', addExpansiveCosts);
    return data;
}
export async function updateExpansiveCosts(updateExpansiveCosts) {
    const data = await http.put(apiEndpoint + 'editExpansiveCost', updateExpansiveCosts);
    return data;
}
export async function changeState(id, state) {
    const data = await http.put(apiEndpoint + 'changeState/' + `${id}/` + `${state}`);
    return data;
}
export async function deleteExpansiveCosts(id) {
    const data = await http.delete(apiEndpoint + 'deleteExpansiveCost/' + `${id}`);
    return data;
}
export async function showAllExpansiveCosts() {
    const data = await http.get(apiEndpoint + 'showAllExpansiveCost');
    return data;
}
export async function showExpansiveCostsById(code) {
    const data = await http.get(apiEndpoint + 'showExpansiveCostsById/' + `${code}`);
    return data;
}
export async function showExpansiveByItemCode(code) {
    const data = await http.get(apiEndpoint + 'showItemsByExpansiveCode/' + `${code}`);
    return data;
}
export async function endPointMonth(monthDate) {
    const data = await http.post(apiEndpoint + 'endPointMonth', monthDate);
    return data;
}
export async function endPointYear(yearDate) {
    const data = await http.post(apiEndpoint + 'endPointYear', yearDate);
    return data;
}
export async function endPointAllMonthInYear(yearDate) {
    const data = await http.post(apiEndpoint + 'endPointAllMonthInYear', yearDate);
    return data;
}