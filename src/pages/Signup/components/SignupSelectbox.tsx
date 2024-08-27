import React from "react";
import Select from "react-select";

interface SignupSelectboxProps {
  title?: string;
  options: { value: string; label: string }[];
  value: { value: string; label: string } | null;
  onChange: (option: { value: string; label: string } | null) => void;
}

const SignupSelectbox: React.FC<SignupSelectboxProps> = ({
  title,
  options,
  value,
  onChange,
}) => {
  return (
    <div>
      <div style={{ marginBottom: "16px" }}>{title}</div>
      <div style={{ width: "300px" }}>
        {" "}
        <Select
          placeholder="선택해주세요"
          options={options}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SignupSelectbox;
