import { useEffect, useState } from "react";
import { getAllGamesApi, getBestRatedGamesApi, getNewGamesApi, getPlatformApi,getPageAPi} from "../api/api";
import { Link } from "react-router-dom";
import { AddToWishList } from "./wishlistOperations";
import "../sass/allgames.scss";
import "../sass/common.scss";

function AllGames() {
  const [newGames, setNewGames] = useState([]);
  const [games, setGames] = useState([]);
  const [bestRated, setBestRated] = useState([]);
  const [platformPC, setPlatformPC] = useState([]);
  const [platformXbox, setPlatformXbox] = useState([]);
  const [platformPSN, setPlatformPSN] = useState([]);

  const [searchGame, setSearchGame] = useState("");

  useEffect(() => {
        const randomPage = Math.round(Math.random()* 5)
       getAllGamesApi(1).then((data) => setGames(data))
       getBestRatedGamesApi(1).then((data) => setBestRated(data))
       getNewGamesApi(1).then((data) => setNewGames(data))
       getPlatformApi(4, 1).then((data) => setPlatformPC(data))
       getPlatformApi(1, 1).then((data) => setPlatformXbox(data))
       getPlatformApi(18, 1).then((data) => setPlatformPSN(data))

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

    
    function jsxTemplate(data, headertxt, type ) {
        const filteredData = data?.results?.filter((game) => game.name.toLowerCase().includes(searchGame.toLowerCase()))
        
        if (filteredData?.length > 0) { 
            return (
                <>  
                    
                    <div className="slider__wrap">
                        <h2 className="slider__title">{headertxt}</h2>
                        <section className="slider">
                            {filteredData.map((game) => {
                                const {id, name, metacritic, background_image} = game;
                                return  (
                                    <div className="game__container" key={id}>
                                        <h3 className="game__title">{name}</h3>
                                        <Link className="link" to={`/gameCard/${id}`}>
                                            <img className="game__image" src={background_image}/>
                                        </Link>
                                        <div className="game__meta">
                                            <span className="game__title__metacritic">Metacritic score: </span> 
                                            <span className="game__score">{metacritic}</span>
                                        </div>
                                        <button  className="btn" onClick={() => AddToWishList(game)}>
                                            <span className="btn__icon icon-plus-squared"></span>
                                            <span className="btn__txt">Add to Wishlist</span>
                                        </button>
                                    </div>
                                )
                            })}  
                        </section>
                        <div className="page__btns">
                            <button  className ="btn" onClick = {()=> changePage(data,"Previous", type)}>Prev</button>
                            <button  className ="btn" onClick = {()=> changePage(data, "Next", type)}>next</button>
                        </div>
                    </div> 
                               
                </>            
            )
        }
    }
  

  return (
    <>  
        
        <div className="searchbar__box">
        <p className="disclaimer">All data and images comes from RAWG. <a className="page_link" href="https://rawg.io/apidocs">Find more at https://rawg.io/apidocs </a></p>
            <label className="searchbar__title" htmlFor="search">Find the game</label>
            <input className="searchbar" type="text" id="search" value={searchGame} onChange={(event) => setSearchGame(event.target.value)} />
        </div>
        
        {jsxTemplate(newGames, "New games", "new")}
        {jsxTemplate(games, "Popular games", "popular")}
        {jsxTemplate(bestRated, "Best rated games", "best")}
        {jsxTemplate(platformPC, "Play on PC", "pc")}
        {jsxTemplate(platformPSN, "Play on Playstation", "psn")}
        {jsxTemplate(platformXbox, "Play on Xbox", "xbox")}
    </>
  )
}

export default AllGames;







