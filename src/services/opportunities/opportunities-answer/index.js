/* eslint-disable no-useless-concat */

import http from '../../common/http/index';
import AppConsts from '../../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/OpportunityAnswer/";

export async function addOpportunityAnswer(OpportunityAnswer) {
    const data = await http.post(apiEndpoint + 'add', OpportunityAnswer);
    return data;
}
export async function updateOpportunityAnswer(OpportunityAnswer) {
    const data = await http.put(apiEndpoint + 'edit', OpportunityAnswer);
    return data;
}
export async function deleteOpportunityAnswer(id) {
    const data = await http.delete(apiEndpoint + 'delete' + `${id}`);
    return data;
}
export async function showAllOpportunityAnswer() {
    const data = await http.get(apiEndpoint + 'all');
    return data;
}
export async function showOpportunityAnswerById(id) {
    const data = await http.get(apiEndpoint + 'showByID' + `${id}`);
    return data;
}

export async function showStudentAnswer(id) {
    const data = await http.get(apiEndpoint + 'showStudentAnswers' + `${id}`);
    return data;
}
export async function showStudentAnswerInSpecificQuestion(studentId, questionId) {
    const data = await http.get(apiEndpoint + 'showStudentAnswersInSpecificQuestion' + `${studentId}/` + `${questionId}`);
    return data;
}