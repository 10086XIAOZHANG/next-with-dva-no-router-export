import axios from 'axios'

import Config from '../config/index'
//封装好的get和post接口，调用方法情况action文件
const fetchData = axios.create({
    baseURL: Config.defaultProps.api, //设置默认api路径
    timeout: 10000, //设置超时时间
    headers: {
        'X-Custom-Header': 'value'
    }
})

export default fetchData