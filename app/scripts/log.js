angular.module('threeYoApp').controller('logp',function($scope,$http,getdata){
			
			getdata.ajax('http://www.somenote.cn:1510/test','get',function(data){
				$scope.data=data
			})
			getdata.ajax('http://www.somenote.cn:1510/test2','get',function(data1){
				$scope.data1=data1
			})
			getdata.ajax('http://www.somenote.cn:1510/aut','get',function(data2){
				$scope.data2=data2
			})
	
})

