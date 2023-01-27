const obj1 = {name: '개'};
const obj2 = {name: '고양이', owner: 'Ellie'};

if (obj1 && obj2) {
    console.log('둘다 true');
}

let result = obj2 && obj1;
console.log(result);

function changeOwner(obj) {
    if (!obj.owner) {
        throw new Error('오너가 없습니다.');
    }
    obj.owner = '새로운주인';
}

function makeOwner(obj) {
    if (obj.owner) {
        throw new Error('오너가 있습니다.');
    }
    obj.owner = '새로운주인';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeOwner(obj1);
obj2.owner || makeOwner(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할때
let item = {price: 1};
const price = item && item.price;
console.log(price)

function print(message) {
    const text = message || 'Hello';
    console.log(message);
}

print();