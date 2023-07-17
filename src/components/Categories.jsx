import { useState } from "react";
import { getCategoryGamesApi } from "../api/api";
import { Typography, Button } from "@mui/material";
import { AddToWishList } from "./wishlistOperations";
import "./categories.scss";
function Categories() {
    const [newGames, setNewGames] = useState([]);
    const [searchGame, setSearchGame] = useState("");

    function getGamesFromGenre(genre) {
        getCategoryGamesApi(genre).then((data) => setNewGames(data.results))
    } 

 return (
    <div>
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
            <h3 className="searchbar__title">Find the game:</h3>
            <input className="searchbar__categories" type="text" value={searchGame} onChange={(event) => setSearchGame(event.target.value)} />
        </div>
        <div className="category__container">
            {newGames
                .filter((game) => game.name.toLowerCase().includes(searchGame))
                .map((game) => {
                    const {id,name,metacritic,background_image} = game;
                    return (
                    
                        <div className="category__box" key={id}>
                            <div className="category__title__box">
                                <Typography className="game__title" variant="span" component="span">
                                    {name}
                                </Typography>  
                            </div> 
                            <img className="category__image"src={background_image} />
                            <div className="category__metacritic__box">
                                <Typography className="category__metacritic" variant="span" component="span">
                                    Metacritic score: <span className="category__metacritic__txt">{metacritic}</span>
                                </Typography> 
                                <Button 
                                    onClick={() => AddToWishList(game)} 
                                    sx={{
                                        color: "white", 
                                        borderColor: "white", 
                                        marginTop: 1
                                    }} 
                                    variant="outlined"
                                >
                                    Remove from WishList
                                </Button>
                            </div>
                        </div>  
                )}
            )}
        </div>
    </div>

 )
}

export default Categories;