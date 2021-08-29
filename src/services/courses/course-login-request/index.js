/* eslint-disable no-useless-concat */
import http from '../../common/http/index';
import AppConsts from '../../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/courseLoginRequest/";

export async function addCourseLoginRequest(addCourseLoginRequest) {
    const data = await http.post(apiEndpoint + 'add', addCourseLoginRequest);
    return data;
}
export async function updateCourseLoginRequest(updateCourseLoginRequest) {
    const data = await http.put(apiEndpoint + 'edit', updateCourseLoginRequest);
    return data;
}

export async function deleteCourseLoginRequest(id) {
    const data = await http.delete(apiEndpoint + 'delete/' + `${id}`);
    return data;
}

export async function showAllCourseLoginRequest() {
    const data = await http.get(apiEndpoint + 'all');
    return data;
}
export async function showCourseLoginRequestAcceptedLogs(id) {
    const data = await http.get(apiEndpoint + 'showAcceptedLogs/' + `${id}`);
    return data;
}
export async function showCourseLoginRequestRejectedLogs() {
    const data = await http.get(apiEndpoint + 'showRejectedLogs');
    return data;
}
export async function acceptLoginRequest({ studentID, courseID }) {
    const data = await http.put(apiEndpoint + 'acceptLoginRequest/' + `${studentID}/` + `${courseID}`);
    return data;
}
export async function rejectLoginRequest({ studentID, courseID }) {
    const data = await http.put(apiEndpoint + 'rejectedLoginRequest/' + `${studentID}/` + `${courseID}`);
    return data;
}
export async function showCourseLoginRequestById(id) {
    const data = await http.get(apiEndpoint + 'showCourseByID/' + `${id}`);
    return data;
}
export async function showCourseLoginRequestByStudentId(id) {
    const data = await http.get(apiEndpoint + 'showStudentByID/' + `${id}`);
    return data;
}