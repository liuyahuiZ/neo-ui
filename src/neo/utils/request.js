import axios from 'axios';
import {Toaster, Loader} from '../Components';
import {getDateTimeStr} from './timeStamp';

function setReq(obj, header) {
    return {
      'chCode': 'jfapl008',
      'reqNo': parseInt(Math.random() * Math.pow(10, 15)),
      'reqTime': getDateTimeStr(),
      'version': '1',
      'data': obj,
      ...header
    }
  }  

function resetHeader(headers){
    let newHeader = {}
    for(let i=0;i<headers.length;i++){
        newHeader[headers[i].text] = headers[i].value
    }
    return newHeader;
}
export default function (url, options = {}, header) {
    Loader.showProgress();
    return new Promise((resolve, reject)=>{
        let headers = Object.assign({
            'Content-Type': 'application/json',
        }, resetHeader(header))
        axios({
            method: options.method,
            url: url,
            headers: headers,   
            data: setReq(options.data, resetHeader(header))
        }).then((response) => {
            Loader.hideProgress();
            if (response.status !== 200) {
                Toaster.toaster({ type: 'error', content: '系统错误', time: 3000 });
                reject(response)
            } else {
                resolve(response.data)
            }
        }).catch((error) => {
            Loader.hideProgress();
            Toaster.toaster({ type: 'error', content: '系统错误', time: 3000 });
            reject(error)
        });
    })
    
}