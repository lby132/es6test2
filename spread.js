function add(a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));

function sum(first, second, ...nums) {
    console.log(nums);
}

sum(1, 2, 3, 4, 5, 6);

const fruits1 = ['사과', '키위'];
const fruits2 = ['딸기', '바나나'];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, '망고', ...fruits2];
console.log(arr);

const ellie = {name: 'Ellie', age: 20};
const updated = {
    ...ellie,
    job: 's/w engineer',
};
console.log(ellie);
console.log(updated);