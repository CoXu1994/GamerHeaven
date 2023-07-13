import { useState } from "react";
import { getCategoryGamesApi } from "../api/api";
import { Typography, Button } from "@mui/material";
function Categories() {
    const [newGames, setNewGames] = useState([]);
    const [searchGame, setSearchGame] = useState("");

        function FilterGames(category) {
            switch(category) {
                case "Action" :
                    getCategoryGamesApi(4).then((data) => setNewGames(data.results))
                    break;
                case "RPG" :
                    getCategoryGamesApi(5).then((data) => setNewGames(data.results))
                    break;
                case "Shooter" :
                    getCategoryGamesApi(2).then((data) => setNewGames(data.results))
                    break;
                case "Adventure" :
                    getCategoryGamesApi(3).then((data) => setNewGames(data.results))
                    break;
                
                case "Indie" :
                    getCategoryGamesApi(51).then((data) => setNewGames(data.results))
                    break;
                case "Fighting" :
                    getCategoryGamesApi(6).then((data) => setNewGames(data.results))
                    break; 
                case "Platformer" :
                    getCategoryGamesApi(83).then((data) => setNewGames(data.results))
                    break;  
                case "Strategy" :
                    getCategoryGamesApi(10).then((data) => setNewGames(data.results))
                    break; 
                case "Simulation" :
                    getCategoryGamesApi(14).then((data) => setNewGames(data.results))
                    break; 
                case "Sports" :
                    getCategoryGamesApi(15).then((data) => setNewGames(data.results))
                    break;

            }
         }
        

console.log(newGames)

 return (
    <>
        
        <h2 style={{marginTop: 80, textAlign: "center"}}>Wybierz kategorie</h2>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent:"center"}}>
            <button onClick={() => FilterGames("Action")}>Action</button>
            <button onClick={() => FilterGames("RPG")}>RPG</button>
            <button onClick={() => FilterGames("Shooter")}>Shooter</button>
            <button onClick={() => FilterGames("Adventure")}>Adventure</button>
            <button onClick={() => FilterGames("Indie")}>Indie</button>
            <button onClick={() => FilterGames("Fighting")}>Fighting</button>
            <button onClick={() => FilterGames("Platformer")}>Platformer</button>
            <button onClick={() => FilterGames("Strategy")}>Strategy</button>
            <button onClick={() => FilterGames("Simulation")}>Simulation</button>
            <button onClick={() => FilterGames("Sports")}>Sports</button>
            <input style={{marginTop: 5, width: "70%"}}type="text" value={searchGame} onChange={(event) => setSearchGame(event.target.value)} />
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
                        {/* <Button onClick={() => AddToWishList(game)}  sx={{color: "white", borderColor: "white", boxShadow: " 2px 8px 10px black", marginTop: 1}} variant="outlined">Add to Wishlist</Button> */}
                    </div>
                </div>
        ))}
    </> 

 )
}

export default Categories;