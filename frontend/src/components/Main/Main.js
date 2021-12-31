import "./Main.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import Widget from "../Widget/Widget";

const Main = () => {
  return (
    <div className="quora">
      <Header />
      <div className="quora__contents">
        <Content />
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="quora__content">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
};

export default Main;
