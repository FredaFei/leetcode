// 去重
const unique = (array)=>[...new Set(array)]
// 扁平
const flatten = (array)=>array.reduce((p,n)=>p.concat(Array.isArray(n)?flatten(n):n),[])
// 并集
const union = (a,b)=>unique(a.concat(b))
// 差集
const difference = (a,b)=>a.filter(v=>b.indexOf(v)===-1)
// 交集
const intersect = (a,b)=>a.filter(v=>b.indexOf(v)>-1)
// 补集
const complement = (a,b)=>difference(union(a,b),intersect(a,b))
// 最大值
const max = (array)=>array.reduce((p,n)=>Math.max(p,n),[])
const min = (array)=>Math.min(...array)
