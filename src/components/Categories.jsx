import { useState } from "react";
import { getCategoryGamesApi, getPageAPi } from "../api/api";
import { useQuery } from "@tanstack/react-query";
import GameTemplate from "./GameTemplate";
import "../sass/categories.scss";
import "../sass/common.scss";


function Categories() {
    const [games, setGames] = useState([]);
    const [searchGame, setSearchGame] = useState("");
    const [category, setCategory] = useState("");
    const [page, setPage] = useState(1);

    const categoryQuery = useQuery({
        queryKey: ["category", category, page],
        queryFn: () => getCategoryGamesApi(category, page),
        keepPreviousData: true,
    })

    if (categoryQuery.isLoading) return <div>Loading...</div>
    if (categoryQuery.isError) return <div>Error</div>

    function getGamesFromGenre(event) {
        setCategory(event.currentTarget.dataset.genre);
        setGames(categoryQuery.data)
    }

    function changePage(direction) {
        
        if (direction == "next" && games.next !== null) {
                setPage(old => old + 1)
                setGames(categoryQuery.data);
        } 
            
        if (page > 1 && direction == "previous" && games.previous !== null) {
                setPage(old => old - 1)
                setGames(categoryQuery.data)   
        } 
        
    } 
    
    console.log(games)
    return (
        <div>
            {games?.results?.length == 0 && (<p className="display">No games on the list {`:(`}</p>)}
            <div className="filter__box">
                <h2 className="filter__title">Choose genre: </h2>
                <div className="filter__buttons">
                    <button className="filter__btn" data-genre={"action"} onClick={(event) => getGamesFromGenre(event)}>Action</button>
                    <button className="filter__btn" data-genre={"shooter"} onClick={(event) => getGamesFromGenre(event)}>Shooter</button>
                    <button className="filter__btn" data-genre={"adventure"} onClick={(event) => getGamesFromGenre(event)}>Adventure</button>
                    <button className="filter__btn" data-genre={"indie"} onClick={(event) => getGamesFromGenre(event)}>Indie</button>
                    <button className="filter__btn" data-genre={"fighting"} onClick={(event) => getGamesFromGenre(event)}>Fighting</button>
                    <button className="filter__btn" data-genre={"platformer"} onClick={(event) => getGamesFromGenre(event)}>Platformer</button>
                    <button className="filter__btn" data-genre={"strategy"} onClick={(event) => getGamesFromGenre(event)}>Strategy</button>
                    <button className="filter__btn" data-genre={"simulation"} onClick={(event) => getGamesFromGenre(event)}>Simulation</button>
                    <button className="filter__btn" data-genre={"sports"} onClick={(event) => getGamesFromGenre(event)}>Sports</button>
                </div>  
            </div>
            {games?.results?.length > 0 && (
                <>  
                    <div className="searchbar__box d-none">
        <p className="disclaimer">All data and images comes from RAWG. <a className="page_link" href="https://rawg.io/apidocs">Find more at https://rawg.io/apidocs </a></p>
                        <label className="searchbar__title" htmlFor="search">Find the game</label>
                        <input className="searchbar" type="text" id="search" value={searchGame} onChange={(event) => setSearchGame(event.target.value)} />
                    </div>
                    
                    <div className="category__container">
                        {games?.results?.
                            filter((game) => game.name.toLowerCase().includes(searchGame.toLowerCase()))
                            .map((game) => {
                                const {id,name,metacritic,background_image} = game;
                                return (
                                
                                    <GameTemplate key={id} game={game} id={id} name={name} metacritic={metacritic} background_image={background_image} />
                                )
                            }
                        )}
                        
                    </div>
                    <div className="page__btns">
                        <button className = "btn"  onClick = {()=> changePage("previous")}><span className="btn__txt">Previous</span></button>
                        <button className = "btn"  onClick = {()=> changePage("next")}><span className="btn__txt">Next</span></button>
                    </div>
                </>
            )}
            
            
        </div>
    )
}

export default Categories;