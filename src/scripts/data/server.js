import * as Request from './request'
import Mock from 'mockjs'

const host = `http://14.17.75.62:8088`;

export function getIndexData({data, type, callbackname}) {
  const url = host + `/real/zs/1A0001,399001,399006,399300,399005`;
  return Request.myAjax(url, data, type, callbackname);
}

export function getPlateData({data, type, callbackname}) {
  const url = host + `/v2/blocksrank/8811/199112/d6.js`;
  return Request.myAjax(url, data, type, callbackname);
}

export function getRankData({data, type, callbackname}) {
  const url = host + `/v2/rank/33,17/199112/d10.js`;
  return Request.myAjax(url, data, type, callbackname);
}

// (() => {
// 	// ajax请求匹配规则
//     const mockMap = {
//         '/real/zs/1A0001,399001,399006,399300,399005': {
//         	localResUrl: '/mock/marketIndex.json'
//         },
//         '/v2/blocksrank/8811/199112/d6.js': {
//             localResUrl: '/mock/marketPlate.json'
//         },
//         '/v2/rank/33,17/199112/d10.js': {
//             localResUrl: '/mock/marketRank.json'
//         }
//     }

//     function handlePath(reqUrl) {
//         // 如果配置了本地路径则直接返回本地响应路径
//         if (typeof mockMap[reqUrl] === 'object' && mockMap[reqUrl].localResUrl) {
//             return mockMap[reqUrl].localResUrl;
//         }
//         else if (typeof mockMap[reqUrl] === 'object' && mockMap[reqUrl].template) {
//             return mockMap[reqUrl].template;
//         } else {
//             // 默认请求mock下面的和请求的url对应的路径
//             // 去掉请求后缀
//             reqUrl = reqUrl.substring(0, reqUrl.indexOf('.'));
//             return mockBase + reqUrl + ".json";
//         }
//     }
//     for(let reqUrl in mockMap) {
//         Mock.mock(new RegExp(reqUrl), function(options) {
//             var url = options.url.replace(window.location.pathname,'');
//             //返回mock模板
//             if(typeof handlePath(url) === 'object' && mockMap[url].template) {
//                 return handlePath(url);
//             } else {
//                 var a = $.ajax({
//                     url: handlePath(url),
//                     // 同步请求数据
//                     async: false,
//                     dataType: 'json'
//                 });
//                 return eval('(' + a.responseText + ')');
//             }
//         });
//     }
// })();
