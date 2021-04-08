/* interface UserModel {
  name:string
  age:number
  sayHello():void
}

let user:UserModel = {
  name: '123',
  age: 12
} */


// 接口继承

/* interface A {
  T1: number
}

interface B extends A {
  T2: string
}

let a:B = {
  T1: 123,
  T2: 'ab'
} */

// 类型别名组合

/* type A = {
  t1: number
}

type B = {
  t2: string
}

type C = {
  t3: boolean
} & A & B

let test:C = {
  t1: 1,
  t2: '2',
  t3: false
} */

// readonly只读修饰符

/* let a: readonly number[] = [3, 4, 5] */


// 类型断言

interface Duck {
  sound: '嘎嘎嘎'
  swin(): void
}

let person = {
  name: '张三',
  age: 11,
  sound: '嘎嘎嘎' as '嘎嘎嘎',
  swin() {
    console.log('张三正在游泳并发出了'+ this.sound +'的声音')
  }
}

let duck:Duck = person

console.log(duck)
