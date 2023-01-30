function getBanana() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('banana')
        }, 1000);
    });
}

function getApple() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('apple');
        }, 3000);
    })
}

function getOrange() {
    return Promise.reject(new Error('no orange'));
}

getBanana().then(banana => getApple().then(apple => [banana, apple])).then(console.log);

// Promis.all 병렬적으로 한번에 모든 Promise들을 실행
Promise.all([getBanana(), getApple()]).then(fruits => console.log('all', fruits));

// Promise.race 주어진 Promise중에 제일 빨리 수행된것이 이김
Promise.race([getBanana(), getApple()])
    .then((fruits) => console.log('race', fruits));

Promise.all([getBanana(), getApple(), getOrange()])
    .then((fruits) => console.log('error', fruits)).catch(console.log);

// 실패한 값도 받아오고 싶을때
Promise.allSettled([getBanana(), getApple(), getOrange()])
    .then((fruits) => console.log('all-settle', fruits))
    .catch(console.log);
