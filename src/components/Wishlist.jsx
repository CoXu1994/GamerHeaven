import supabase from "../api/supaBase";
import { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import "./wishlist.scss";

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


        
        <section className="wishlist__container">
            <input 
                className="searchbar" 
                type="text" 
                value={searchGame} 
                onChange={(event) => setSearchGame(event.target.value)} 
            />
            <div className="btn__container d-none">
                <Button 
                    onClick = {() => sortResults('created_at')}
                >
                    Date of 
                </Button>
                <Button  
                    onClick = {() => sortResults('name')}
                >Nazwa
                </Button>
                <Button 
                    onClick = {() => sortResults('metacritic')}
                > 
                    Ocena Metacritic
                </Button>


                
            </div>
            {fetchError && (<p>{fetchError}</p>)}
            <div className="game__container">
            {wishedGames && (
                wishedGames
                .filter((game) => game.name.toLowerCase().includes(searchGame))
                .map((game) => {
                    const {id,name,metacritic,image} = game;
                    return(
                    <div className="game__box" key={id}>
                        <div className="game__title__box">
                            <Typography className="game__title" variant="span" component="span">
                                {name}
                            </Typography>  
                        </div> 
                        <img className="game__image"src={image} />
                        <div className="game__metacritic__box">
                            <Typography className="game__metacritic" variant="span" component="span">
                                Metacritic score: <span className="game__metacritic__txt">{metacritic}</span>
                            </Typography> 
                            <Button 
                                onClick={() => removeFromWishList(game)} 
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
                ))
            }
            </div>
            {wishedGames.length == 0 && (<p className="noGames" >No games on the list {`:(`}</p>)}
        </section>
</>
    ) 
    
}

export default WishList;