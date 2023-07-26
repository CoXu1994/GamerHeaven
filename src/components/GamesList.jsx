import { Link } from "react-router-dom";
import { AddToWishList } from "./WishlistOperations";



function GamesList({data, headertxt, type, search, changePage}) {
    const filteredData = data?.results?.filter((game) => game.name.toLowerCase().includes(search.toLowerCase()))
    
    
    if (filteredData?.length > 0) { 
        return (
            <>  
                <div className="slider__wrap">
                    <h2 className="slider__title">{headertxt}</h2>
                    <section className="slider">
                        {filteredData.map((game) => {
                            const {id, name, metacritic, background_image} = game;
                            return  (
                                <div className="game__container" key={id}>
                                    <h3 className="game__title">{name}</h3>
                                    <Link className="link" to={`/gameCard/${id}`}>
                                        <img className="game__image" src={background_image}/>
                                    </Link>
                                    <div className="game__meta">
                                        <span className="game__title__metacritic">Metacritic score: </span> 
                                        <span className="game__score">{metacritic}</span>
                                    </div>
                                    <button  className="btn" onClick={() => AddToWishList(game)}>
                                        <span className="btn__icon icon-plus-squared"></span>
                                        <span className="btn__txt">Add to Wishlist</span>
                                    </button>
                                </div>
                            )
                        })}  
                    </section>
                    <div className="page__btns">
                        <button className = "btn" onClick = {()=> changePage(data, "Previous", type)}><span className="btn__txt">Previous</span></button>
                        <button className = "btn" onClick = {()=> changePage(data, "Next", type)}><span className="btn__txt">Next</span></button>
                    </div>
                </div> 
                           
            </>            
        )
    }
}

export default GamesList;