import React from "react";
import ProfileCard from "./ProfileCard";
import ProfileCardList from "../../../model/ProfileCardList.json";

const FindFriend = () => {
  return (
    <div>
      <div></div>
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
