function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => π₯`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => pri`);
}

function getChicken() {
    //return Promise.reject(new Error('μΉν¨μ κ°μ§κ³  μ¬ μ μμ'));
     return Promise.resolve(`0 => 1`);
}

getChicken()
    .then(chicken => {
        return fetchEgg(chicken);
    })
    .then(egg => fryEgg(egg))
    .then((friedEgg) => console.log(friedEgg))
    .catch((error) => console.log(error.name));

// fetchEgg('π')   //
//     .then((egg) => console.log(egg));
