import React from "react";

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
        flex: 1,
        border: "none",
        padding: "10px",
        wordBreak: "break-all",
      }}
    >
      <textarea
        required
        value={value}
        onChange={onChange}
        onKeyDown={handleEnter}
        placeholder="메세지를 입력하세요"
      ></textarea>
      <button type="submit"></button>
    </form>
  );
};

export default InputForm;
