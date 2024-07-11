import React from "react";
import verifiedImg from "../../../assets/img/VerifiedImg.svg";

interface ProfileCardProps {
  img?: string;
  nation?: string;
  major: string;
  name: string;
  text: string;
  age: number;
  gender: string;
  verified: boolean;
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

const ProfileCard: React.FC<ProfileCardProps> = ({
  img,
  nation,
  name,
  text,
  major,
  age,
  gender,
  verified,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "94%",
        height: "120px",
        padding: "10px 15px",
        border: "1px solid #d9d9d9",
        boxSizing: "border-box",
        fontFamily: "pretendard",
        borderRadius: "20px",
        margin: "12px",
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
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <div style={{ display: "flex" }}>
              <h3 style={{ margin: "3px 10px 0 0", fontWeight: "600" }}>
                {name}
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: gender === "male" ? "#6C89FF" : "#FE7E91",
                  borderRadius: "10px",
                  fontSize: "12px",
                  padding: "3px 5px",
                  color: "white",
                }}
              >
                <span style={{ padding: "1px" }}>
                  {gender === "male" ? "♂" : "♀"}
                </span>
                <div style={{ marginLeft: "5px" }}>{age}</div>
              </div>
              {verified && (
                <img src={verifiedImg} style={{ marginLeft: "4px" }} />
              )}
            </div>
            <div style={{ fontSize: "12px", fontWeight: "500" }}>{major}</div>
            <div
              style={{
                color: "#a09f9f",
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
