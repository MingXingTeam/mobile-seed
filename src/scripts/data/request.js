import Promise from 'bluebird'
import $ from 'jquery'

export function myAjax(url, data, type, callbackname) {
	(() => {
		if(url && url.indexOf("?") === -1) {
      		url = url + `?t=${new Date().getTime()}`;
      	} else if(url && url.indexOf("?") !== -1) {
      		url = url + `&t=${new Date().getTime()}`;
      	}
	})();

	return new Promise((resolve, reject) => {
          $.ajax({
	          type : type || "GET",
	          url : url,
	          data: data,
	          dataType : 'jsonp',
	          jsonp: "callbackparam",
	          jsonpCallback: callbackname
	      }).done(function(json) {
	         resolve(json);
	      }).fail(function(json) {
	         reject({
	         	error_no:-1,
	         	error_info:"获取数据错误"
	         });
	      });
	});
}