import "./ChatModal.css";
import { useState } from "react";

//imports img
import { SiMessenger } from "react-icons/si";
import messenger_icon from "../img/messenger_icon.png";
import horizontal_dots from "../img/horizontal_dots.png";
import hyphen from "../img/hyphen.png";
import { IoIosCloseCircle } from "react-icons/io";
import close_icon from "../img/close_icon.png";
import clip_icon from "../img/paper_clip_3.png";
import caution_icon from "../img/caution.png";
import send_icon from "../img/send.png";

export default function ChatModal() {
  var modal = document.getElementById("myModal");

  const [isDisplayModal, setDisplayModal] = useState(false);

  const show_modal = () => {
    setDisplayModal(!isDisplayModal);
  };

  const close_modal = () => {
    setDisplayModal(false);
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      setDisplayModal(false);
    }
  };

  const [isDisplyGuestChat, setDisplayGuestChat] = useState(false);

  const show_guestchat = () => {
    setDisplayGuestChat(true);
  };

  const close_guestchat = () => {
    setDisplayGuestChat(false);
  };

  const [isDisplyDropdown, setDisplayDropdown] = useState(false);

  const show_dropdown = () => {
    setDisplayDropdown(!isDisplyDropdown);
  };

  const close_dropdown_modal = () => {
    setDisplayDropdown(false);
    setDisplayGuestChat(false);
    setDisplayModal(false);
  };

  console.log(isDisplayModal);

  console.log(isDisplyGuestChat);

  return (
    <div className="modal_parent">
      <div
        className={`modal ${isDisplayModal ? "display" : "none"} ${
          isDisplyGuestChat ? "expand" : ""
        }`}
        id="myModal"
      >
        <div className="relative">
          <div className="modal_header">
            <div className="modal_header_img">
              <img
                class="modal_img"
                src="https://scontent.fblr20-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/130143610_106336294675801_2033628152668535464_n.png?_nc_cat=100&amp;ccb=1-5&amp;_nc_sid=dbb9e7&amp;_nc_ohc=3lI-B6qum0oAX-v14Bq&amp;_nc_ht=scontent.fblr20-1.fna&amp;edm=AB2cVo4EAAAA&amp;oh=5a8d1600a3034a26104ea585c53e77c3&amp;oe=617D79D2"
                alt=""
              />
            </div>
            <div className="modal_header_icons">
              <button className="more">
                <img src={horizontal_dots} className="horizontal_dots" />
              </button>
              <button onClick={close_modal} className="close">
                <img src={hyphen} alt="" className="horizontal_dots" />
              </button>
            </div>
          </div>
          <div className="modal_heading">
            <strong>Chat with Hennacrafts</strong>
          </div>
          <div className="modal_subtitle">
            <p>Welcome to Henna Crafts</p>
          </div>
          <div className="messenger_div">
            <a href="https://www.facebook.com" className="messenger">
              <SiMessenger className="messenger_icon" />
              Log into messenger
            </a>
            <button className="guest" onClick={show_guestchat}>
              Continue as Guest
            </button>
          </div>
          <div className="terms_div">
            {"By continuing as a guest, you agree to Facebook's"}
            <br />
            <a href="#" className="modal_link">
              Terms
            </a>
            {", "}
            <a href="#" className="modal_link">
              Data Policy
            </a>
            {" and "}
            <a href="#" className="modal_link">
              Cookies Policy
            </a>
          </div>
          <div
            className={`guest_chat ${isDisplyGuestChat ? "display" : "none"}`}
          >
            <div className="guestchat_header">
              <img
                class="guestchat_img"
                src="https://scontent.fblr20-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/130143610_106336294675801_2033628152668535464_n.png?_nc_cat=100&amp;ccb=1-5&amp;_nc_sid=dbb9e7&amp;_nc_ohc=3lI-B6qum0oAX-v14Bq&amp;_nc_ht=scontent.fblr20-1.fna&amp;edm=AB2cVo4EAAAA&amp;oh=5a8d1600a3034a26104ea585c53e77c3&amp;oe=617D79D2"
                alt=""
              />
              <p className="guest_heading">
                Hennacrafts
                <br />
                <span className="powered">Powered by messenger</span>
              </p>
              <div className="modal_header_icons">
                <button className="more_guest">
                  <img
                    src={horizontal_dots}
                    onClick={show_dropdown}
                    className="horizontal_dots"
                  />
                </button>
                <button onClick={close_guestchat} className="close_guest">
                  <img src={hyphen} alt="" className="horizontal_dots" />
                </button>
              </div>
            </div>
            <div
              className={`dropdown ${isDisplyDropdown ? "display" : "none"}`}
            >
              <div className="dropdown_content">
                <a
                  href="https://www.messenger.com"
                  rel="noopener noreferrer"
                  className="link"
                  target="_blank"
                >
                  <SiMessenger className="dropdown_icon" /> Continue in
                  Messenger
                </a>
                <br />
                <button href="" class="button" onClick={close_dropdown_modal}>
                  <img className="dropdown_close_icon" src={close_icon} />
                  End Chat
                </button>
                <br />
                <button href="" class="button">
                  <img className="dropdown_close_icon" src={caution_icon} />
                  Something's Wrong
                </button>
                <hr className="hr" />
                <div className="facebook">
                  <a href="" className="visit">
                    Visit Facebook page
                  </a>
                  <br className="br" />
                  <a href="" className="addmessenger">
                    Add Messenger To Your Website
                  </a>
                </div>
              </div>
            </div>
            <div className="guest_chat_section">
              <div className="chat_screen">
                <div className="chatting"></div>
              </div>
              <div className="chat_input_section">
                <div className="paper_clip_icon">
                  <img src={clip_icon} className="clip_icon" />
                </div>
                <div className="chat_input">
                  <label>
                    <input typeof="text" placeholder="Ask a question..." />
                  </label>
                </div>
                <div className="chat_send">
                  <img className="send_icon" src={send_icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={messenger_icon} className="modal_icon" onClick={show_modal} />
    </div>
  );
}
