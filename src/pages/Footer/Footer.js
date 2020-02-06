import React from 'react'

import {connect} from "react-redux"


class Footer extends React.Component {

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

/**
 * 将state中的某些数据注入到this.props上面, 使其能够使用
 *
 * @param state 应该是别人传整个state进来, 我们不用管了
 *
 * @returns {{menuName: *}}
 */
const mapStateToProps = state => {
    return {}
}

/**
 * 将某些函数传进来, 注入到this.props上面
 *
 * @param dispatch 别人传的, 我们不用管了
 * @returns {{}}
 */
function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
