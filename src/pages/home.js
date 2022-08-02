import BlackBird from '../component/blackbirdsvg'
import SideBarItem from '../component/sidebaritem'
import BookmarksSvg from '../component/svg/bookmarksSvg'
import EllipsisSvg from '../component/svg/ellipsisSvg'
import ExploreSvg from '../component/svg/exploresvg'
import HomeSvg from '../component/svg/homesvg'
import ListsSvg from '../component/svg/listSvg'
import MessagesSvg from '../component/svg/messageSvg'
import NotiSvg from '../component/svg/notificationsSvg'
import ProfileSvg from '../component/svg/profileSvg'
import sytle from './home.css'

const HomePage = () => {
    return <div className="page">
        <header>
            <div className="side-bar">
                
                <div className="list-side-bar-item">
                <div className="black-bird-container">
                    <BlackBird/>
                </div>
                    <SideBarItem svg={<HomeSvg/>} item="Home"/>
                    <SideBarItem svg={<ExploreSvg/>} item="Explore"/>
                    <SideBarItem svg={<NotiSvg/>} item="Notifications"/>
                    <SideBarItem svg={<MessagesSvg/>} item="Messages"/>
                    <SideBarItem svg={<BookmarksSvg/>} item="Bookmarks"/>
                    <SideBarItem svg={<ListsSvg/>} item="Notifications"/>
                    <SideBarItem svg={<ProfileSvg/>} item="Profile"/>
                    <SideBarItem svg={<EllipsisSvg/>} item="More"/>
                    <div class="login-btn blue-login" >
                    Qeett now
                </div>
                </div>

                <div className="side-bar-bottom">
                <SideBarItem item="Home"/>
                </div>

            </div>
        </header>
        <main className={sytle.main}></main>
    </div>
}

export default HomePage