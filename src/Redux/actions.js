import { apiCall } from './store'

export function ajaxcall(payload) {
    return {
        type: apiCall,
        payload
    }
}