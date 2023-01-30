function fetchEggd(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}

function fryEggd(egg) {
    return Promise.resolve(`${egg} => pri`);
}

function getChicken() {
    return Promise.reject(new Error('치킨을 가지고 올 수 없음'));
    //return Promise.resolve(`0 => 1`);
}

async function makeFriedEgg() {
    let chicken;
    try {
        chicken = await getChicken();
    } catch {
        chicken = '닭';
    }
    const egg = await fetchEggd(chicken);
    return fryEggd(egg);
}

get().then(console.log);