import sendRequest from './send-request'
const BASE_URL = '/api/entries'

export async function createEntry(entry) {
    return sendRequest(BASE_URL, 'POST', entry)
}

export async function getAll() {
    return sendRequest(BASE_URL)
}