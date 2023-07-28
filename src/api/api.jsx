export async function getPageAPi(adress) {
    const response = await fetch(adress);
    return response.json();
}

export async function getAllGamesApi() {
    const response = await fetch(`https://api.rawg.io/api/games?key=65f7e9f0f2c14d05b7934079b49af787&page_size=10` );
    return response.json();
}
export async function getGameApi(id) {
    return await fetch(`https://api.rawg.io/api/games/${id}?key=65f7e9f0f2c14d05b7934079b49af787`).then((response) => response.json());
}

export async function getCategoryGamesApi(category, page) {
    return  await fetch(`https://api.rawg.io/api/games?genres=${category}&key=65f7e9f0f2c14d05b7934079b49af787&page=${page}&page_size=10`).then((response) => response.json());
}

export async function getByTitleGamesApi(title) {
    const response = await fetch(`https://api.rawg.io/api/games?search=${title}&key=65f7e9f0f2c14d05b7934079b49af787` );
    return response.json();
}

export async function getBestRatedGamesApi() {
    const response = await fetch(`https://api.rawg.io/api/games?key=65f7e9f0f2c14d05b7934079b49af787&metacritic=90,100&page_size=10` );
    return response.json();
}

export async function getNewGamesApi() {
    const response = await fetch(`https://api.rawg.io/api/games?key=65f7e9f0f2c14d05b7934079b49af787&dates=2023-05-01,2023-07-10&page_size=10` );
    return response.json();
}

export async function getPlatformApi(platform) {
    const response = await fetch(`https://api.rawg.io/api/games?key=65f7e9f0f2c14d05b7934079b49af787&platforms=${platform}&page_size=10` );
    return response.json();
}



