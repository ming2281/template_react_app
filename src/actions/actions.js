
export const TYPES = {
    'SWITCH_MENU': 'SWITCH_MENU',
}

/**
 * 增删改查
 *
 * @param menuName
 * @returns {{menuName: *, type: *}}
 */
export function switchMenu(menuName) {
    return {
        type: TYPES.SWITCH_MENU,
        menuName: menuName,
    }
}
