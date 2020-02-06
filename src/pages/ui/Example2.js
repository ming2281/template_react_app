import React from 'react'

import {connect} from "react-redux"

import propTypes from 'prop-types'

class Example2 extends React.Component {

    constructor(props) {
        /// 传递给父类props
        super(props)

        /// 组件自己的state, 内部, 自己维护
        this.state = {}

    }

    render() {
        return (
            <div></div>
        )
    }


    onBtnClick = () => {
        /// 派发动作到全局Store中去
        // const {dispatch} = this.props;
        // dispatch(switchMenu("newname"))

    }

    onClickTestState = () => {
        this.setState({})

        this.setState((prevState, props) => {
            return {}
        })

    }
}
//
// Example2.defaultProps = {
//
// }
// Example2.propTypes = {
//
// }

/**
 * 将state中的某些数据注入到this.props上面, 使其能够使用
 *
 * @param state 应该是别人传整个state进来, 我们不用管了
 *
 * @returns {{menuName: *}}
 */
const mapStateToProps = state => {
    /// 计算新的需要挂载到组件props上面的东西
    const props = {
        count: state.count
    }

    /// 返回, 将会挂载到props上面
    return props
}

/**
 * 将某些函数传进来, 注入到this.props上面
 *
 * @param dispatchFunc 别人传的, 我们不用管
 * @returns {{}}
 */
function mapDispatchToProps(dispatchFunc) {
    /// 生成新的函数, 将会挂载到组件的props上面(所有函数)
    const funcs = {
        increment: (number) => {
            /// 从action中来的函数, 获取其返回值
            const resultObject = increment(number);

            /// 调用dispatch函数, 操作store对象, 获取reducer返回的新state对象
            const dispatchResultObject = dispatchFunc(resultObject);

            /// 将新的state对象返回出去, 挂载到组件的props属性上面
            return dispatchResultObject;
        },
        decrement: (number) => (dispatchFunc(decrement(number)))
    }

    return funcs;
}

/// 组件将会被redux接管
export default connect(mapStateToProps, mapDispatchToProps)(Example2)
