/*****公共js方法*****/

//根据url中的key获取对应的value:
//网址:https://www.baidu.com?a=1&b=1
//locationSearcher('a')
function locationSearcher(key) {
    var search = location.search.split('?');
    if(search.length>1){
        var params = search[1].split('&');
        for(var i=0;i<params.length; i++){
            var item = params[i].split('=');
            var k = item[0];
            if(key == k){
                return item[1];
            }
        }
    }
    return null;
}
