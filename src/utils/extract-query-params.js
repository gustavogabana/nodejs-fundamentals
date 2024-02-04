export const extractQueryParams = (query) => {
    return query.substr(1).split('&').reduce((queryParams, param) => {
        const [key, value] = param.split('=')
        queryParams[key] = value
        return queryParams
    }, {})
}

// reduce((queryParams, param), {}): accepts two params, the callback function and the initial value of the new data structure to be returned after the callback is completed
// first parameter of the callback function, queryParams: the name of the new data structure to be returned after the function is completed
// second parameter of the callback function, param: the name of the current element of the iteration
// the second param of the reduce method, {}: the initial value of the new data structure to be created and returned (reduced to) after the callback function (first param of reduce) is completed