(function (w) {
/*一:域名*/

    //线上
    var hostApi='http://www.jhjvip.cn:8080';
    //测试线上
    // var hostApi='http://www.jhjvip.cn:8080'
    //测试本地
    // var hostApi='http://www.jhjvip.cn:8080'

/*二：域名+固定文件目录*/

     w.C={};
     C.host=hostApi+'/abc/cc/';

/* 三：接口api*/

    C.interface={
        index:'index/index',
        index2:'index/index2'
    };

/* 四：域名+固定文件目录+接口api */

    for(k in C.interface){
        C.interface[k]=C.host+C.interface[k]
    }

/*五：token设置*/

    // 固定token
    C.token='2017091814287384479dc2fcbc776c4e34a1d9f9ad2b297b9d';
    //把token设置到localStorage里面
    //localStorage.setItem('token','20171011120297519793da493ee2884b22b6ed8da1921679ae');
    //C.token=localStorage.getItem('token');

})(window);