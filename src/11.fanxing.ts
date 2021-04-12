/* 
  字典类功能(键名、键值都分别保存在一个数组，数组的位置对应)
  1.设置键值对，如果键值对已存在，则更新键值对的值
  2.删除键值对
  3.统计键值对的数量
  4.获取键值
  5.查询某个键是否存在
  6.传参给回调函数,执行回调
*/
/* function Callback<K, V>(key:K, value:V):void {} */
class Dictionary<K, V> {
  private keys: K[] = []
  private values: V[] = []
  private _size: number = 0
  // 设置和更新键值对
  setKey(key:K, value:V) {
    const index = this.keys.indexOf(key)
    if(index < 0) {
      this.keys.push(key)
      this.values.push(value)
      this._size++
    } else {
      this.values.splice(index, 1, value)
    }
  }
  deleteKey(key:K) {
    const index = this.keys.indexOf(key)
    if(index < 0) return
    this.keys.splice(index, 1)
    this.values.splice(index, 1)
    this._size--
  }
  hasKey(key:K) {
    return this.keys.includes(key)
  }
  get size() {
    return this._size
  }
}