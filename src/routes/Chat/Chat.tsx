import React, { useState, useCallback, useRef, useEffect } from "react";
import InputForm from "./components/InputForm"; // 분리된 InputForm 컴포넌트 임포트
import Formatdate from "../../components/Formatdate";

interface Chat {
  id: number;
  senderId: string;
  text: string;
  date: string;
}

const chatData = {
  chats: [
    {
      id: 1,
      senderId: "user1",
      text: "Hello!",
      date: "2024-07-11T17:45:46.194878",
    },
    {
      id: 2,
      senderId: "user2",
      text: "Hi there!",
      date: "2024-07-12T15:39:25.523467",
    },
  ],
};

const curUser = "currentUser"; // 현재 사용자 ID

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [chats, setChats] = useState<Chat[]>(chatData.chats);
  const nextChatId = useRef<number>(chatData.chats.length + 1);

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
        id: nextChatId.current,
        senderId: curUser,
        text,
        date: new Date().toISOString(),
      };
      setChats((prevChats) => [...prevChats, chat]);
      nextChatId.current++;
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
          <div key={chat.id}>
            <p>
              <strong>{chat.senderId}:</strong> {chat.text}
            </p>
            <p>{Formatdate(chat.date)}</p>
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
