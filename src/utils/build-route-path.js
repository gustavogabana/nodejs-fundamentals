export const buildRoutePath = (path) => {
    const routeParamsRegex = /:([a-zA-Z]+)/g
    const pathWithParams = path.replaceAll(routeParamsRegex, '(?<$1>[a-z0-9\-_]+)')
    const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)
    return pathRegex
}

// RegEx: 
// ?<id> => What's inside will be the name of the param
// $1 => Takes the first result of the regex and put it as the name of the group 
// [a-zA-Z0-9] => Range for expected characters on the string
// \- => Escape left bar \ to include the sign as a character 
// + => Inform the regex expression to expect one or more of the characters in the range
// /g => Inform the regex expression that the regex is global, meaning it will look for pattern across all the string, not stoping on the first find