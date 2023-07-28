import GameTemplate from "./GameTemplate";



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
                               <GameTemplate key={id} game={game} id={id} name={name} metacritic={metacritic} background_image={background_image} />
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