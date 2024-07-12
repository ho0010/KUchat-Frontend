import React, { useState } from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const SearchIdModal: React.FC<ModalProps> = ({ show, onClose }) => {
  if (!show) {
    return null;
  }
  const [searchId, setSearchId] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchId(e.target.value);
  };

  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          width: "80%",
          maxWidth: "500px",
          height: "90%",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
            borderBottom: "1px solid #f5f5f5",
            paddingBottom: "20px",
          }}
        >
          <button
            style={{
              position: "absolute",
              top: "14px",
              left: "10px",
              background: "none",
              border: "none",
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            &times;
          </button>
          <div>ID로 친구 찾기 </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
          <input
            placeholder="ex) 124124"
            onChange={handleInputChange}
            value={searchId}
            type="text"
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
              fontSize: "16px",
              padding: "8px 30px 8px 8px",
              border: "1px solid #d9d9d9",
              borderColor: isFocused ? "#046B40" : "#d9d9d9",
              borderRadius: "8px",
              outline: "none",
            }}
          />
          <button
            style={{
              border: "none",
              backgroundColor: "#046B40",
              color: "#fff",
              borderRadius: "8px",
              padding: "0 12px",
              fontSize: "14px",
            }}
          >
            검색
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchIdModal;
