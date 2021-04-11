
class User10 {
  private _age:number
  constructor(_age: number) {}
  set age(value:number) {
    this._age = Math.floor(value)
  }

  get age() {
    return this._age
  }
}

const u = new User10(18)
u.age = 1.5
console.log(u)