export function filter(value) {
    return { type: 'FILTER', value: value };
}

export function clearMarked() {
    return { type: 'CLEAR_MARKED' };
}