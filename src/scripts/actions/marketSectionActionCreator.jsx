import Promise from 'bluebird'
import * as Server from '../data/server';

export function getData() {
  return {
    types: ['GET_DATA_REQUEST', 'GET_DATA_SUCCESS', 'GET_DATA_FAILURE'],
    promise: () => {
        return Server.getData({data:null, jsonp:'jsonp',callbackname:'quotebridge_real_zs'});
    }
  }
}