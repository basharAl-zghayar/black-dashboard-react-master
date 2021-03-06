/* eslint-disable no-useless-concat */
import http from '../common/http/index';
import AppConsts from '../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/course/";

export async function addCourse(addCourse) {
    const data = await http.post(apiEndpoint + 'add', addCourse);
    return data;
}
export async function updateCourse(updateCourse) {
    const data = await http.put(apiEndpoint + 'edit', updateCourse);
    return data;
}
export async function changeState(id, state) {
    const data = await http.put(apiEndpoint + 'changeState', { id: id, state: state });
    return data;
}
export async function deleteCourse(id) {
    const data = await http.delete(apiEndpoint + 'delete/' + `${id}`);
    return data;
}
export async function showAllCourses() {
    const data = await http.get(apiEndpoint + 'all');
    return data;
}
export async function showCourseById(id) {
    const data = await http.get(apiEndpoint + 'showByID/' + `${id}`);
    return data;
}
export async function getCourseQuestionsAndAnswers(id) {
    const data = await http.get(apiEndpoint + 'courseQuestionAnswers', {
        params: id,
    });
    return data;
}