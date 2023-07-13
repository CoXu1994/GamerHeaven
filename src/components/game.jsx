import { Link, useParams } from "react-router-dom"
import { getGameApi } from "../api/api";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import supabase from "../api/supaBase";

function Game() {
   const {gameId} = useParams();
   const [game, setGame] = useState(null)

   function getGameDetails(id) {
        getGameApi(id).then((data) => setGame(data) )
   }
   useEffect(() => {
    getGameDetails(gameId)
   }, [gameId])
   console.log(game)

   async function AddToWishList({name, background_image, metacritic}) {
    
    if(!name || !background_image || !metacritic) {
        return "error -- U mising something"
    
    }
    const {data, error} = await supabase
        .from("wishlist")
        .insert([{name: name, image: background_image, metaScore: metacritic}])
        
        if (error) {
            console.log("U missing something")
        }
        if (data) {
            console.log(data)
        }
  }

   if (!game) {
    return <div>Loader...</div>
   }
    return (

        <div style={{marginTop: 80}}>
            <button><Link to="/">Powrót</Link></button>
            <div>
                <h2>{game.name}</h2>
                <img style={{width: 360, height: 180}}src={game.background_image_additional} alt="" />
                <p style={{overflow: "auto", height: 200}}>{game.description_raw}</p>
                <div style={{display: "flex", flexDirection: "column",flexWrap: "wrap", gap: 3}}>
                    <span style= {{marginRight: 10}}>ESRB rating: {game.esrb_rating.name}</span>
                    <span>Metacritic Score: {game.metacritic}</span>
                    <div >
                        {game.platforms.map((item) => <span>{item.platform.name} </span>)}
                    </div>
                </div>
            </div>
            <Button onClick={() => AddToWishList(game)} sx={{color: "white", borderColor: "white", boxShadow: " 2px 8px 10px black", marginTop: 1}} variant="outlined">Add to Wishlist</Button>
        </div>
    )
}

export default Game