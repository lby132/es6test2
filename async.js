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

// 바나나와 사과를 같이 가져오기
async function fetchFruits() {
    const banana = await getBanana();
    const apple = await getApple();
    return [banana, apple];
}

fetchFruits().then(console.log);
