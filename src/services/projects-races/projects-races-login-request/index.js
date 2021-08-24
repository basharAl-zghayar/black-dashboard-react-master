/* eslint-disable no-useless-concat */
import http from '../../common/http/index';
import AppConsts from '../../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/projectsRaceLoginRequest/";

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
export async function showAcceptedLogs() {
    const data = await http.get(apiEndpoint + 'showAcceptedLogs');
    return data;
}
export async function showRejectedLogs() {
    const data = await http.get(apiEndpoint + 'showRejectedLogs');
    return data;
}
export async function showAll() {
    const data = await http.get(apiEndpoint + 'all');
    return data;
}
export async function acceptLoginRequest(studentID, projectsRaceID) {
    const data = await http.put(apiEndpoint + 'acceptLoginRequest/' + `${studentID}/` + `${projectsRaceID}`);
    return data;
}
export async function rejectLoginRequest(studentID, projectsRaceID) {
    const data = await http.put(apiEndpoint + 'rejectedLoginRequest/' + `${studentID}/` + `${projectsRaceID}`);
    return data;
}
export async function showProjectsRaceLoginRequestById(id) {
    const data = await http.get(apiEndpoint + 'showProjectsRaceByID/' + `${id}`);
    return data;
}
export async function showOpportunityLoginRequestByStudentId(id) {
    const data = await http.get(apiEndpoint + 'showStudentByID/' + `${id}`);
    return data;
}
