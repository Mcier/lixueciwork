angular.module('jg',[]).directive('aut',function(){
	return{
		restrict:'ECMA',
		template:"<div id='NEWS'><div class='NEWS_title'><div class='BJ'><h2>北京新闻</h2><span class='word'>LOCAL NEWS</span><span class='gd'>更多</span></div></div><div class='NEWS_left'><ul><li ng-repeat='t in data' >{{t.title|limitTo:'10'}}{{t.title.length>10?'......':''}}</li></ul></div><div class='NEWS_right'><div class='XINt'><h2>|新闻图片</h2><img ng-repeat='z in data2' class='XINt_img' ng-src='{{z.img}}'/></div><div class='XINz'><h2>|新闻资讯</h2><p ng-repeat='x in data1'>{{x.title|limitTo:'10'}}{{x.title.length>10?'......':''}}</p></div></div></div>",
		replace:true,
		scope:{data:'=abc',data1:'=bcd',data2:'=cdf'},//@是以字符串传值，=是以变量传log.js里的值也随着改变
		link:function(s,e,attr){
			s.a=attr['b']
		}
	}
})
.service('getdata',function($http){
	return{
		ajax:function(url,method,callback){
			$http({
				url:url,
				method:method
			}).success(function(e){
				callback(e)
			})
		},
		getodd:function(e){
			var arr=[]
			for(var i=0;i<e.length;i=i+2){
				arr.push(e[i])
			}
			return arr
		},
		geteven:function(e){
			var arr=[]
			for(var i=1;i<e.length;i=i+2){
				arr.push(e[i])
			}
			return arr
		}
	}
})

