import './qeett.css'
const Qeett = () => {
    return <div className="qeet">
        <div className="qeet_avatar"></div>
        <div className="qeet_content">
            <div className="qeet_top">
            <div className="user_info">
                <div className="username_info">Username</div>
                <div className="account_info">.    @user123</div>
                <div className="time_info">.  3 B years ago</div>
            </div>
            <div className="qeet_ellipsis"></div>
            </div>
            <div className="qeet_text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat possimus quidem inventore, quod, ipsa sapiente cupiditate laboriosam dolores atque dolorem aliquid delectus expedita ipsum quos dolorum voluptate, cum quibusdam dignissimos.</p>
            </div>
            <div className="qeet_media">

            </div>
            <div className="qeet_action">
                <div className="qeet_answer"></div>
                <div className="qeet_reqeet"></div>
                <div className="qeet_like"></div>
                <div className="qeet_share"></div>
            </div>
        </div>
    </div>
}
export default Qeett