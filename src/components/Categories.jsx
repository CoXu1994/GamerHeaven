import { useState } from "react";
import { getCategoryGamesApi } from "../api/api";
import { Link } from "react-router-dom";
import { AddToWishList } from "./wishlistOperations";
import "../sass/categories.scss";
import "../sass/common.scss";


function Categories() {
    const [newGames, setNewGames] = useState([]);
    const [searchGame, setSearchGame] = useState("");

    function getGamesFromGenre(genre) {
        const randomPage = Math.round(Math.random() * 5);
        getCategoryGamesApi(genre, randomPage).then((data) => setNewGames(data.results))
    } 

    return (
        <div>
            {newGames.length == 0 && (<p className="display">No games on the list {`:(`}</p>)}
            <div className="filter__box">
                <h2 className="filter__title">Choose genre: </h2>
                <div className="filter__buttons">
                    <button className="filter__btn" onClick={() => getGamesFromGenre("action")}>Action</button>
                    <button className="filter__btn" onClick={() => getGamesFromGenre("shooter")}>Shooter</button>
                    <button className="filter__btn" onClick={() => getGamesFromGenre("adventure")}>Adventure</button>
                    <button className="filter__btn" onClick={() => getGamesFromGenre("indie")}>Indie</button>
                    <button className="filter__btn" onClick={() => getGamesFromGenre("fighting")}>Fighting</button>
                    <button className="filter__btn" onClick={() => getGamesFromGenre("platformer")}>Platformer</button>
                    <button className="filter__btn" onClick={() => getGamesFromGenre("strategy")}>Strategy</button>
                    <button className="filter__btn" onClick={() => getGamesFromGenre("simulation")}>Simulation</button>
                    <button className="filter__btn" onClick={() => getGamesFromGenre("sports")}>Sports</button>
                </div>  
            </div>

            <div className="searchbar__box d-none">
                <label className="searchbar__title" htmlFor="search">Find the game</label>
                <input className="searchbar" type="text" id="search" value={searchGame} onChange={(event) => setSearchGame(event.target.value)} />
            </div>
            
            <div className="category__container">
                {newGames
                    .filter((game) => game.name.toLowerCase().includes(searchGame.toLowerCase()))
                    .map((game) => {
                        const {id,name,metacritic,background_image} = game;
                        return (
                        
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
                    }
                )}
            </div>
        </div>
    )
}

export default Categories;