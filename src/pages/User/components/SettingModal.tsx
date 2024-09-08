import React from "react";
import { ModalProps } from "./ChatMakeModal";
import styles from "./SettingModal.module.css";

const SettingModal: React.FC<ModalProps> = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  const handleLogout = () => {
    onClose();
  };
  const handleWithdraw = () => {
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.title}>설정</h2>
        <div className={styles.body}>
          <button className={styles.optionBtn} onClick={handleLogout}>
            로그아웃
          </button>
          <button className={styles.optionBtn} onClick={handleWithdraw}>
            회원탈퇴
          </button>
          <button className={styles.optionBtn}>약관</button>
        </div>
      </div>
    </div>
  );
};
export default SettingModal;
