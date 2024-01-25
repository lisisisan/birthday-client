import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const loginInputRef = useRef(null);

  useEffect(() => {
    // Установка фокуса на первом поле формы при загрузке страницы
    loginInputRef.current.focus();
  }, []);

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика обработки данных формы здесь
    console.log("Логин:", login, "Пароль:", password);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Окно входа</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label>
            Логин:
            <input
              type="text"
              value={login}
              onChange={handleLoginChange}
              ref={loginInputRef}
            />
          </label>
          <br />
          <label>
            Пароль:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          <button type="submit">Войти</button>
        </form>
      </main>
    </div>
  );
}

export default App;
