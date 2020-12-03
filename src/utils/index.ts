import axios from 'axios'
import config from '../config/index'
import { Notify } from 'quasar'

type res = {
  status: number;
  data: {code:number,show:boolean, msg: string};
};

function result(value: res) {
  if (value.status === 200) {
    if (value.data.code && value.data.show) {
      Notify.create({
        type: 'positive',
        message: value.data.msg
      })
      return true
    }
  } else {
    Notify.create({
      type: 'negative',
      message: '网络错误，请稍后重试！'
    })
    return false
  }
}

function request(method: string, url: string, data?: object) {
  if (method === 'post') {
    return axios.post(config.server + url,data);
  } else {
    return axios({
      method: 'get',
      url: config.server + url,
      params: data
    });
  }
}


export {
  request,
  result
}
