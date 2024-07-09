import React from "react";
import lottieComplete from "../../../assets/lottie/complete.json";
import Lottie from "lottie-react";

const SignupComplete = () => {
  return (
    <div>
      <div
        style={{
          marginTop: "30px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie
          animationData={lottieComplete}
          loop={false}
          autoplay={true}
          style={{ width: 300, height: 300 }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          회원가입을 완료했어요!
        </div>
      </div>
    </div>
  );
};

export default SignupComplete;
