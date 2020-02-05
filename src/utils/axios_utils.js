import axios from 'axios'
import {message} from 'antd';


export function ajax(url, data = {}, type = 'GET') {
    return new Promise((resolve, reject) => {
        let p

        if (type === 'GET') {
            p = axios.get(url, {
                params: data
            })
        } else {
            p = axios.post(url, data)
        }

        /// 如果成功, resolve
        p.then(response => {
            resolve(response)
        }).catch(error => {
            message.error("网络请求错误HZM")
        })
    })
}
