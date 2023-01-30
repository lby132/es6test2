function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => pri`);
}

function getChicken() {
    //return Promise.reject(new Error('치킨을 가지고 올 수 없음'));
     return Promise.resolve(`0 => 1`);
}

getChicken()
    .then(chicken => {
        return fetchEgg(chicken);
    })
    .then(egg => fryEgg(egg))
    .then((friedEgg) => console.log(friedEgg))
    .catch((error) => console.log(error.name));

// fetchEgg('🐔')   //
//     .then((egg) => console.log(egg));
