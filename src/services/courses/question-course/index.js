import http from '../../common/http/index';
import AppConsts from '../../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/question/";

export async function addQuestion(addQuestion) {
    const data = await http.post(apiEndpoint + 'add', addQuestion);
    return data;
}
export async function updateQuestion(updateQuestion) {
    const data = await http.put(apiEndpoint + 'edit', updateQuestion);
    return data;
}
export async function deleteQuestion(id) {
    const data = await http.delete((apiEndpoint + 'delete/').concat(`${id}`));
    return data;
}
export async function showAllQuestions() {
    const data = await http.get(apiEndpoint + 'all');
    return data;
}
export async function showQuestionById(id) {
    const data = await http.get((apiEndpoint + 'showByID/').concat(`${id}`));
    return data;
}