const prop = {
    name: 'Button',
    styles: {
        size: 20,
        color: 'black',
    },
};

function changeColor({ styles: { color } }) {
    console.log(color);
}

changeColor(prop);


const fruits = ['딸기', '바나나', '사과', '키위'];
const [first, second, ...other] = fruits;
console.log(first);
console.log(second);
console.log(other);

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);

function create() {
    return ['apple', '사과'];
}

const [title, value] = create();
console.log(title);
console.log(value);

const ellie = {name: 'Ellie', age: 20, job: 's/w engineer'};

// function display(person) {
//     console.log('이름', person.name);
//     console.log('나이', person.age);
//     console.log('직업', person.job);
// }

function display({name, age, job}) {
    console.log('이름', name);
    console.log('나이', age);
    console.log('직업', job);
}

display(ellie);