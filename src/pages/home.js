
import { Routes, Route } from "react-router-dom";
import Feeds from "../component/feeds";
import SearchBar from "../component/searchBar";
import SideBar from "../component/sideBar";
import SuggestList from "../component/suggestList";
import Bookmarks from "./bookmarks";
import Explore from "./explore";
import "./home.css";
import Messages from "./messages";
import Notifications from "./notifications";
import Profile from "./profile";

const HomePage = () => {
  return (
    <div className="page">
      <header>
        <SideBar/>
      </header>
      <main>
        <div className="main-content">
          <div className="main-left">
            
            <Routes>
              <Route path='' element={<Feeds/>} />
              <Route path='explore' element={<Explore/>} />  
              <Route path='notifications' element={<Notifications/>} />  
              <Route path='messages' element={<Messages/>} />  
              <Route path='bookmarks' element={<Bookmarks/>} />  
              <Route path='list' element={<Explore/>} />  
              <Route path='profile' element={<Profile/>} />   
            </Routes>
            
            
          </div>

          <div className="main-right">
          <nav>
          <SearchBar/>
            </nav>
            <SuggestList/>
            <SuggestList/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
