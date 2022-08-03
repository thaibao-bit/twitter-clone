import ProfileSvg from "../component/svg/profileSvg";


const QeettForm = () => {
    return <div className="new-qeet">
    <div className="new-qeet-left">
      <div className="new-qeet-left-wrap">
        <ProfileSvg />
      </div>
    </div>
    <div className="new-qeet-right">
      <input
        type="text"
        name="newqeet"
        id="newqeet"
        placeholder="What's happening?"
      />
    </div>
  </div>
}

export default QeettForm