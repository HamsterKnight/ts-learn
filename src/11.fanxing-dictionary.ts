/* 函数使用泛型 */

/* function take<T> (arr:T[], n:number) {
  if(n >= arr.length) {
    return arr
  } else {
    let temp:T[] = []
    for(var i = 0; i < n; i++) {
      temp.push(arr[i])
    }
    return temp
  }
}
// 调用函数，确定泛型为number
take<number>([1,2,3], 2)

// 调用函数，确定泛型为string
take<string>(["1", "2", "3"], 2) */

/* 接口使用泛型 */

// interface Test<T>  {
//   a: T,
//   test: (a:T, n:number) => boolean
// }

// let t2:Test<number> = {
//   a:123,
//   test: function (a, b) {
//     return a - b > 0
//   }
// }

// /* 类型别名使用泛型 */

// type Test2<T> = {
//   t: T
// }
// let t3:Test2<number> = {
//   t: 123
// }

type hasNameProperty = {
  name: string
}

function nameToUppperCase<T extends hasNameProperty>(obj:T) {
  obj.name = obj.name.split(" ").map(_ => _[0].toUpperCase()+_.substr(1)).join(' ')
  return obj
}

const te = {
  name: "hello world"
}
nameToUppperCase(te)
console.log(te)

function minxinArray<T, K>(arr1:T[], arr2:K[]):(T | K)[] {
  if(arr1.length != arr2.length) {
    throw new Error('数组长度不一致')
  }
  const temp:(T|K)[] = []
  for(var i = 0; i < arr1.length; i++) {
    temp.push(arr1[i])
    temp.push(arr2[i])
  }
  return temp
}
console.log(minxinArray([1,2,3], ['a', 'b', 'c']))