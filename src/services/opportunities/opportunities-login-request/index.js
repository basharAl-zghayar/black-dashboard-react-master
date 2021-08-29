/* eslint-disable no-useless-concat */
import http from '../../common/http/index';
import AppConsts from '../../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/OpportunityLoginRequest/";

export async function addOpportunityLoginRequest(OpportunityLoginRequest) {
    const data = await http.post(apiEndpoint + 'add', OpportunityLoginRequest);
    return data;
}
export async function updateOpportunityLoginRequest(OpportunityLoginRequest) {
    const data = await http.put(apiEndpoint + 'edit', OpportunityLoginRequest);
    return data;
}
export async function deleteOpportunityLoginRequest(id) {
    const data = await http.delete(apiEndpoint + 'delete/' + `${id}`);
    return data;
}
export async function showAcceptedLogs(id) {
    const data = await http.get(apiEndpoint + 'showAcceptedLogs/' + `${id}`);
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
export async function acceptLoginRequest({ studentID, OpportunityID }) {
    const data = await http.put(apiEndpoint + 'acceptLoginRequest/' + `${studentID}/` + `${OpportunityID}`);
    return data;
}
export async function rejectLoginRequest({ studentID, OpportunityID }) {
    const data = await http.put(apiEndpoint + 'rejectedLoginRequest/' + `${studentID}/` + `${OpportunityID}`);
    return data;
}
export async function showOpportunityLoginRequestById(id) {
    const data = await http.get(apiEndpoint + 'showOpportunityByID/' + `${id}`);
    return data;
}
export async function showOpportunityLoginRequestByStudentId(id) {
    const data = await http.get(apiEndpoint + 'showStudentByID/' + `${id}`);
    return data;
}