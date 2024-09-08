import React, { useState } from "react";
import { ModalProps } from "./ChatMakeModal";
import styles from "./SettingModal.module.css";
import KuchatLogo from "../../../assets/img/KUchat_logo.svg";

const SettingModal: React.FC<ModalProps> = ({ show, onClose }) => {
  const [confirmOption, setConfirmOption] = useState<
    null | "logout" | "withdraw"
  >(null);

  if (!show) {
    return null;
  }

  const handleLogout = () => {
    setConfirmOption("logout");
  };
  const handleWithdraw = () => {
    setConfirmOption("withdraw");
  };

  const confirmLogout = () => {
    onClose();
  };

  const confirmWithdraw = () => {
    onClose();
  };

  const handleCancel = () => {
    setConfirmOption(null);
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
      {confirmOption && (
        <div className={styles.confirmModalOverlay}>
          <div className={styles.confirmModalContainer}>
            <img src={KuchatLogo} className={styles.KuchatLogo} />
            <p className={styles.confirmText}>
              {confirmOption === "logout"
                ? "정말 로그아웃하시겠습니까?"
                : "정말 회원탈퇴하시겠습니까?"}
            </p>
            <p className={styles.subText}>
              {confirmOption === "logout"
                ? "나중에 다시 로그인 할 수 있습니다."
                : "회원탈퇴 시 모든 정보가 삭제됩니다."}
            </p>
            <div className={styles.confirmButtons}>
              <button
                className={styles.confirmButton}
                onClick={
                  confirmOption === "logout" ? confirmLogout : confirmWithdraw
                }
              >
                확인
              </button>
              <button className={styles.cancelButton} onClick={handleCancel}>
                취소
              </button>
            </div>
          </div>
        </div>
      )}
      ;
    </div>
  );
};
export default SettingModal;
