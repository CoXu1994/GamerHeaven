import { useParams } from "react-router-dom"
import { getGameApi } from "../api/api";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { AddToWishList } from "./wishlistOperations";
import gameCard.scss;

function GameCard() {
   const {gameId} = useParams();
   const [game, setGame] = useState(null)

   function getGameDetails(id) {
        getGameApi(id).then((data) => setGame(data) )
   }
   useEffect(() => {
    getGameDetails(gameId)
   }, [gameId])
   console.log(game)
   if (!game) {
    return <div>Loading...</div>
   }

   const {id, name, description_raw: description , esrb_rating, metacritic, platforms, background_image : image, background_image_additional : bgc_image} = game;
    return (

        <div className="game_container" key={id} 
            style={{
                
                marginTop: 50,  
                width: 375, 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center",
                marginInline: "auto",
                
            }}>
            <div>
                <img 
                    style={{
                        marginTop: 20,
                        width: 360, 
                        height: 180, 
                        borderRadius: 5,
                    }}
                    src={image} 
                    alt="image_of_game" 
                />
                <div style={{
                    backgroundColor: "rgba(255,255,255, 0.125)", 
                    borderRadius: 5, 
                    width: 360, 
                    textAlign: "center", 
                    color: "rgba(255,255,255)", 
                    padding: "1px 10px", 
                    boxSizing: "border-box",
                    marginTop: 15,
                    }}>
                    <h2 style= {{fontFamily: `'Tektur', cursive`, fontSize: 22, fontWeight: 600 }}>{name}</h2>
                </div>

                <div style={{
                    backgroundColor: "rgba(255,255,255, 0.125)", 
                    borderRadius: 5, 
                    width: 360,  
                    color: "rgba(255,255,255)", 
                    padding: "6px 10px", 
                    marginTop: 10
                }}>
                <span style={{
                    display: "block",
                    borderBottom: "1px solid white",
                    fontSize: 20,
                    lineHeight: 1.5,
                    fontFamily: `'Tektur', cursive`,
                    fontWeight: 500
                }}>Description</span>
                <p style={{
                    overflow: "auto",
                    height: 150,
                    color: "white",
                    marginTop: 10,
                    fontFamily: `'Tektur', cursive`,
                    fontWeight: 400,
                    fontSize: 14,
                    paddingBottom: 6
                    }}>{description}</p>
                
                </div>              
            </div>
            <div style={{ 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginInline: "auto",
                gap: 5,
                marginTop: 15, 
                width: 360,
                padding: 10,
                backgroundColor: "rgba(255,255,255, 0.125)", 
                fontFamily: `'Tektur', cursive`}}>
                <div style={{display: "flex",flexBasis: "40%", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 3}}>
                    <span style= {{fontWeight: "bold",fontSize: 20, color: "white", borderBottom: "1px solid white", lineHeight: 2}}>ESRB rating: </span>
                    <span style={{color: "white", marginTop: 10}}>{esrb_rating.name}</span>
                    
                </div>
                <div style={{marginLeft: 20,display: "flex",flexBasis: "50%", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 3}}>
                    <span style={{fontWeight: "bold",fontSize: 20, color: "white", borderBottom: "1px solid white", lineHeight: 2}}>Metacritic Score: </span>
                    <span style = {{fontWeight: 400, color: "white", marginTop: 10}}>{metacritic}</span>
                </div>                   
            </div>
            <div style={{ 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginInline: "auto",
                gap: 5,
                marginTop: 15, 
                marginBottom: 25,
                width: 360,
                padding: 10,
                backgroundColor: "rgba(255,255,255, 0.125)", 
                fontFamily: `'Tektur', cursive`}}>
                <div>
                    <h3 style= {{textAlign: "center", fontWeight: "bold",fontSize: 20, color: "white", borderBottom: "1px solid white", lineHeight: 2}}>Platforms: </h3>    
                    <div style= {{textAlign: "center", color: "white", marginTop: 10}}>
                        - {platforms.map((item) => (
                            <span>{item.platform.name} - </span>
                        ))}
                    </div>
                    
                </div>    
                
            </div>
            <Button onClick={() => AddToWishList(game)} sx={{color: "white", borderColor: "white", marginBottom: 5}} variant="outlined">
               Add to Wishlist</Button>
        </div>
        
    )
}

export default GameCard