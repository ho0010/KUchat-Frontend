import React, { useState, useCallback, useRef, useEffect } from "react";
import InputForm from "./components/InputForm"; // 분리된 InputForm 컴포넌트 임포트
import FormatDate from "../../components/Formatdate";
import chatData from "../../model/ChatInner.json";
import styles from "./Chat.module.css";

interface Chat {
  messageId: number;
  messageType: string;
  senderId: number;
  text: string;
  date: string;
  parentId: number | null;
}

const curUser = 0; // 현재 사용자 ID

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [chats, setChats] = useState<Chat[]>(
    chatData.recentMessages.map((msg) => ({
      messageId: msg.messageId,
      messageType: msg.messageType,
      senderId: msg.senderId,
      text: msg.text,
      date: msg.createdDate,
      parentId: msg.parentId,
    })),
  );
  const nextMessageId = useRef<number>(chatData.recentMessages.length + 1);

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  }, []);

  const handleEnter = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onSubmit();
      }
    },
    [inputValue],
  );

  const onSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (inputValue.length === 0) {
      return;
    }
    e?.preventDefault(); // 버튼을 통한 제출이라면 새로고침 방지
    onConcat(inputValue);
    setInputValue("");
  };

  const onConcat = useCallback(
    (text: string) => {
      const chat: Chat = {
        messageId: nextMessageId.current,
        messageType: "TALK", // 새로운 메시지는 기본적으로 "TALK" 타입으로 설정
        senderId: curUser,
        text,
        date: new Date().toISOString(),
        parentId: null,
      };
      setChats((prevChats) => [...prevChats, chat]);
      nextMessageId.current++;
    },
    [chats, curUser],
  );

  const chatListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    chatListRef.current?.scrollTo(0, chatListRef.current.scrollHeight);
  }, [chats]);

  return (
    <div ref={chatListRef}>
      <div>
        {chats.map((chat) => (
          <div
            key={chat.messageId}
            className={
              chat.senderId === 0 ? styles.senderZero : styles.senderNonZero
            }
          >
            <div className={styles.chatSender}>{chat.senderId}:</div>
            <div className={styles.chatText}>{chat.text}</div>
            <div className={styles.chatDate}>{FormatDate(chat.date)}</div>
          </div>
        ))}
      </div>
      <InputForm
        onSubmit={onSubmit}
        value={inputValue}
        onChange={onChange}
        handleEnter={handleEnter}
      />
    </div>
  );
};

export default App;
