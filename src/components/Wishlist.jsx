import supabase from "../api/supaBase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../sass/wishlist.scss";
import "../sass/common.scss";

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
            <div className="btn__container">
                <h3 className="wishlist__title">Sort by: </h3>
                <div className="btn__box">
                    <button 
                        className="btn__sort icon-sort"
                        onClick = {() => sortResults('created_at')}
                    >
                        Date added
                    </button> 
                    <button
                        className="btn__sort icon-sort"
                        onClick = {() => sortResults('name')}
                    > Name
                    </button>
                    <button 
                        className="btn__sort icon-sort"
                        onClick = {() => sortResults('metacritic')}
                    > 
                        Metacritic Score
                    </button>
                </div>
                <div className="searchbar__box w">
                    <label className="searchbar__title" htmlFor="search">Find the game</label>
                    <input className="searchbar" type="text" id="search" value={searchGame} onChange={(event) => setSearchGame(event.target.value)} />
                </div>
                
            </div>
            {fetchError && (<p>{fetchError}</p>)}
            <div className="wishlist__list">
            {wishedGames && (
                wishedGames
                .filter((game) => game.name.toLowerCase().includes(searchGame))
                .map((game) => {
                    const {id,name,metacritic,image, game_id} = game;
                    return(
                        <div className="game__container" key={id}>
                            <h3 className="game__title">{name}</h3>
                            <Link className="link" to={`/gameCard/${game_id}`}>
                                <img className="game__image" src={image}/>
                            </Link>
                            <div className="game__meta">
                                <span class="game__title__metacritic">Metacritic score: </span> 
                                <span class="game__score">{metacritic}</span>
                            </div>
                            <button  className="btn" onClick={() => AddToWishList(game)}>
                                <span className="btn__icon icon-cancel-squared"></span>
                                <span className="btn__txt">Remove</span>
                            </button>
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