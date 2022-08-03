import BlackBird from "../component/blackbirdsvg";
import ProfileSvg from "../component/svg/profileSvg";
import SideBarItem from "../component/sidebaritem";
import BookmarksSvg from "../component/svg/bookmarksSvg";
import EllipsisSvg from "../component/svg/ellipsisSvg";
import ExploreSvg from "../component/svg/exploresvg";
import HomeSvg from "../component/svg/homesvg";
import ListsSvg from "../component/svg/listSvg";
import MessagesSvg from "../component/svg/messageSvg";
import NotiSvg from "../component/svg/notificationsSvg";
import { Link } from'react-router-dom'

const SideBar = () => {
    return <div className="side-bar">
    <div className="list-side-bar-item">
      <div className="black-bird-container">
        <BlackBird />
      </div>
      <Link to=''> <SideBarItem svg={<HomeSvg />} item="Home" /> </Link>
      <Link to='explore'> <SideBarItem svg={<ExploreSvg />} item="Explore" /> </Link>
      <Link to='notifications'> <SideBarItem svg={<NotiSvg />} item="Notifications" /> </Link>
      <Link to='messages'> <SideBarItem svg={<MessagesSvg />} item="Messages" /> </Link>
      <Link to='bookmarks'> <SideBarItem svg={<BookmarksSvg />} item="Bookmarks" /> </Link>
      <Link to='notifications'> <SideBarItem svg={<ListsSvg />} item="Notifications" /> </Link>
      <Link to='profile'> <SideBarItem svg={<ProfileSvg />} item="Profile" /> </Link>
      <Link to='more'> <SideBarItem svg={<EllipsisSvg />} item="More" /> </Link>
      <div class="blue-btn">Qeett now</div>
    </div>

    <div className="side-bar-bottom">
      <div className="side-bar-bottom-left">
        <ProfileSvg />
      </div>
      <div className="side-bar-bottom-right">
        <div className="name">Username</div>
        <div className="address">@UserAddr</div>
      </div>
    </div>
  </div>
}

export default SideBar