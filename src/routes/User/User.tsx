import React, { useState } from "react";
import styles from "./User.module.css";
import ChatList from "./components/ChatList";
import FindFriend from "./components/FindFriend";
import UserProfile from "./components/Profile";
import ChatImg from "../../assets/img/User_Chat.svg";
import FriendImg from "../../assets/img/User_Friend.svg";
import ProfileImg from "../../assets/img/User_Profile.svg";
import selectedChatImg from "../../assets/img/User_Selected_chat.svg";
import selectedFriendImg from "../../assets/img/User_Selected_Friend.svg";
import selectedProfileImg from "../../assets/img/User_Selected_Profile.svg";
import ChatPlusImg from "../../assets/img/User_Chat_Plus.svg";
import ProfileSettingImg from "../../assets/img/User_Profile_Setting.svg";
import ChatMakeModal from "./components/ChatMakeModal";
import FriendListData from "../../model/FriendList.json";
import SearchIdModal from "./components/SearchIdModal";

type UserStep = "chatList" | "friend" | "profile";

const User = () => {
  const [step, setStep] = useState<UserStep>("profile");
  const [makeChatModal, setMakeChatModal] = useState(false);
  const [searchIdModal, setSearchIdModal] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        {step === "chatList" && (
          <div className={styles.detailHeader}>
            <h1>채팅 목록</h1>
            <button onClick={() => setMakeChatModal(true)}>
              <img src={ChatPlusImg} alt="채팅 추가" />
            </button>
          </div>
        )}
        {step === "friend" && (
          <div className={styles.detailHeader}>
            <h1>친구 찾기</h1>
            <button onClick={() => setSearchIdModal(true)}>ID 검색</button>
          </div>
        )}
        {step === "profile" && (
          <div className={styles.detailHeader}>
            <h1>나의 프로필</h1>
            <button>
              <img src={ProfileSettingImg} alt="설정" />
            </button>
          </div>
        )}
      </div>
      <div className={styles.body}>
        {step === "chatList" && <ChatList />}
        {step === "friend" && <FindFriend />}
        {step === "profile" && <UserProfile />}
      </div>
      <div className={styles.footer}>
        <button onClick={() => setStep("chatList")}>
          <img
            src={step === "chatList" ? selectedChatImg : ChatImg}
            alt="채팅"
          />{" "}
        </button>
        <button onClick={() => setStep("friend")}>
          <img
            src={step === "friend" ? selectedFriendImg : FriendImg}
            alt="친구"
          />
        </button>
        <button onClick={() => setStep("profile")}>
          <img
            src={step === "profile" ? selectedProfileImg : ProfileImg}
            alt="프로필"
          />{" "}
        </button>
      </div>
      <ChatMakeModal
        show={makeChatModal}
        onClose={() => setMakeChatModal(false)}
        friendList={FriendListData}
      />
      <SearchIdModal
        show={searchIdModal}
        onClose={() => setSearchIdModal(false)}
      />
    </div>
  );
};

export default User;
