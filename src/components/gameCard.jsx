import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { addToWishList } from "./wishlistOperations";
import "../sass/gameCard.scss";
import "../sass/common.scss";
import { getGameApi } from "../api/api";
function GameCard() {
    const {gameId} = useParams(); 

    const { isLoading, error, data } = useQuery({
        queryKey: ['gameData', gameId],
        queryFn: () => getGameApi(gameId),
        });
    if (isLoading) return 'Loading...';
    
    if (error) return 'An error has occurred: ' + error.message;
    
    const {id, name, description_raw: description , esrb_rating, metacritic, platforms, background_image : image} = data;

    return (
        <>  
            <div className="gameCard__container--main" key={id} >
                <img className="gameCard__image" src={image} alt="image_of_game"/>

                <div className="gameCard__title--game">
                    <h2 className="gameCard__title">{name}</h2>
                </div>

                <div className="gameCard__container--description">
                    <h3 className="gameCard__description__title">Description</h3>
                    <p className="gameCard__description__txt">{description}</p>           
                </div>

                <div className="gameCard__container--rates">

                    <div className="gameCard__esrb">
                        <span className="gameCard__esrb__title">ESRB rating: </span>
                        <span className="gameCard__esrb__rate">
                            {esrb_rating  !== null && esrb_rating.name}
                            {esrb_rating == null && "-"}
                        </span>    
                    </div>

                    <div className="gameCard__metascore">
                        <span className="gameCard__metascore__title">Metacritic Score: </span>
                        <span className="gameCard__metascore__score">{metacritic}</span>
                    </div> 

                </div>

                <div className="gameCard__platforms">
                    <div>
                        <h3 className="gameCard__platforms__title">Platforms: </h3>    
                        <div className="gameCard__platforms__txt">
                            - {platforms.map((item) => (
                                <span>{item.platform.name} - </span>
                            ))}
                        </div>   
                    </div>      
                </div>
                <p className="disclaimer">All data and images comes from RAWG. <a className="page_link" href="https://rawg.io/apidocs">Find more at https://rawg.io/apidocs </a></p>               
                <button className="btn" onClick={() => addToWishList(data)}>
                    <span className="btn__icon icon-plus-squared"></span>
                    <span className="btn__txt">Add to Wishlist</span>
                </button>    
            </div> 
        </>                    
    )
}

export default GameCard