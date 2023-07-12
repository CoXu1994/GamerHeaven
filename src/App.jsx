import AllGames from "./components/allgames";
import "./App.css"
import WishList from "./components/Wishlist";
import SearchBar from "./components/SearchBar";

function App() {

  const handleSearch = (searchTerm) => {
    
    console.log("Wyszukano:", searchTerm);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      <AllGames />
      <WishList />
    </>
  )
}

export default App
