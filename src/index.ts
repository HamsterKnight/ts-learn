let say = 'abc'
function add(a:number, b:number) {
  return a + b
}

function printMenu(): void {
  console.log('1.登录')
}

function throwError(msg: string): never {
  throw new Error(msg)
}

function alwaysDo(msg: string): never {
  while(true) {
    console.log(1230)
  }
}

type User = {
  name: String
  age: Number
}