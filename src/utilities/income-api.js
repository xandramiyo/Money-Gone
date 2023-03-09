import sendRequest from './send-request'
const BASE_URL = '/api/income'

export async function addIncome(incomeData) {
    return sendRequest(BASE_URL, 'POST', incomeData)
}