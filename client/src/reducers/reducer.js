const initialState = {
    languages: [],
    top5: [],
    marked: [],
    filter: undefined
}

export default (state = initialState, action) => {
    switch (action.type) {

        case "POPULATE":
            return Object.assign({}, state, 
            {
                languages: action.value, 
                top5: action.value.filter((f) => f.position <= 5),
                marked: [1,2,3,4] // Just a sample to start the application
            });

        case "FILTER":
            return Object.assign({}, state, {filter: action.value.toUpperCase()});

        case "CLEAR_MARKED":
            return Object.assign({}, state, {marked: []});

        case "ALL":
            return Object.assign({}, state, {filter: undefined});

        case "MARK":
            const mark = (a) => a.indexOf(action.value) == -1
                            ? [action.value, ...state.marked]
                            : a.filter((f) => f != action.value);
                            
            return Object.assign({}, state, {marked: mark(state.marked)});

        default:
            return state;
    }
}