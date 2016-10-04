export function filter(action) {
    return { type: 'FILTER', value: action.value };
}

export function clearMarked(action) {
    return { type: 'CLEAR_MARKED' };
}
