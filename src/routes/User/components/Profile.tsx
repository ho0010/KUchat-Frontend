import React from "react";
import profileData from "../../../model/MyProfile.json";
import verifiedImg from "../../../assets/img/VerifiedImg.svg";
import lockImg from "../../../assets/img/LockImg.svg";
import ProfileEditImg from "../../../assets/img/ProfileEdit.svg";
interface ProfileProps {
  username: string;
  age: number;
  verified: boolean;
  locked: boolean;
  gender: string;
  userId: string;
  major: string;
  nation: string;
  preferredLanguage: string[];
  userImg?: string;
  text?: string;
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

const ProfileWrapper = () => {
  const {
    username,
    age,
    verified,
    locked,
    gender,
    userId,
    major,
    nation,
    preferredLanguage,
    userImg,
    text,
  } = profileData;

  return (
    <Profile
      username={username}
      age={age}
      verified={verified}
      locked={locked}
      gender={gender}
      userId={userId}
      major={major}
      nation={nation}
      preferredLanguage={preferredLanguage}
      userImg={userImg}
      text={text}
    />
  );
};

const Profile: React.FC<ProfileProps> = ({
  username,
  age,
  verified,
  locked,
  gender,
  userId,
  major,
  nation,
  preferredLanguage,
  userImg,
  text,
}) => {
  return (
    <div
      style={{
        display: "flex",
        width: "92%",
        height: "120px",
        padding: "10px 15px",
        boxSizing: "border-box",
        fontFamily: "pretendard",
        borderRadius: "20px",
        margin: "12px",
        flexDirection: "column",
      }}
    >
      <div
        style={{ display: "flex", position: "relative", marginRight: "10px" }}
      >
        <img
          src={userImg}
          alt=""
          style={{
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            marginRight: "20px",
          }}
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
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  margin: "3px 10px 0 0",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                {username}
              </div>
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
                <img
                  src={verifiedImg}
                  style={{ marginLeft: "4px" }}
                  alt="verified"
                />
              )}
              {locked && (
                <img src={lockImg} style={{ marginLeft: "4px" }} alt="locked" />
              )}
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <div style={{ fontSize: "12px" }}>{userId}</div>
              <div style={{ fontSize: "14px", fontWeight: "500" }}>
                {major}
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  fontSize: "12px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                선호언어
                {preferredLanguage.map((lang, index) => (
                  <div
                    key={index}
                    style={{
                      margin: "0 0 0 10px",
                      color: "#046B40",
                      border: "1px solid #046B40",
                      borderRadius: "10px",
                      padding: "2px 5px",
                    }}
                  >
                    {lang}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <textarea
        value={text}
        placeholder="자기소개를 입력하세요."
        readOnly
        style={{
          marginTop: "24px",
          width: "300px",
          padding: "10px 4px 100px 10px",
          borderRadius: "4px",
          border: "1px solid #d9d9d9",
          fontSize: "14px",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <button
          style={{
            width: "160px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            backgroundColor: "#ffffff",
            padding: "4px",
            cursor: "pointer",
          }}
        >
          <img src={ProfileEditImg} alt="" style={{ marginRight: "10px" }} />
          프로필 수정하기
        </button>
      </div>
    </div>
  );
};

export default ProfileWrapper;
