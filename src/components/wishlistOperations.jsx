import supabase from "../api/supaBase";

export async function AddToWishList({name, background_image, metacritic, id}) {
    
    if(!name || !background_image || !metacritic || !id) {
        return "error -- U mising something"
    
    }
    const {data, error} = await supabase
        .from("wishlist")
        .insert([{name: name, image: background_image, metacritic: metacritic, game_id: id}])
        
    if (error) {
        console.log("U missing something")
    }
    if (data) {
        console.log(data)
    }
    
}