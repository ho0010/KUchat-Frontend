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
