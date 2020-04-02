/*数组深拷贝*/
JSON.parse(JSON.stringify(array))

/*浅拷贝*/
function shallowCopy(obj){
    if(typeof obj !== 'object'){return}
    var newObj = obj instanceof Array ? []:{}
    for(var k in obj){
        if(obj.hasOwnProperty(k)){newObj[k]=obj[k]}
    }
    return newObj
}

/*深拷贝*/
function deepCopy(obj){
    if(typeof obj !== 'object'){return}
    var newObj = obj instanceof Array ? []:{}
    for(var k in obj){
        if(obj.hasOwnProperty(k)){
            newObj[k]=typeof obj[k] === 'object' ? deepCopy(obj[k]):obj[k]
        }
    }
    return newObj
}
/*
深浅拷贝注意点
1. 循环应用
2. 多种数据类型
3. 拷贝函数
参考：http://www.conardli.top/blog/article/JS%E8%BF%9B%E9%98%B6
*/