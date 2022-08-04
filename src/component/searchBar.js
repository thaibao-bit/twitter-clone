import './searchBar.css'
import SearchSvg from './svg/searchSvg'

const SearchBar = () => {
    
    return <div className="search_bar">
        <div className="search_wrapper">
            <div className="search_icon">
                <SearchSvg/>
            </div>
        <input type="text" placeholder="Searchhhhh...." />
        </div>
    </div>
}

export default SearchBar