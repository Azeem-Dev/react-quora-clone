import FeedBox from "../FeedBox/FeedBox";
import Post from "../Post/Post";
import "./Feed.css";
const Feed = () => {
  let posts = [];
  for (let i = 0; i < 10; i++) {
    posts.push(<Post key={i} />);
  }
  return (
    <div className="feed">
      <FeedBox />
      {posts.map((post) => {
        return post;
      })}
    </div>
  );
};

export default Feed;
