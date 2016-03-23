import Promise from 'bluebird'
import * as Server from '../data/server';

export function getIndexData() {
  return {
    types: ['GET_INDEX_DATA_REQUEST', 'GET_INDEX_DATA_SUCCESS', 'GET_INDEX_DATA_FAILURE'],
    promise: () => {
        return Server.getIndexData({
          data:null, 
          type:'jsonp',
          callbackname:'quotebridge_real_zs'
        });
    }
  }
}

export function getPlateData() {
  return {
    types: ['GET_PLATE_DATA_REQUEST', 'GET_PLATE_DATA_SUCCESS', 'GET_PLATE_DATA_FAILURE'],
    promise: () => {
        return Server.getPlateData({
          data:null, 
          type:'jsonp',
          callbackname:'quotebridge_v2_blocksrank_8811_199112_d6'
        });
    }
  }
}

export function getRankData() {
  return {
    types: ['GET_RANK_DATA_REQUEST', 'GET_RANK_DATA_SUCCESS', 'GET_RANK_DATA_FAILURE'],
    promise: () => {
        return Server.getDropAndIncreaseRankData({
          data:null, 
          type:'jsonp',
          callbackname:'quotebridge_v2_rank_33_17_199112_d10'
        });
    }
  }
}

export function getHandRateData() {
  return {
    types: ['GET_HANDRATE_DATA_REQUEST', 'GET_HANDRATE_DATA_SUCCESS', 'GET_HANDRATE_DATA_FAILURE'],
    promise: () => {
        return Server.getHandRateData({
          data:null, 
          type:'jsonp',
          callbackname:'quotebridge_v2_rank_33_17_1968584_d10'
        });
    }
  }
}

export function showKlinePage() {
  return {
    type: 'SHOW-KLINE-PAGE'
  }
}

// export function showDropTab() {
//   return {
//     type: "SHOW-DROP-TAB"
//   }
// }

// export function showIncreaseTab() {
//   return {
//     type: "SHOW-INCREASE-TAB"
//   }
// }

// export function showHandRateTab() {
//   return {
//     type: "SHOW-HANDRATE-TAB"
//   }
// }