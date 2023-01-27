const map = new Map([
    ['key1', '사과'],
    ['key2', '바나나'],
]);
console.log(map);

console.log(map.size)
console.log(map.has('key1'))
console.log(map.has('key4'))
map.forEach((value, key) => console.log(value, key));
console.log(map.get('key1'))
console.log(map.get('key5'))
map.set('key3', '키위')

map.delete('key3');
map.clear();
console.log(map);

