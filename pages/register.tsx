import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<any>("");
  const Router = useRouter();

  const onClickEvent = async () => {
    if (name === "") {
      setError("이름을 입력해주세요.");
      return;
    }
    if (email === "") {
      setError("이메일을 입력해주세요.");
      return;
    }
    if (password === "") {
      setError("비밀번호를 입력해주세요.");
      return;
    }
    const body = {
      username: name,
      email: email,
      password: password,
    };
    console.log(body);

    try {
      const res = await axios.post("/auth/register", body);
      if (res) {
        // console.log("res", res.data);
      } else {
        console.log("error");
      }
    } catch (e: any) {
      //   console.log(e.response?.data);
      if (e.response?.data) {
        console.log(Object.values(e.response.data)[0]);
        setError(Object.values(e.response.data)[0]);
      }
    }
  };

  useEffect(() => {
    if (error) {
      alert(error);
      setError("");
    }
  }, [error]);

  return (
    <div className="grid w-screen h-screen bg-white justify-center items-center">
      <div>
        <div className="flex items-center justify-between mb-10 w-400px">
          <div className="text-black">이름</div>
          <input
            type={"text"}
            className="w-300px h-60px bg-blue-200 px-5"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mb-10 w-400px">
          <div className="text-black">이메일</div>
          <input
            type={"text"}
            className="w-300px h-60px bg-blue-200 px-5"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mb-10 w-400px">
          <div className="text-black">패스워드</div>
          <input
            type={"password"}
            className="w-300px h-60px bg-blue-200 px-5"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="w-400px h-60px bg-blue-200" onClick={onClickEvent}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default register;
