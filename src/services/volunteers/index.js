import http from '../common/http/index';
import AppConsts from '../../app-consts';

const apiEndpoint = AppConsts.remoteServiceBaseUrl + "/volunteer/";

export async function addVolunteer(addVolunteer) {
    const data = await http.post(apiEndpoint + 'add', addVolunteer);
    return data;
}
export async function updateVolunteer(updateVolunteer) {
    const data = await http.put(apiEndpoint + 'edit', updateVolunteer);
    return data;
}
export async function deleteVolunteer(id) {
    const data = await http.delete(apiEndpoint + 'delete', { data: { id: id } });
    return data;
}
export async function showAllVolunteers() {
    const data = await http.get(apiEndpoint + 'all');
    return data;
}
export async function showVolunteerById(id) {
    const data = await http.get(apiEndpoint + 'showById', {
        params: id,
    });
    return data;
}