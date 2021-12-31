import "./Header.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useState } from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Input } from "@mui/material";
import logo from "../../assets/images/logo.png";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img
            src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
            alt="logo"
          />
        </div>
        <div className="qHeader__icons">
          <HomeIcons />
        </div>
        <div className="qHeader__input">
          <SearchOutlinedIcon />
        </div>
        <div className="qHeader__Rem">
          <Avatar src={logo} />
          <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
          <Modal
            open={isModalOpen}
            closeIcon={<CloseOutlinedIcon />}
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
              <div className="modal__title">
                <h5>Add Question</h5>
                <h5>Share Link</h5>
              </div>
              <div className="modal__info">
                <Avatar className="avatar" />
                <div className="modal__scope">
                  <PeopleAltOutlinedIcon />
                  <p>Public</p>
                  <ExpandMoreOutlinedIcon />
                </div>
              </div>
              <div className="modal__Field">
                <Input
                  type=" text"
                  placeholder="Start your question with 'What', 'How', 'Why', etc. "
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <input
                    type="text"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    style={{
                      margin: "5px 0",
                      border: "1px solid lightgray",
                      padding: "10px",
                      outline: "2px solid #000",
                    }}
                    placeholder="Optional: inclue a link that gives context"
                  />
                  {inputUrl !== "" && (
                    <img
                      style={{
                        height: "40vh",
                        objectFit: "contain",
                      }}
                      src={inputUrl}
                      alt="displayimage"
                    />
                  )}
                </div>
              </div>
              <div className="modal__buttons">
                <button
                  className="cancle"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="add">
                  Add Question
                </button>
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

const HomeIcons = () => {
  return (
    <>
      <div className="qHeader__icon">
        <HomeOutlinedIcon />
      </div>
      <div className="qHeader__icon">
        <FeaturedPlayListOutlinedIcon />
      </div>
      <div className="qHeader__icon">
        <AssignmentTurnedInOutlinedIcon />
      </div>
      <div className="qHeader__icon">
        <PeopleAltOutlinedIcon />
      </div>
      <div className="qHeader__icon">
        <NotificationsOutlinedIcon />
      </div>
    </>
  );
};

export default Header;
