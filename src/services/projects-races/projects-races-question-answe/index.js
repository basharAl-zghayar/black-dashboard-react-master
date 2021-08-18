/* eslint-disable no-useless-concat */

import http from '../../common/http/index';
import AppConsts from '../../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/projectsRaceQuestionAnswer/";


export async function addQuestionAnswer(addQuestionAnswer) {
    const data = await http.post(apiEndpoint + 'add', addQuestionAnswer);
    return data;
}
export async function updateQuestionAnswer(updateQuestionAnswer) {
    const data = await http.put(apiEndpoint + 'edit', updateQuestionAnswer);
    return data;
}
export async function deleteQuestionAnswer(id) {
    const data = await http.delete(apiEndpoint + 'delete/' + `${id}`);
    return data;
}
export async function showAllQuestionAnswers() {
    const data = await http.get(apiEndpoint + 'showAll');
    return data;
}
export async function showQuestionAnswerById(id) {
    const data = await http.get(apiEndpoint + 'showByID/' + `${id}`);
    return data;
}