import React from 'react'

import {Button, Card} from 'antd'
import {connect} from "react-redux"
import {switchMenu} from '../../actions/actions'

import {ajax} from '../../utils/axios_utils'

import {STORE} from '../../store/store'

 class Buttons extends React.Component {

    constructor(props) {
        super(props)

        /// 组件自己的state, 内部, 自己维护
        this.state = {
            count: 1,
        }

    }
    render() {
        return (
            <div>
                <Card title={this.props.menuName}>
                    <Button type="primary" onClick={this.onBtnClick}>button</Button>

                    <p>this.state.count: {this.state.count}</p>

                    <Button type="primary" onClick={this.onClickTestState}>button-state</Button>
                </Card>
            </div>
        )
    }


    onBtnClick = () => {
        const {dispatch} = this.props;

        dispatch(switchMenu("newname"))
        console.log('butthon clicked!')
        console.log(process.env)
        ajax('xxxx')
    }

    onClickTestState = () => {
        this.setState({
            count: this.state.count + 1
        })

        this.setState((prevState, props) => {
            return {
                count: prevState.count+1
            }
        })
        this.setState((prevState, props) => {
            return {
                count: prevState.count+1
            }
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
    return {
        menuName: state.menuName,
    }
}

/**
 * 将某些函数传进来, 注入到this.props上面
 *
 * @param dispatch 别人传的, 我们不用管了
 * @returns {{}}
 */
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps) (Buttons)
