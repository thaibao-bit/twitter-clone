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

const SideBar = () => {
    return <div className="side-bar">
    <div className="list-side-bar-item">
      <div className="black-bird-container">
        <BlackBird />
      </div>
      <SideBarItem svg={<HomeSvg />} item="Home" />
      <SideBarItem svg={<ExploreSvg />} item="Explore" />
      <SideBarItem svg={<NotiSvg />} item="Notifications" />
      <SideBarItem svg={<MessagesSvg />} item="Messages" />
      <SideBarItem svg={<BookmarksSvg />} item="Bookmarks" />
      <SideBarItem svg={<ListsSvg />} item="Notifications" />
      <SideBarItem svg={<ProfileSvg />} item="Profile" />
      <SideBarItem svg={<EllipsisSvg />} item="More" />
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