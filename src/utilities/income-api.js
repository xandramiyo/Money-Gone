import sendRequest from './send-request'
const BASE_URL = '/api/income'

export async function addIncome(incomeData) {
    return sendRequest(BASE_URL, 'POST', incomeData)
}

export async function getAll() {
    return sendRequest(BASE_URL)
}

export async function deleteIncome(income) {
    console.log(income._id)
    return sendRequest(`${BASE_URL}/${income._id}/delete`, 'DELETE', income)
}