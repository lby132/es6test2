const set = new Set([1, 2, 3]);
console.log(set);

console.log(set.size);
console.log(set.has(1));
console.log(set.has(6));
set.forEach((item) => console.log(item));
for (const value of set.values()) {
    console.log(value);
}

set.add(6);
console.log(set);

set.delete(6);
console.log(set);

//전체 삭제
set.clear();
console.log(set);