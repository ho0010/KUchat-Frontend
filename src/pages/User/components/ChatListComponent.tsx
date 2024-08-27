import React from "react";

interface ChatListComponentProps {
  img?: string;
  nation?: string;
  name: string;
  text: string;
  time: string;
  num: number;
}

const flagImages: { [key: string]: string } = {
  미국: "https://flagcdn.com/us.svg",
  일본: "https://i.namu.wiki/i/uPDCkQv1zGpaEdmeqmEDRIM3nMyRD2BslQUouPpxpI5M-PkGdmxPwxFJvu9RCUUVYg2XOH4rfedfkxhnDqfumw.svg",
  대한민국: "https://flagcdn.com/kr.svg",
  우즈베키스탄: "https://flagcdn.com/uz.svg",
  중국: "https://flagcdn.com/cn.svg",
  몽골: "https://flagcdn.com/mn.svg",
  프랑스: "https://flagcdn.com/fr.svg",
  베트남: "https://flagcdn.com/vn.svg",
};

const ChatListComponent: React.FC<ChatListComponentProps> = ({
  img,
  nation,
  name,
  text,
  time,
  num,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100px",
        padding: "10px 15px",
        borderBottom: "1px solid #f0f0f0",
        boxSizing: "border-box",
        fontFamily: "pretendard",
      }}
    >
      <div style={{ position: "relative", marginRight: "10px" }}>
        <img
          src={img}
          alt=""
          style={{ borderRadius: "50%", width: "72px", height: "72px" }}
        />
        {nation && (
          <img
            src={flagImages[nation] || ""}
            alt=""
            style={{
              position: "absolute",
              bottom: "0",
              left: "20%",
              transform: "translateX(-50%)",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.3)",
            }}
          />
        )}
      </div>
      <div>
        <div style={{ fontSize: "18px", marginBottom: "10px" }}>{name}</div>
        <div
          style={{ color: "#a09f9f", fontSize: "14px", marginBottom: "10px" }}
        >
          {text}
        </div>
      </div>
      <div style={{ marginLeft: "auto", position: "relative" }}>
        <div
          style={{ color: "#a09f9f", fontSize: "14px", marginBottom: "30px" }}
        >
          {time}
        </div>
        {num > 0 && (
          <div
            style={{
              position: "absolute",
              right: "1px",
              top: "24px",
              backgroundColor: "#046B40",
              color: "white",
              borderRadius: "50%",
              width: "18px",
              height: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              paddingTop: "1px",
            }}
          >
            {num}
          </div>
        )}
      </div>
    </div>
  );
};
export default ChatListComponent;
