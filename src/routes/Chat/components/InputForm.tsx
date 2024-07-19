import React from "react";
import ChatPlusImg from "../../../assets/img/Chat_Plus.svg";
import ChatTranslateImg from "../../../assets/img/Chat_Translate.svg";
import ChatSendImg from "../../../assets/img/Chat_Send.svg";

interface InputFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleEnter: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const InputForm: React.FC<InputFormProps> = ({
  onSubmit,
  value,
  onChange,
  handleEnter,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flex: 1,
        border: "none",
        padding: "10px",
        wordBreak: "break-all",
        justifyContent: "space-between",
      }}
    >
      <button style={{ background: "#fff", border: "none" }}>
        <img src={ChatPlusImg} alt="" />
      </button>
      <textarea
        required
        value={value}
        onChange={onChange}
        onKeyDown={handleEnter}
        style={{
          background: "#f8f8f8",
          border: "none",
          borderRadius: "30px",
          width: "60%",
        }}
      ></textarea>
      <button style={{ background: "#fff", border: "none" }}>
        <img src={ChatTranslateImg} alt="" />
      </button>
      <button type="submit" style={{ background: "#fff", border: "none" }}>
        <img src={ChatSendImg} alt="" />
      </button>
    </form>
  );
};

export default InputForm;
