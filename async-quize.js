function fetchEggd(chicken) {
    return Promise.resolve(`${chicken} => π₯`);
}

function fryEggd(egg) {
    return Promise.resolve(`${egg} => pri`);
}

function getChicken() {
    return Promise.reject(new Error('μΉν¨μ κ°μ§κ³  μ¬ μ μμ'));
    //return Promise.resolve(`0 => 1`);
}

async function makeFriedEgg() {
    let chicken;
    try {
        chicken = await getChicken();
    } catch {
        chicken = 'λ­';
    }
    const egg = await fetchEggd(chicken);
    return fryEggd(egg);
}

get().then(console.log);