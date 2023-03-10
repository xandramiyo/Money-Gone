import sendRequest from './send-request'
const BASE_URL = '/api/entries'

export async function createEntry(entry) {
    console.log('entry', entry.category)
    return sendRequest(BASE_URL, 'POST', entry)
}

export async function getAll() {
    return sendRequest(BASE_URL)
}

export async function editEntry(entryId, entry) {
    return sendRequest(`${BASE_URL}/${entryId}/edit`, 'PUT', entry)
}

export async function deleteEntry(entry) {
    return sendRequest(`${BASE_URL}/${entry.id}/delete`, 'DELETE', entry)
}