import React, { useState, useCallback, useEffect } from "react";
import { useAuthState } from "@/context/auth";
import axios from "axios";

const subCreate = () => {
  //get user
  const { user } = useAuthState();

  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<any>("");

  const onClickEvent = async () => {
    console.log("test");
    if (name.trim() === "") {
      setError("커뮤니티 이름을 입력해주세요.");
      return;
    }
    if (title.trim() === "") {
      setError("커뮤니티 제목을 입력해주세요.");
      return;
    }
    if (description.trim() === "") {
      setError("커뮤니티 설명을 입력해주세요.");
      return;
    }
    const body = {
      name: name,
      title: title,
      description: description,
    };
    try {
      console.log(1);
      const res = await axios.post("/subs", body, { withCredentials: true });
      console.log(res.data);
      console.log(2);
    } catch (e: any) {
      console.log(e);
      setError(e.response?.data);
    }
  };

  useEffect(() => {
    if (error) {
      alert(error);
      setError("");
    }
  }, [error]);

  return (
    <div className="flex w-screen h-screen bg-black items-center justify-center">
      <div className="w-128 h-35rem bg-white">
        <div className="grid ml-5 mt-5">
          <div className="text-black text-2xl">커뮤니티 만들기</div>
          <div className="text-black text-2xl mt-5">Name</div>
          <div className="text-gray-500">
            대문자를 포함한 커뮤니티 이름은 변경할 수 없습니다.
          </div>
          <input
            type="text"
            className="w-100 h-14 bg-gray-100 mt-1 border-2 text-black pl-5 focus:outline-gray-400"
            placeholder="커뮤니티 이름"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="text-black text-2xl mt-5">Title</div>
          <div className="text-gray-500">
            커뮤니티 제목은 주제로 나태납니다. 언제든 변경할 수 있습니다.
          </div>
          <input
            type="text"
            className="w-100 h-14 bg-gray-100 mt-1 border-2 text-black pl-5 focus:outline-gray-400"
            placeholder="커뮤니티 제목"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="text-black text-2xl mt-5">Description</div>
          <div className="text-gray-500">
            새로운 회원이 커뮤니티를 이해하는 방법입니다.
          </div>
          <input
            type="text"
            className="w-100 h-14 bg-gray-100 mt-1 border-2 text-black pl-5 focus:outline-gray-400"
            placeholder="커뮤니티 설명"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className="bg-blue-400 text-white w-32 h-16 mt-5"
            onClick={onClickEvent}
          >
            커뮤니티 생성
          </button>
        </div>
      </div>
    </div>
  );
};

export default subCreate;
