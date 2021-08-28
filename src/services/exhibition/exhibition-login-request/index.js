/* eslint-disable no-useless-concat */

import http from '../../common/http/index';
import AppConsts from '../../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/ExhibitionLoginRequest/";

export async function addExhibitionLoginRequest(ExhibitionAnswer) {
    const data = await http.post(apiEndpoint + 'add', ExhibitionAnswer);
    return data;
}
export async function updateExhibitionLoginRequest(ExhibitionAnswer) {
    const data = await http.put(apiEndpoint + 'edit', ExhibitionAnswer);
    return data;
}
export async function deleteExhibitionLoginRequest(id) {
    const data = await http.delete(apiEndpoint + 'delete/' + `${id}`);
    return data;
}
export async function showAcceptedLogs() {
    const data = await http.get(apiEndpoint + 'showAcceptedLogs');
    return data;
}
export async function showRejectedLogs() {
    const data = await http.get(apiEndpoint + 'showRejectedLogs');
    return data;
}
export async function showAll(id) {
    const data = await http.get(apiEndpoint + 'all');
    return data;
}
export async function acceptLoginRequest(studentID, ExhibitionID) {
    const data = await http.put(apiEndpoint + 'edit/' + `${studentID}/` + `${ExhibitionID}`);
    return data;
}
export async function rejectLoginRequest(studentID, exhibitionID) {
    const data = await http.put(apiEndpoint + 'edit/' + `${studentID}/` + `${exhibitionID}`);
    return data;
}
export async function showExhibitionLoginRequestById(id) {
    const data = await http.get(apiEndpoint + 'showExhibitionByID/' + `${id}`);
    return data;
}
export async function showExhibitionLoginRequestByStudentId(id) {
    const data = await http.get(apiEndpoint + 'showStudentByID/' + `${id}`);
    return data;
}