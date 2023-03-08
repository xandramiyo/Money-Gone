import sendRequest from './send-request'
const BASE_URL = '/api/entries'

export async function createEntry(entry) {
    return sendRequest(BASE_URL, 'POST', entry)
}

export async function getAll() {
    return sendRequest(BASE_URL)
}

export async function editEntry(entry) {
    return sendRequest(`${BASE_URL}/${entry.id}/edit`, 'PUT', entry)
}

export async function deleteEntry(entry) {
    return sendRequest(`${BASE_URL}/${entry.id}/delete`, 'DELETE', entry)
}