
export const TYPES = {
    'SWITCH_MENU': 'SWITCH_MENU',
}

export function switchMenu(menuName) {
    return {
        type: TYPES.SWITCH_MENU,
        menuName: menuName,
    }
}
