export function populate(action) {
    return { type: 'POPULATE', value: action.value };
}

export function filter(action) {
    return { type: 'FILTER', value: action.value };
}

export function mark(action) {
    return { type: 'MARK', value: action.value };
}