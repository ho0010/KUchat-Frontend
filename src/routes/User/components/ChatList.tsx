import React, { useState } from "react";
import ReadingGlassImg from "../../../assets/img/ReadingGlassImg.svg";
import ChatListComponent from "./ChatListComponent";
import ChatListData from "../../../model/ChatList.json";

const ChatList = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        {searchText === "" && (
          <img
            src={ReadingGlassImg}
            alt="Search Icon"
            style={{
              position: "absolute",
              left: "28%",
              top: "50%",
              transform: "translateY(-50%)",
              width: "16px",
              height: "16px",
            }}
          />
        )}

        <input
          type="text"
          placeholder="채팅했던 친구를 찾아보세요"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            width: "260px",
            height: "30px",
            backgroundColor: "#f5f5f5",
            border: "none",
            textAlign: "center",
            outline: "none",
            paddingLeft: "40px", // 이미지 공간 확보
            borderRadius: "8px",
          }}
        />
      </div>
      <div>
        {ChatListData.map((item, index) => (
          <ChatListComponent
            key={index}
            img={item.img}
            nation={item.nation}
            name={item.name}
            text={item.text}
            time={item.time}
            num={item.num}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
