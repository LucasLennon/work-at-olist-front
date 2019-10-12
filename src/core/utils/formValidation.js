export function atLeastSixCharacters(password) {
    return password.length >= 6;
}

export function atLeastOneUpperCase(password) {
    return password.match(/([A-Z])+/g).length > 0;
}

export function atLeastOneNumber(password) {
    return password.match(/([\d])+/g).length > 0;
}