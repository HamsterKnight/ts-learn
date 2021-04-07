enum Permission  {
  Read = 1,
  Write = 2,
  Create = 4,
  Delete = 8
}

let pre: Permission = Permission.Read | Permission.Write

function judgePerssion(target:Permission, pre:Permission) {
  console.log(target & pre, pre)
  return (target & pre) === pre
}

console.log(judgePerssion(pre, Permission.Read))
