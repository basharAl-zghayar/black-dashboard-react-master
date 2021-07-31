import http from '../common/http/index';
import AppConsts from '../../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/courseLoginRequest/";

export async function addCourseLoginRequest(addCourseLoginRequest) {
    const data = await http.post(apiEndpoint + 'add', { addCourseLoginRequest });
    return data;
}
export async function updateCourseLoginRequest(updateCourseLoginRequest) {
    const data = await http.put(apiEndpoint + 'edit', { updateCourseLoginRequest });
    return data;
}

export async function deleteCourseLoginRequest(id) {
    const data = await http.delete(apiEndpoint + 'delete', { id: id });
    return data;
}

export async function showAllCourseLoginRequest() {
    const data = await http.get(apiEndpoint + 'all');
    return data;
}
export async function showCourseLoginRequestAcceptedLogs() {
    const data = await http.get(apiEndpoint + 'showAcceptedLogs');
    return data;
}
export async function showCourseLoginRequestRejectedLogs() {
    const data = await http.get(apiEndpoint + 'showRejectedLogs');
    return data;
}
export async function acceptLoginRequest(studentID, courseID) {
    const data = await http.put(apiEndpoint + 'edit', { studentID: studentID, courseID: courseID });
    return data;
}
export async function rejectLoginRequest(studentID, courseID) {
    const data = await http.put(apiEndpoint + 'edit', { studentID: studentID, courseID: courseID });
    return data;
}
