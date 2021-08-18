/* eslint-disable no-useless-concat */

import http from '../../common/http/index';
import AppConsts from '../../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/projectsRaceAnswer/";

export async function addProjectsRaceAnswer(ProjectsRaceAnswer) {
    const data = await http.post(apiEndpoint + 'add', ProjectsRaceAnswer);
    return data;
}
export async function updateProjectsRaceAnswer(ProjectsRaceAnswer) {
    const data = await http.put(apiEndpoint + 'edit', ProjectsRaceAnswer);
    return data;
}
export async function deleteProjectsRaceAnswer(id) {
    const data = await http.delete(apiEndpoint + 'delete' + `${id}`);
    return data;
}
export async function showAllProjectsRaceAnswer() {
    const data = await http.get(apiEndpoint + 'all');
    return data;
}
export async function showProjectsRaceAnswerById(id) {
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