import React from "react";

const InputForm = ({ onSubmit, value, onChange, handleEnter }) => {
  return (
    <form onSubmit={onSubmit}>
      <textarea
        required
        value={value}
        onChange={onChange}
        onKeyDown={handleEnter}
        placeholder="메세지를 입력하세요"
      ></textarea>
    </form>
  );
};

export default InputForm;
