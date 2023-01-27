const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1, 'Hello');
console.log(map.get(key2));

//동일한 이름으로 하나의 키를 사용
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);

const obj = {[k1]: 'Hello', [Symbol('key')]: 1};
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]);