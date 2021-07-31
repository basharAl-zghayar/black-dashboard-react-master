import http from '../common/http/index';
import AppConsts from '../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/ExhibitionQuestionAnswer/";

export async function addExhibition(addExhibition) {
    const data = await http.post(apiEndpoint + 'addExhibition', { addExhibition });
    return data;
}
export async function updateExhibition(updateExhibition) {
    const data = await http.put(apiEndpoint + 'editExhibition', { updateExhibition });
    return data;
}

export async function deleteExhibition(id) {
    const data = await http.put(apiEndpoint + 'deleteExhibition', { id: id });
    return data;
}
export async function showAllExhibitions() {
    const data = await http.get(apiEndpoint + 'showAllExhibitions');
    return data;
}
export async function showExhibitionById(id) {
    const data = await http.get(apiEndpoint + 'showExhibitionById', {
        params: id,
    });
    return data;
}