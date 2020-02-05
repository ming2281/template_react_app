
const initState = {
    menuName: 'shouye',
    a: 'a',
    b: 'b'
}

export function reducer(state=initState, action) {
    switch(action.type) {
        case 'SWITCH_MENU':
            return {
                ...state,
                menuName: action.menuName,
            }
        default:
            return state;
    }
}
