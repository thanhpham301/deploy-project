import { useContext, useState } from "react";
import { ProductContext } from "../../data/ProductContext";

function Search() {
    const {setSearchProduct} = useContext(ProductContext)
    const [search, setSearch] = useState("")
    

    function handleSearchChanged(event) {

        setSearch(event.target.value)
    }

    function handleClickSearch() {
        const searchTerm = search.split(" ")
        setSearchProduct(searchTerm)
        setSearch("")
    }
    return (
        <div>
            <label htmlFor="search" onClick={handleClickSearch}
            className="absolute flex cursor-pointer w-[40px] h-[40px] rounded-[20px] hover:bg-neutral-300">
                <i className="far fa-search w-full h-[32px] text-center text-[20px] pt-[10px]"></i>
            </label>
            <input 
            type="text" 
            placeholder="Search" 
            id="search" 
            className="rounded-[20px] bg-[#f5f5f5] text-[15px] h-[40px] hover:bg-neutral-300 pl-[40px] w-[160px]"
            value={search}
            onChange={handleSearchChanged}
            />
        </div>
    )
    
}

export default Search;