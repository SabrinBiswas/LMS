import api from "./api";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({});

  const login = async () => {
    const res = await api.post("auth/login/", form);
    localStorage.setItem("token", res.data.access);
    window.location = "/dashboard";
  };

  return (
    <>
      <input onChange={e => setForm({...form, username:e.target.value})} />
      <input type="password" onChange={e => setForm({...form, password:e.target.value})} />
      <button onClick={login}>Login</button>
    </>
  );
}
