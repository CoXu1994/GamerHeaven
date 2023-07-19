import { useEffect, useState } from "react";
import { getAllGamesApi, getBestRatedGamesApi, getNewGamesApi, getPlatformApi,} from "../api/api";
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
       getAllGamesApi(randomPage).then((data) => setGames(data.results))
       getBestRatedGamesApi(randomPage).then((data) => setBestRated(data.results))
       getNewGamesApi(1).then((data) => setNewGames(data.results))
       getPlatformApi(4, randomPage).then((data) => setPlatformPC(data.results))
       getPlatformApi(1, randomPage).then((data) => setPlatformXbox(data.results))
       getPlatformApi(18, randomPage).then((data) => setPlatformPSN(data.results))

  }, [])
  
    function jsxTemplate(data, headertxt) {
        const filteredData = data.filter((game) => game.name.toLowerCase().includes(searchGame.toLowerCase()))
        
        if (filteredData.length > 0) { 
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
                    </div>            
                </>            
            )
        }
    }
  

  return (
    <>  
        <div className="searchbar__box">
            <label className="searchbar__title" htmlFor="search">Find the game</label>
            <input className="searchbar" type="text" id="search" value={searchGame} onChange={(event) => setSearchGame(event.target.value)} />
        </div>
        
        {jsxTemplate(newGames, "New games")}
        {jsxTemplate(games, "Popular games")}
        {jsxTemplate(bestRated, "Best rated games")}
        {jsxTemplate(platformPC, "Play on PC")}
        {jsxTemplate(platformPSN, "Play on Playstation")}
        {jsxTemplate(platformXbox, "Play on Xbox")}
    </>
  )
}

export default AllGames







