import { Link } from "react-router-dom";
import { addToWishList } from "./wishlistOperations";

function GameTemplate({game,id, name, background_image, metacritic}) {

    return (
        <div className="game__container" key={id}>
            <h3 className="game__title">{name}</h3>
            <Link className="link" to={`/gameCard/${id}`}>
            <img className="game__image" src={background_image}/>
            </Link>
            <div className="game__meta">
                <span className="game__title__metacritic">Metacritic score: </span> 
                <span className="game__score">{metacritic}</span>
            </div>
            <button  className="btn" onClick={() => addToWishList(game)}>
                <span className="btn__icon icon-plus-squared"></span>
                <span className="btn__txt">Add to Wishlist</span>
            </button>
        </div>
    )
}

export default GameTemplate;



