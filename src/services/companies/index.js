/* eslint-disable no-useless-concat */
import http from '../common/http/index';
import AppConsts from '../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/company/";

export async function addCompany(addCompany) {
    const data = await http.post(apiEndpoint + 'addCompany', addCompany);
    return data;
}
export async function updateCompany(updateCompany) {
    const data = await http.put(apiEndpoint + 'editCompany', updateCompany);
    return data;
}
export async function deleteCompany(id) {
    const data = await http.delete(apiEndpoint + 'deleteCompany', { id: id });
    return data;
}
export async function showAllCompanies() {
    const data = await http.get(apiEndpoint + 'showAllCompany');
    return data;
}
export async function showCompanyById(id) {
    const data = await http.get(apiEndpoint + 'showCompanyByID/' + `${id}`);
    return data;
}