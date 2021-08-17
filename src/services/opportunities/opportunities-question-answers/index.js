/* eslint-disable no-useless-concat */

import http from '../../common/http/index';
import AppConsts from '../../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/opportunityQuestionAnswer/";


export async function addQuestionAnswer(addQuestionAnswer) {
    const data = await http.post(apiEndpoint + 'addAnswer', addQuestionAnswer);
    return data;
}
export async function updateQuestionAnswer(updateQuestionAnswer) {
    const data = await http.put(apiEndpoint + 'editAnswer', updateQuestionAnswer);
    return data;
}
export async function deleteQuestionAnswer(id) {
    const data = await http.delete(apiEndpoint + 'deleteAnswer/' + `${id}`);
    return data;
}
export async function showAllQuestionAnswers() {
    const data = await http.get(apiEndpoint + 'showAllAnswer');
    return data;
}
export async function showQuestionAnswerById(id) {
    const data = await http.get(apiEndpoint + 'showAnswersByQuestionID/' + `${id}`);
    return data;
}