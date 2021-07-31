import http from '../../common/http/index';
import AppConsts from '../../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/ExhibitionAnswer/";

export async function addEvent(ExhibitionAnswer) {
    const data = await http.post(apiEndpoint + 'add', { ExhibitionAnswer });
    return data;
}
export async function updateEvent(ExhibitionAnswer) {
    const data = await http.put(apiEndpoint + 'edit', { ExhibitionAnswer });
    return data;
}
export async function deleteEvent(id) {
    const data = await http.delete(apiEndpoint + 'delete', { id: id });
    return data;
}
export async function showAllExhibitionAnswer() {
    const data = await http.get(apiEndpoint + 'all');
    return data;
}
export async function showExhibitionAnswerById(id) {
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
        params: [studentId, questionId]
    });
    return data;
}