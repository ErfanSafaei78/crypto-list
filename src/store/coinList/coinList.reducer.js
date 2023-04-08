const initialState = {
    isLoading: false,
    data:[]
};

export function coinListReducer (state = initialState, action) {
    const update = (newState) => Object.assign({},state,newState);
    switch (action.type) {
        case "SET_LOADING":
            return update({
                isLoading:action.payload,
            })
        case "SET_DATA":
            return update({
                data: action.payload,
            });
        default:
            return state;
    }
}