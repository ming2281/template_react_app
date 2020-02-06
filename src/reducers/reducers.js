/**
 * 初始的全局state对象, 存储一些默认状态
 *
 * @type {{a: string, b: string, menuName: string}}
 */
const initState = {
    menuName: 'shouye',
    a: 'a',
    b: 'b'
}

/**
 * 生成reducer对象
 *
 * @param state 别人传过来的state对象
 * @param action 别人传过来的action对象
 * @returns  新的state对象
 */
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
