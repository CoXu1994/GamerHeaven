import { useEffect, useState } from "react";
import { getAllGamesApi, getBestRatedGamesApi, getNewGamesApi, getPlatformApi,getPageAPi} from "../api/api";
import "../sass/games.scss";
import "../sass/common.scss";
import GamesList from "./GamesList";

function Games() {
  const [newGames, setNewGames] = useState([]);
  const [games, setGames] = useState([]);
  const [bestRated, setBestRated] = useState([]);
  const [platformPC, setPlatformPC] = useState([]);
  const [platformXbox, setPlatformXbox] = useState([]);
  const [platformPSN, setPlatformPSN] = useState([]);

  const [searchGame, setSearchGame] = useState("");

  useEffect(() => {
       getAllGamesApi().then((data) => setGames(data))
       getBestRatedGamesApi().then((data) => setBestRated(data))
       getNewGamesApi().then((data) => setNewGames(data))
       getPlatformApi(4).then((data) => setPlatformPC(data))
       getPlatformApi(1).then((data) => setPlatformXbox(data))
       getPlatformApi(18).then((data) => setPlatformPSN(data))

  }, [])

  async function changePage(data, direction, type) {
    if (direction == "Next" && data.next !== null ) {
        switch(type) {
            case "new":
                await getPageAPi(data.next).then((newData) => setNewGames(newData))
                break;
            case "popular": 
                await getPageAPi(data.next).then((newData) => setGames(newData))
                break;
            case "best" :
                await getPageAPi(data.next).then((newData) => setBestRated(newData))
                break;
            case "pc":
                await getPageAPi(data.next).then((newData) => setPlatformPC(newData))
                break;
            case "psn": 
                await getPageAPi(data.next).then((newData) => setPlatformPSN(newData))
                break;
            case "xbox" :
                await getPageAPi(data.next).then((newData) => setPlatformXbox(newData))
                break;
        
       }
    } 
    if (direction == "Previous" && data.previous !== null) {
        switch(type) {
            case "new":
                await getPageAPi(data.previous).then((newData) => setNewGames(newData))
                break;
            case "popular": 
                await getPageAPi(data.previous).then((newData) => setGames(newData))
                break;
            case "best" :
                await getPageAPi(data.previous).then((newData) => setBestRated(newData))
                break;
            case "pc":
                await getPageAPi(data.previous).then((newData) => setPlatformPC(newData))
                break;
            case "psn": 
                await getPageAPi(data.previous).then((newData) => setPlatformPSN(newData))
                break;
            case "xbox" :
                await getPageAPi(data.previous).then((newData) => setPlatformXbox(newData))
                break;
        } 
    }
} 

  return (
    <>  
        
        <div className="searchbar__box">
        <p className="disclaimer">All data and images comes from RAWG. <a className="page_link" href="https://rawg.io/apidocs">Find more at https://rawg.io/apidocs </a></p>
            <label className="searchbar__title" htmlFor="search">Find the game</label>
            <input className="searchbar" type="text" id="search" value={searchGame} onChange={(event) => setSearchGame(event.target.value)} />
        </div>
        
        <GamesList 
            data={newGames} 
            headertxt={"New games"} 
            type={"new"} 
            search={searchGame} 
            changePage={changePage}
        />
        <GamesList 
            data={games} 
            headertxt={"Popular games"} 
            type={"popular"}
            search={searchGame} 
            changePage={changePage}
        />
        <GamesList 
            data={bestRated} 
            headertxt={"Best rated games"} 
            type={"best"} 
            search={searchGame} 
            changePage={changePage}
        />
        <GamesList 
            data={platformPC} 
            headertxt={"Play on PC"} 
            type={"pc"} 
            search={searchGame} 
            changePage={changePage}
        />
        <GamesList 
            data={platformPSN} 
            headertxt={"Play on Playstation"} 
            type={"psn"} 
            search={searchGame} 
            changePage={changePage}
        />
        <GamesList 
            data={platformXbox} 
            headertxt={"Play on Xbox"} 
            type={"xbox"} 
            search={searchGame} 
            changePage={changePage}
        />
    </>
  )
}

export default Games;







