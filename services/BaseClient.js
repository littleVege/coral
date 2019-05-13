import _ from 'lodash'

const formatQuery = query => _.map(query, (val, key) => `${key}=${encodeURIComponent(val)}`).join('=')
const queryStringToObject = queryString => queryString.split('&').reduce((r, item) => {
    let kv = item.split('=')
    r[kv[0]] = decodeURIComponent(kv[1])
    return r
}, {})
export default class BaseClient {
    constructor(baseURL) {
        this.baseURL = baseURL
    }
    _request(method = 'GET', url, query = {}, body, options) {
        method = method.toUpperCase()
        let header = {}
        if (['POST', 'PUT'].includes(method)) {
            header['Content-Type'] = 'application/json'
            header['Accept'] = 'application/json'
            body = JSON.stringify(body)
        }
        if (options.header) {
            header = {
                ...header,
                ...options.header
            }
        }
        if (/\?[a-z0-9A-Z_\-]/.test(url)) {
            let q = queryStringToObject(url.split('?')[1])
            query = {
                ...q,
                ...query
            }
        }
        if (_.keys(query).length) {
            url = url.split('?')[0]+'?'+formatQuery(query)
        }
        return fetch(this.baseURL + url , {
            method: method,
            headers: header,
            body
        }).then(this.handleSuccess.bind(this)).catch(this.handleError.bind(this))
    }
    handleSuccess(response) {
        const resp = JSON.parse(response)
        return resp
    }
    handleError(error) {
        return error
    }
}