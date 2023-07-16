import { useState } from "react";
import { getCategoryGamesApi } from "../api/api";
import { Typography, Button } from "@mui/material";
import { AddToWishList } from "./wishlistOperations";
function Categories() {
    const [newGames, setNewGames] = useState([]);
    const [searchGame, setSearchGame] = useState("");

    function getGamesFromGenre(genre) {
        getCategoryGamesApi(genre).then((data) => setNewGames(data.results))
    } 

 return (
    <>
        <div className="filtr__box">
            <h2 className="filtr__title"style={{marginTop: 80, textAlign: "center"}}>Choose genre: </h2>
            <div className="filtr__buttons"style={{display: "flex", flexWrap: "wrap", justifyContent:"center"}}>
                <button className="btn" onClick={() => getGamesFromGenre("action")}>Action</button>
                <button className="btn" onClick={() => getGamesFromGenre("shooter")}>Shooter</button>
                <button className="btn" onClick={() => getGamesFromGenre("adventure")}>Adventure</button>
                <button className="btn" onClick={() => getGamesFromGenre("indie")}>Indie</button>
                <button className="btn" onClick={() => getGamesFromGenre("fighting")}>Fighting</button>
                <button className="btn" onClick={() => getGamesFromGenre("platformer")}>Platformer</button>
                <button className="btn" onClick={() => getGamesFromGenre("strategy")}>Strategy</button>
                <button className="btn" onClick={() => getGamesFromGenre("simulation")}>Simulation</button>
                <button className="btn" onClick={() => getGamesFromGenre("sports")}>Sports</button>
                <input className="searchbar" style={{marginTop: 5, width: "70%"}}type="text" value={searchGame} onChange={(event) => setSearchGame(event.target.value)} />
            </div>
        </div>
        
        {newGames
            .filter((game) => game.name.toLowerCase().includes(searchGame))
            .map((game) => (
                <div key={game.id} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <div style = {{height: 30, marginBottom: 8}}>
                        <Typography sx={{mb: 2, mt: 2, textShadow: "4px 6px 5px black", fontWeight: "bold", letterSpacing: 1}} variant="span" component="span">
                            {game.name}
                        </Typography>  
                    </div> 
                    <img src={game.background_image} style={{width: "16rem", height: "8rem", borderRadius: 15, boxShadow: "2px 4px 3px black"}}/>
                    <div style={{marginTop: 5, marginBottom: 5}}>
                        <Typography sx={{ textShadow: "4px 6px 5px black", letterSpacing: 1}} variant="span" component="span">
                            Metacritic score: <span style = {{fontSize: 20, fontWeight: "bold"}}>{game.metacritic}</span>
                        </Typography> 
                        <Button onClick={() => AddToWishList(game)}  sx={{color: "white", borderColor: "white", boxShadow: " 2px 8px 10px black", marginTop: 1}} variant="outlined">Add to Wishlist</Button>
                    </div>
                </div>
        ))}
    </> 

 )
}

export default Categories;