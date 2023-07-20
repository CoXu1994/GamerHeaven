import { useState } from "react";
import { getCategoryGamesApi, getPageAPi } from "../api/api";
import { Link } from "react-router-dom";
import { AddToWishList } from "./wishlistOperations";
import "../sass/categories.scss";
import "../sass/common.scss";


function Categories() {
    const [newGames, setNewGames] = useState([]);
    const [searchGame, setSearchGame] = useState("");

    async function getGamesFromGenre(genre) {
        await getCategoryGamesApi(genre, 1).then((data) => setNewGames(data))
    } 

    async function changePage(data, direction) {
        
        if (direction == "Next" && data.next !== null) {
            await getPageAPi(data.next).then((newData) => setNewGames(newData));
            setBtnNextState("");
            setBtnState(false);
            
        } 
            
        if (direction == "Previous" && data.previous !== null) {
            await getPageAPi(data.previous).then((newData) => setNewGames(newData));
            setBtnPrevState("");
            setBtnState(false);
            
        } 
        
    } 
    

    return (
        <div>
            {newGames?.results?.length == 0 && (<p className="display">No games on the list {`:(`}</p>)}
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
            {newGames?.results?.length > 0 && (
                <>  
                    <div className="searchbar__box d-none">
                    <p className="disclaimer">All data and images comes from RAWG. <a className="page_link" href="https://rawg.io/apidocs">Find more at https://rawg.io/apidocs </a></p>
                        <label className="searchbar__title" htmlFor="search">Find the game</label>
                        <input className="searchbar" type="text" id="search" value={searchGame} onChange={(event) => setSearchGame(event.target.value)} />
                    </div>
                    
                    <div className="category__container">
                        {newGames?.results?.
                            filter((game) => game.name.toLowerCase().includes(searchGame.toLowerCase()))
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
                    <div className="page__btns">
                        <button className = "btn" onClick = {()=> changePage(newGames, "Previous")}><span className="btn__txt">Previous</span></button>
                        <button className = "btn" onClick = {()=> changePage(newGames, "Next")}><span className="btn__txt">Next</span></button>
                    </div>
                </>
            )}
            
            
        </div>
    )
}

export default Categories;