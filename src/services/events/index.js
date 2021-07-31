import http from '../common/http/index';
import AppConsts from '../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/event/";

export async function addEvent(addEvent) {
    const data = await http.post(apiEndpoint + 'add', { addEvent });
    return data;
}
export async function updateEvent(updateEvent) {
    const data = await http.put(apiEndpoint + 'edit', { updateEvent });
    return data;
}
export async function deleteEvent(id) {
    const data = await http.delete(apiEndpoint + 'delete', { id: id });
    return data;
}
export async function showAllEvents() {
    const data = await http.get(apiEndpoint + 'all');
    return data;
}
export async function showEventById(id) {
    const data = await http.get(apiEndpoint + 'showByID', {
        params: id,
    });
    return data;
}