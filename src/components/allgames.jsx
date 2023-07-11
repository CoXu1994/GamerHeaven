import { useEffect, useState } from "react";
import { getAllGamesApi, getBestRatedGamesApi, getNewGamesApi, getPlatformApi,/* getCategoryGamesApi */} from "../api/api";
import { Button, Typography } from '@mui/material';
import ButtonAppBar from "./navigation";



function AllGames() {
  const [newGames, setNewGames] = useState([]);
  const [games, setGames] = useState([]);
//   const [actionGames, setActionGames] = useState([]);
  const [bestRated, setBestRated] = useState([]);
  const [platformPC, setPlatformPC] = useState([]);
  const [platformXbox, setPlatformXbox] = useState([]);
  const [platformPSN, setPlatformPSN] = useState([]);

  useEffect(() => {
    const randomPage = Math.floor(Math.random() * 20);
       getAllGamesApi(1).then((data) => setGames(data.results))
    //    getCategoryGamesApi("action").then((data) => setActionGames(data.results))
       getBestRatedGamesApi().then((data) => setBestRated(data.results))
       getNewGamesApi().then((data) => setNewGames(data.results))
       getPlatformApi(4, 1).then((data) => setPlatformPC(data.results))
       getPlatformApi(1, 1).then((data) => setPlatformXbox(data.results))
       getPlatformApi(18, 1).then((data) => setPlatformPSN(data.results))
  }, [])

  return (
    <>
    <ButtonAppBar />
    <Typography sx={{mt: 10, mb: 2, textShadow: "2px 4px 3px black"}} variant="h4" component="h2">
        New games
    </Typography>
    <section style={{display: "flex", gap: 10, overflow: "auto", margin: "3rem 0"}}>
        {newGames.map((game) => (
            <div key={game.id} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",}}>
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
                    <Button sx={{color: "white", borderColor: "white", boxShadow: " 2px 8px 10px black", marginTop: 1}} variant="outlined">Add to Wishlist</Button>
                </div>
            </div>
        ))}
    </section>
      
    <Typography sx={{mb: 2, mt: 2, textShadow: "2px 4px 3px black"}} variant="h4" component="h2">
        Popular games
    </Typography>
    <section style={{display: "flex", gap: 10, overflow: "auto", margin: "3rem 0"}}>
        {games.map((game) => (
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
                    <Button sx={{color: "white", borderColor: "white", boxShadow: " 2px 8px 10px black", marginTop: 1}} variant="outlined">Add to Wishlist</Button>
                </div>
            </div>
        ))}
    </section>

    <Typography sx={{mb: 2, mt: 2, textShadow: "2px 4px 3px black"}} variant="h4" component="h2">
        Best rated games
    </Typography>
    <section style={{display: "flex", gap: 10, overflow: "auto",  margin: "3rem 0"}}>
        {bestRated.map((game) => (
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
                    <Button sx={{color: "white", borderColor: "white", boxShadow: " 2px 8px 10px black", marginTop: 1}} variant="outlined">Add to Wishlist</Button>
                </div>
            </div>
        ))}
    </section>

    <Typography sx={{mb: 2, mt: 2, textShadow: "2px 4px 3px black"}} variant="h4" component="h2">
        Play on PC
    </Typography>
    <section style={{display: "flex", gap: 10, overflow: "auto",  margin: "3rem 0"}}>
        {platformPC.map((game) => (
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
                    <Button sx={{color: "white", borderColor: "white", boxShadow: " 2px 8px 10px black", marginTop: 1}} variant="outlined">Add to Wishlist</Button>
                </div>
            </div>
        ))}
    </section>
    <Typography sx={{mb: 2, mt: 2, textShadow: "2px 4px 3px black"}} variant="h4" component="h2">
        Play on Playstation
    </Typography>
    <section style={{display: "flex", gap: 10, overflow: "auto", margin: "3rem 0"}}>
        {platformPSN.map((game) => (
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
                    <Button sx={{color: "white", borderColor: "white", boxShadow: " 2px 8px 10px black", marginTop: 1}} variant="outlined">Add to Wishlist</Button>
                </div>
            </div>
        ))}
    </section>
    <Typography sx={{mb: 2, mt: 2, textShadow: "2px 4px 3px black"}} variant="h4" component="h2">
        Play on Xbox
    </Typography>
    <section style={{display: "flex", gap: 10, overflow: "auto",  }}>
        {platformXbox.map((game) => (
            <div key={game.id} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <Typography sx={{mb: 2, mt: 2, textShadow: "4px 6px 5px black", fontWeight: "bold", letterSpacing: 1}} variant="span" component="span">
                    {game.name}
                </Typography>   
                <img src={game.background_image} style={{width: "16rem", height: "8rem", borderRadius: 15, boxShadow: "2px 4px 3px black"}}/>
                <div style={{marginTop: 5, marginBottom: 5}}>
                    <Typography sx={{ textShadow: "4px 6px 5px black", letterSpacing: 1}} variant="span" component="span">
                        Metacritic score: <span style = {{fontSize: 20, fontWeight: "bold"}}>{game.metacritic}</span>
                    </Typography> 
                    <Button sx={{color: "white", borderColor: "white", boxShadow: " 2px 8px 10px black", marginTop: 1}} variant="outlined">Add to Wishlist</Button>
                </div>
            </div>
        ))}
    </section>
    
      


    </>
  )
}

export default AllGames







