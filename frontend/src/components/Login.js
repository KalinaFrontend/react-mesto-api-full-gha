import React from "react";
import AuthForm from "./AuthForm";


function Login({ onLogin }) {
  const title = "Вход";
  return (
    <AuthForm title={title} onLogin={onLogin} />
  );
}

export default Login;
