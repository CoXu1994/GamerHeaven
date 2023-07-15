import { useEffect, useState } from "react";
import { getAllGamesApi, getBestRatedGamesApi, getNewGamesApi, getPlatformApi,/* getCategoryGamesApi */} from "../api/api";
import { Button, Typography} from '@mui/material';
import { Link } from "react-router-dom";
import { AddToWishList } from "./wishlistOperations";
import * as Style from './allgames.style'

function AllGames() {
  const [newGames, setNewGames] = useState([]);
  const [games, setGames] = useState([]);
  const [bestRated, setBestRated] = useState([]);
  const [platformPC, setPlatformPC] = useState([]);
  const [platformXbox, setPlatformXbox] = useState([]);
  const [platformPSN, setPlatformPSN] = useState([]);

  const [searchGame, setSearchGame] = useState("");

  useEffect(() => {
    const randomPage = Math.floor(Math.random() * 20);
       getAllGamesApi(1).then((data) => setGames(data.results))
       getBestRatedGamesApi().then((data) => setBestRated(data.results))
       getNewGamesApi().then((data) => setNewGames(data.results))
       getPlatformApi(4, 1).then((data) => setPlatformPC(data.results))
       getPlatformApi(1, 1).then((data) => setPlatformXbox(data.results))
       getPlatformApi(18, 1).then((data) => setPlatformPSN(data.results))

  }, [])
  console.log(games)

    function jsxTemplate(data, headertxt) {

        const filteredData = data.filter((game) => game.name.toLowerCase().includes(searchGame))
        
        if (filteredData.length > 0) { 
            return (
                <>
                    <Typography sx={{mt: 5, mb: 2, textShadow: "2px 4px 3px black"}} variant="h4" component="h2">
                        {headertxt}
                    </Typography>
                    <section style={{display: "flex", gap: 10, overflow: "auto", margin: "3rem 0"}}>
                        {filteredData.map((game) => (
                                <div key={game.id} style={Style.GameContainer}>
                                    <div style = {{height: 30, marginBottom: 8}}>
                                        <Typography sx={{mb: 2, mt: 2, textShadow: "4px 6px 5px black", fontWeight: "bold", letterSpacing: 1}} variant="span" component="span">
                                            {game.name}
                                        </Typography>  
                                    </div> 
                                    <Link to={`/gameCard/${game.id}`}><img src={game.background_image} style={{width: "16rem", height: "8rem", borderRadius: 15, boxShadow: "2px 4px 3px black"}}/></Link>
                                    <div style={{marginTop: 5, marginBottom: 5}}>
                                        <Typography sx={{ textShadow: "4px 6px 5px black", letterSpacing: 1}} variant="span" component="span">
                                            Metacritic score: <span style = {{fontSize: 20, fontWeight: "bold"}}>{game.metacritic}</span>
                                        </Typography> 
                                        <Button onClick={() => AddToWishList(game)} sx={{color: "white", borderColor: "white", boxShadow: " 2px 8px 10px black", marginTop: 1}} variant="outlined">Add to Wishlist</Button>
                                    </div>
                                </div>
                        ))}
                    </section>
                                
                </>            
            )
        }
    }
  

  return (
    <>
        <input style={{marginTop: 70}}type="text" value={searchGame} onChange={(event) => setSearchGame(event.target.value)} />
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







