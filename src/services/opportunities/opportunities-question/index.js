/* eslint-disable no-useless-concat */
import http from '../../common/http/index';
import AppConsts from '../../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/opportunityQuestion/";

export async function addOpportunityQuestion(addOpportunity) {
    const data = await http.post(apiEndpoint + 'addOpportunityQuestion', addOpportunity);
    return data;
}
export async function updateOpportunityQuestion(updateOpportunity) {
    const data = await http.put(apiEndpoint + 'editOpportunityQuestion', updateOpportunity);
    return data;
}
export async function deleteOpportunityQuestion(id) {
    const data = await http.delete(apiEndpoint + 'deleteOpportunityQuestion' + `${id}/`);
    return data;
}
export async function showAllAnswers() {
    const data = await http.get(apiEndpoint + 'showAllOpportunityQuestion');
    return data;
}
export async function showAllByQuestionID(id) {
    const data = await http.get(apiEndpoint + 'showOpportunityQuestionsByOpportunityID/' + `${id}`);
    return data;
}
