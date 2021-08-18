/* eslint-disable no-useless-concat */
import http from '../../common/http/index';
import AppConsts from '../../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/projectsRacesQuestions/";

export async function addQuestion(add) {
    const data = await http.post(apiEndpoint + 'add', add);
    return data;
}
export async function update(update) {
    const data = await http.put(apiEndpoint + 'edit', update);
    return data;
}
export async function deleteQuestion(id) {
    const data = await http.delete(apiEndpoint + 'delete/' + `${id}/`);
    return data;
}
export async function showAllAnswers() {
    const data = await http.get(apiEndpoint + 'showAll');
    return data;
}
export async function showAllByQuestionID(id) {
    const data = await http.get(apiEndpoint + 'showsByID/' + `${id}`);
    return data;
}
