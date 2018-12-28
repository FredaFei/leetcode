/**
 * 如何判断一个字符串是否是回文字符串的问题
 * @example String
 * @returns Boolean
 * */
function isPlalindrome(str){
  if(!str){return false}
	var len = str.length
	var half = len/2
	for(var i=0; i<half;i++){
    if(str[i] !== str[len-i-1]){
      return false
		}
		return true
	}
}
var a = '1234321'
isPlalindrome(a)