import HashTag from './hashtag'
import Header5 from './header5'
import './suggestList.css'

const SuggestList = (props) => {
    return <div className="suggest_list">
        <Header5 text = {props.title ? props.title : "Trending"}/>
        <HashTag/>
        <HashTag/>
        <HashTag/>
        <HashTag/>
        <HashTag/>
        <HashTag/>
        <HashTag/>
    </div>
}

export default SuggestList