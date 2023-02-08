// 함수 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함
print();

function print() {
    console.log('hello');
}


// 변수(let, const)와 클래스는 선언만 호이스팅되고 초기화는 안됨
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생
console.log(hi);
let hi = 'hi';

const cat = new Cat(); //초기화 되지 않아서 에러
class Cat {}

let x = 1;
{
    console.log(x); //블럭안에 있는 x변수를 바라보기 때문에 초기화 되지 않은 x여서 에러 발생
    let x = 2
}

// 블록레벨 스코프 안됨
var apple = '사과';
{
    var apple = 'apple';
    {
        var apple = 'aaa';
    }
}

console.log(apple); // aaa가 출력됨

// 함수 레벨 스코프만 지원됨
function example() {
    var dog = 'dog';
}

console.log(dog); // 에러