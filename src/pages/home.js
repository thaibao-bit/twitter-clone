
import Header5 from "../component/header5";
import Qeett from "../component/qeett";
import QeettForm from "../component/qeettForm";
import SideBar from "../component/sideBar";
import StickyHome from "../component/stickyNavHome";
import SuggestList from "../component/suggestList";
import "./home.css";

const HomePage = () => {
  return (
    <div className="page">
      <header>
        <SideBar/>
      </header>
      <main>
        <div className="main-content">
          <div className="main-left">
            <StickyHome/>
            <div className="new-qeet-container">
              <QeettForm/>
              
            </div>
            <Qeett/>
              <Qeett/>
              
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
              <Qeett/>
          </div>

          <div className="main-right">
          <nav>
          <Header5 text = "Search"/>
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
