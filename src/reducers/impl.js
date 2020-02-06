/**
 * 整合所有的reducers
 *
 * @param reducersObj
 * @returns {Function}
 */
function combineReducers(reducersObj) {
    /**
     * 制作一个函数, 是一个reducer函数.
     *
     * @param state  状态
     * @param action action内容object
     */
    return (state={}, action) => {
        /// 准备一个总的state对象
        const totalState = {}

        /// 循环每一个reducer, 得到子状态; 然后更新到总的里面
        Object.keys(reducersObj).forEach((key) => {
            /// 计算得到一个新的子状态
            const newSubState = reducersObj[key](state[key], action)

            /// 更新到总的里面
            totalState[key] = newSubState;
        })

        return totalState;
    }
}
