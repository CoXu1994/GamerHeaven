import supabase from "../api/supaBase";
import { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";

function WishList() {
    const [fetchError, setFetchError] = useState(null);
    const [wishedGames, setWishedGames] = useState([]);
    const [orderBy, setOrderBy] = useState('created_at')

    useEffect(() => {
        const fetchList = async () => {
            const { data, error} = await supabase
                .from("wishlist")
                .select()
                .order(orderBy)
        

            if(error) {
                setFetchError("Nie udałosię pobrać danych z serwera")
                setWishedGames(null);
                console.log(error)
            }

            if(data) {
                setWishedGames(data);
                setFetchError(null);
            }
            
        }

        fetchList()
    }, [orderBy])

    console.log(wishedGames)

    async function removeFromWishList({name}) {
    
        if(!name) {
            return "error -- Give me the name"
        
        }
        const {error} = await supabase
            .from("wishlist")
            .delete()
            .eq("name", name)
            .select()
            
            if (error) {
                console.log("U missing something")
            }
            
            setWishedGames(prevWishedGames => prevWishedGames.filter(game => game.name !== name))
      }
    
         function sortResults(sortType) {
            if(sortType == "created_at") {
                setOrderBy("created_at");
                return setWishedGames(wishedGames => wishedGames.toReversed())
            }
            if(sortType == "name") {
                setOrderBy("name");
                return setWishedGames(wishedGames => wishedGames.toReversed())
            }
            if(sortType == "metacritic") {
                setOrderBy("metacritic");
                return setWishedGames(wishedGames => wishedGames.toReversed())
            }  
         }
         const [searchGame, setSearchGame] = useState("");     

return (
<>


        
        <section style={{marginTop: 40}}>
            <input style={{marginTop: 40}}type="text" value={searchGame} onChange={(event) => setSearchGame(event.target.value)} />
            <div style={{marginTop: 20, marginBottom: 20, display: "flex", flexDirection: "column"}}>
                <Button sx={{border: "1px solid gray", bgcolor: "rgba(0,0,0, .3)", color: "white"}} onClick = {() => sortResults('created_at')}>Data dodania</Button>
                <Button sx={{border: "1px solid gray", bgcolor: "rgba(0,0,0, .3)", color: "white"}} onClick = {() => sortResults('name')}>Nazwa</Button>
                <Button sx={{border: "1px solid gray", bgcolor: "rgba(0,0,0, .3)", color: "white"}} onClick = {() => sortResults('metacritic')}> Ocena Metacritic</Button>
            </div>
            {fetchError && (<p>{fetchError}</p>)}
            {wishedGames && (
                wishedGames
                .filter((game) => game.name.toLowerCase().includes(searchGame))
                .map((game) => (

                    <div key={game.id} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <div style = {{height: 30, marginBottom: 8}}>
                            <Typography sx={{mb: 2, mt: 2, textShadow: "4px 6px 5px black", fontWeight: "bold", letterSpacing: 1}} variant="span" component="span">
                                {game.name}
                            </Typography>  
                        </div> 
                        <img src={game.image} style={{width: "16rem", height: "8rem", borderRadius: 15, boxShadow: "2px 4px 3px black"}}/>
                        <div style={{marginTop: 5, marginBottom: 5}}>
                            <Typography sx={{ textShadow: "4px 6px 5px black", letterSpacing: 1}} variant="span" component="span">
                                Metacritic score: <span style = {{fontSize: 20, fontWeight: "bold"}}>{game.metaScore}</span>
                            </Typography> 
                            <Button onClick={() => removeFromWishList(game)} sx={{color: "white", borderColor: "white", boxShadow: " 2px 8px 10px black", marginTop: 1}} variant="outlined">Remove from WishList</Button>
                        </div>
                    </div>
                ))
            )}
            {wishedGames.length == 0 && (<p style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Ani jednej gry na liście {`:(`}</p>)}
        </section>
</>
    ) 
    
}

export default WishList;