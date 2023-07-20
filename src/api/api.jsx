export async function getPageAPi(adress) {
    const response = await fetch(adress);
    return response.json();
}

export async function getAllGamesApi(pageNumber) {
    const response = await fetch(`https://api.rawg.io/api/games?key=65f7e9f0f2c14d05b7934079b49af787&page=${pageNumber}&page_size=20` );
    return response.json();
}
export async function getGameApi(id) {
    const response = await fetch(`https://api.rawg.io/api/games/${id}?key=65f7e9f0f2c14d05b7934079b49af787`);
    return response.json();
}

export async function getCategoryGamesApi(category, pageNumber) {
    const response = await fetch(`https://api.rawg.io/api/games?genres=${category}&key=65f7e9f0f2c14d05b7934079b49af787&page=${pageNumber}&page_size=10` );
    return response.json();
}

export async function getByTitleGamesApi(title) {
    const response = await fetch(`https://api.rawg.io/api/games?search=${title}&key=65f7e9f0f2c14d05b7934079b49af787` );
    return response.json();
}

export async function getBestRatedGamesApi(pageNumber) {
    const response = await fetch(`https://api.rawg.io/api/games?key=65f7e9f0f2c14d05b7934079b49af787&metacritic=85,100&page=${pageNumber}&page_size=10` );
    return response.json();
}

export async function getNewGamesApi(pageNumber) {
    const response = await fetch(`https://api.rawg.io/api/games?key=65f7e9f0f2c14d05b7934079b49af787&dates=2023-05-01,2023-07-10&page=${pageNumber}&page_size=10` );
    return response.json();
}

export async function getPlatformApi(platform, pageNumber) {
    const response = await fetch(`https://api.rawg.io/api/games?key=65f7e9f0f2c14d05b7934079b49af787&platforms=${platform}&page=${pageNumber}&page_size=10` );
    return response.json();
}