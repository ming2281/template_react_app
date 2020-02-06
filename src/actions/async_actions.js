/**
 * 异步action
 *
 * @param username
 * @param password
 * @returns {Function}
 */
const loginFuncAsync = (username, password) => {

    /// 制作一个函数, 返回
    return async (dispatch) => {
        const result = await reqLogin(username, password);

        /// 请求成功了
        if (result.status === 0) {
            const user = result.data;

            /// saveUser(user)

            /// 分发接收用户的同步action
            dispatch(receiverUser(user))
        } else {  /// 请求失败了
            const msg = result.msg;

            /// message.error(msg)  显示错误信息
            dispatch(showErrMsg(msg));
        }
    }
}
