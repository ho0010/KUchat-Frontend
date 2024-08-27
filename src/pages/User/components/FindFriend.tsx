import React from "react";
import ProfileCard from "./ProfileCard";
import ProfileCardList from "../../../model/ProfileCardList.json";
import SelectedLanguageData from "../../../model/SelectedLanguage.json";
import SelectedLanguage from "./SelectedLanguage";

const FindFriend = () => {
  return (
    <div>
      <div style={{ display: "flex", gap: "12px", marginLeft: "12px" }}>
        {SelectedLanguageData.map((language, index) => (
          <SelectedLanguage
            key={index}
            language={language.Language}
            state={language.state}
          />
        ))}
        <button
          style={{
            width: "60px",
            height: "30px",
            borderRadius: "12px",
            border: "2px dashed #888888",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            margin: "12px 0 0 0",
            backgroundColor: "#ffffff",
          }}
        >
          +
        </button>
      </div>
      <div>
        {ProfileCardList.map((profile, index) => (
          <ProfileCard
            key={index}
            img={profile.img}
            name={profile.name}
            age={profile.age}
            gender={profile.gender}
            major={profile.department}
            text={profile.text}
            verified={profile.verified}
            nation={profile.nation}
          />
        ))}
      </div>
    </div>
  );
};
export default FindFriend;
