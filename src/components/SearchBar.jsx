import { useState } from "react";


function SearchBar() {
    const [searchValue, setSearchValue] = useState("");

    return <input type="text" value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
}

export default SearchBar;