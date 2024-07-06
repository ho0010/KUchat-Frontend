import React from "react";
import SignupTitle from "./SignupTitle";
import StudentImg from "../../../assets/img/StudentIDimg.svg";

const StudentId = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SignupTitle Title="학생증을 촬영해주세요"></SignupTitle>
      <img
        src={StudentImg}
        alt="학생증"
        style={{
          width: "300px",
        }}
      />
      <div
        style={{
          display: "flex",
          margin: "30px 0 0 0",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <div>- 가로로 촬영하세요.</div>
        <div>- 어두운 배경에서 촬영하세요.</div>
        <div>- 학생증의 모든 부분이 보이도록 촬영하세요.</div>
        <div>- 복사본이나 사진은 사용할 수 없습니다.</div>
        <div>- 정보 확인 어렵거나 훼손된 학생증은</div>
        <div>- 인증이 거절될 수 있습니다.</div>
      </div>
    </div>
  );
};

export default StudentId;
