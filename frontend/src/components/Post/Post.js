import { useState } from "react";
import { Avatar } from "@mui/material";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import RepeatOneOutlinedIcon from "@mui/icons-material/RepeatOneOutlined";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import "./Post.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Post = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Close = <CloseOutlinedIcon />;
  return (
    <div className="post">
      <div className="post__info">
        <Avatar />
        <h4>User Name</h4>
        <small>Timestamp</small>
      </div>
      <div className="post__body">
        <p>This is a Test Question</p>
        <button
          className="post__btnAnswer"
          onClick={() => setIsModalOpen(true)}
        >
          Answer
        </button>
        <Modal
          open={isModalOpen}
          closeIcon={Close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{
            overlay: {
              height: "auto",
            },
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsModalOpen(false);
            }}
          >
            <div className="modal__question">
              <h1>This is test question.</h1>
              <p>
                asked by <span className="name">Username</span> on{" "}
                <span className="name">timestamp</span>
              </p>
            </div>
            <div className="modal__answer">
              <ReactQuill placeholder="Enter your answer" />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="submit" className="add">
                Add Answer
              </button>
            </div>
          </form>
        </Modal>
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlinedIcon />
          <ArrowDownwardOutlinedIcon />
        </div>
        <RepeatOneOutlinedIcon />
        <ChatBubbleOutlinedIcon />
        <div className="post__footerLeft">
          <ShareOutlinedIcon />
          <MoreHorizOutlinedIcon />
        </div>
      </div>
      <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        1 Answer
      </p>
      <div
        style={{
          margin: "5px 0px 0px 0px ",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className="post__answer"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "10px 5px",
            borderTop: "1px solid lightgray",
          }}
          className="post-answer-container"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#888",
            }}
            className="post-answered"
          >
            <Avatar />
            <div
              style={{
                margin: "0px 10px",
              }}
              className="post-info"
            >
              <p>Username</p>
              <span>Timestamp</span>
            </div>
          </div>
          <div className="post-answer">This is test answer</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
