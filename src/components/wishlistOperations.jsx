import supabase from "../api/supaBase";

export async function AddToWishList({name, background_image, metacritic}) {
    
    if(!name || !background_image || !metacritic) {
        return "error -- U mising something"
    
    }
    const {data, error} = await supabase
        .from("wishlist")
        .insert([{name: name, image: background_image, metacritic: metacritic}])
        
    if (error) {
        console.log("U missing something")
    }
    if (data) {
        console.log(data)
    }
}

// export async function removeFromWishList({name}) {
    
//     if(!name) {
//         return "error -- Give me the name"
    
//     }
//     const {error} = await supabase
//         .from("wishlist")
//         .delete()
//         .eq("name", name)
//         .select()
        
//     if (error) {
//         console.log("U missing something")
//     }
        
//     setWishedGames(prevWishedGames => prevWishedGames.filter(game => game.name !== name))
// }