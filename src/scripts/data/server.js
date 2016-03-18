import * as Request from './request'

export function getData({data, type, callbackname}) {
  const url = `http://14.17.75.62:8088/real/zs/1A0001,399001,399006,399300,399005?t=1458279761865`;
  return Request.myAjax({url, data, type, callbackname});
}

// class Server {
    
// }
