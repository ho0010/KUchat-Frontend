import React, { useState } from "react";
import selectedCircle from "../../../assets/img/SelectedCircle.svg";
import FillSelectedCircle from "../../../assets/img/FillSelectedCircle.svg";

interface Friend {
  img: string;
  name: string;
  selected: boolean;
}

interface ModalProps {
  show: boolean;
  onClose: () => void;
  friendList: Friend[];
}

const Modal: React.FC<ModalProps> = ({ show, onClose, friendList }) => {
  const [friends, setFriends] = useState(friendList);

  if (!show) {
    return null;
  }

  const toggleSelect = (index: number) => {
    const newFriends = [...friends];
    newFriends[index].selected = !newFriends[index].selected;
    setFriends(newFriends);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          width: "80%",
          maxWidth: "500px",
          height: "90%",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <button
            style={{
              position: "absolute",
              top: "14px",
              left: "10px",
              background: "none",
              border: "none",
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            &times;
          </button>
          <div>친구 선택하기</div>
          <button
            style={{
              position: "absolute",
              top: "14px",
              right: "10px",
              background: "none",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            OK
          </button>
        </div>
        <div>
          {friends.map((friend, index) => (
            <button
              key={index}
              onClick={() => toggleSelect(index)}
              style={{
                display: "flex",
                padding: "8px 0",
                alignItems: "center",
                marginTop: "10px",
                border: "none",
                backgroundColor: "white",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={friend.img}
                  alt=""
                  style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                />
                <p style={{ marginLeft: "8px" }}>{friend.name}</p>
              </div>
              <img
                src={friend.selected ? FillSelectedCircle : selectedCircle}
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
