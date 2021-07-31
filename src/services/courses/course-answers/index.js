import http from '../common/http/index';
import AppConsts from '../../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/courseAnswer/";

export async function addCourseAnswer(addCourseAnswer) {
    const data = await http.post(apiEndpoint + 'add', { addCourseAnswer });
    return data;
}
export async function updateCourseAnswer(updateCourseAnswer) {
    const data = await http.put(apiEndpoint + 'edit', { updateCourseAnswer });
    return data;
}

export async function deleteCourseAnswer(id) {
    const data = await http.delete(apiEndpoint + 'delete', { id: id });
    return data;
}

export async function showAllCourseAnswer() {
    const data = await http.get(apiEndpoint + 'all');
    return data;
}
export async function showCourseAnswerById(id) {
    const data = await http.get(apiEndpoint + 'showByID', {
        params: id,
    });
    return data;
}
export async function showStudentAnswer(id) {
    const data = await http.get(apiEndpoint + 'showByID', {
        params: id,
    });
    return data;
}
export async function showStudentAnswerInSpecificQuestion(studentId, questionId) {
    const data = await http.get(apiEndpoint + 'showByID', {
        params: { studentId, questionId },
    });
    return data;
}
