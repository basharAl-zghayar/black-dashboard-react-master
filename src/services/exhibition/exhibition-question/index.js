import http from '../../common/http/index';
import AppConsts from '../../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/ExhibitionQuestionAnswer/";

export async function addExhibition(addExhibitionQuestion) {
    const data = await http.post(apiEndpoint + 'addExhibitionQuestion', { addExhibitionQuestion });
    return data;
}
export async function updateExhibitionQuestion(updateExhibition) {
    const data = await http.put(apiEndpoint + 'editExhibitionQuestion', { updateExhibition });
    return data;
}

export async function deleteExhibitionQuestion(id) {
    const data = await http.delete(apiEndpoint + 'deleteExhibitionQuestion', { id: id });
    return data;
}
export async function showAllExhibitionQuestions() {
    const data = await http.get(apiEndpoint + 'showAllExhibitionQuestions');
    return data;
}
export async function showExhibitionQuestionByExhibitionId(id) {
    const data = await http.get(apiEndpoint + 'showExhibitionQuestionByExhibitionId', {
        params: id,
    });
    return data;
}