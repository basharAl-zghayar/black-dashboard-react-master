import http from '../../common/http/index';
import AppConsts from '../../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/ExhibitionQuestionAnswer/";

export async function addCourse(addCourse) {
    const data = await http.post(apiEndpoint + 'addAnswer', { addCourse });
    return data;
}
export async function updateCourse(updateCourse) {
    const data = await http.put(apiEndpoint + 'editAnswer', { updateCourse });
    return data;
}
export async function changeState(id, state) {
    const data = await http.put(apiEndpoint + 'changeState', { id: id, state: state });
    return data;
}
export async function deleteCourse(id) {
    const data = await http.delete(apiEndpoint + 'delete', { id: id });
    return data;
}
export async function showAllAnswers() {
    const data = await http.get(apiEndpoint + 'all');
    return data;
}
export async function showAllByQuestionID(id) {
    const data = await http.get(apiEndpoint + 'showAllByQuestionID', {
        params: id,
    });
    return data;
}
