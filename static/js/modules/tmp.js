
//AMD  必须要有点./moduleA  直接moduleA不行
/*define(['./moduleA'],function(z){
	 return z
});*/

// define(function(){
	//  require(['moduleA'], function(moduleA) {
	// 	alert('11')
	// });
// });


//AMD 不能引用别名 只能应用模块的名称
define(['./moduleA','jquery'], function(zf,$) {
    // $ and math are the exports of the jquery module.
    $('body').text('hello world');
});





// CommonJS
// module.exports.moduleA = function  () {
// 	return "This is module A!"
// }

// require.ensure(["jquery", "imgScroll"], function(require){
//   var $ = require("jquery");
// })

// CMD
//main.js
// define(function(require,exports){
// 	function bb(a, b){
// 		return a + b;
// 	};
// 	exports.bb = bb;
// });

// define(function(require,exports, module){
// 	function bb(a, b){
// 		return a + b;
// 	};
// 	var cc = {
// 		add: function(a,b){return a+b;}
// 	}
// 	// module.exports.bb = bb;
// 	// module.exports = cc; 
// 	module.exports.bb = cc; 
/*// });

// 起了一个别名 便于合并到一起的时候看该模块的作用
define('mm', function(require,exports, module){
	function bb(a, b){
		return a + b;
	};
	var cc = {
		add: function(a,b){return a+b;}
	}
	// module.exports.bb = bb;
	// module.exports = cc; 
	// module.exports.bb = cc; 
});*/

/*define(function(require,exports, module){
	 var a= 'CMD-exports';
	 return a
	 module.exports = a;
});
*/

// define(function(require,exports, module){
// 	var $ = require('jquery');
// 	$('body').css('background','red');
// 	var a= 'CMD-exports';
// 	module.exports = a;
// })


//AMD
/*define(function(){
	 var a= '111111111111';
	 return a;
});*/
//AMD  依赖
/*define(['jquery'],function($){

	$('body').css('background','red')
	function a(){
		alert('fef') ;
	}
	 return a
});*/


//AMD  依赖 别名
/*define('zfei',['jquery'],function($){

	$('body').css('background','red')
	function a(){
		console.log('ZFEI') ;
	}
});
*/




