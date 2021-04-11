
class UserModel {
  readonly id: number
  constructor(public name:string, public age:number) {
    this.id = Math.random()
  }
}

const user = new UserModel('zengshixin', 18)

console.log(user)