import React, { useState } from "react";

interface SignupInputboxProps {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  warningMessage?: string;
  placeholder?: string;
}

const SignupInputbox: React.FC<SignupInputboxProps> = ({
  value,
  onChange,
  warningMessage,
  placeholder,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleClear = () => {
    onChange("");
  };
  const isValid = value !== undefined && value.length == 20;

  return (
    <div>
      <div style={{ position: "relative", display: "inline-block" }}>
        <input
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            width: "250px",
            height: "28px",
            fontSize: "16px",
            padding: "8px 30px 8px 8px",
            border: "1px solid #d9d9d9",
            borderColor: isFocused ? "#046B40" : "#d9d9d9",
            borderRadius: "3px",
            outline: "none",
          }}
        />
        {value && (
          <button
            onClick={handleClear}
            style={{
              position: "absolute",
              right: "6px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              color: "#ccc",
            }}
          >
            &times;
          </button>
        )}
      </div>

      {isValid && warningMessage && (
        <div
          style={{
            fontSize: "16px",
            color: "#046B40",
            marginTop: "8px",
          }}
        >
          {warningMessage}
        </div>
      )}
    </div>
  );
};

export default SignupInputbox;
