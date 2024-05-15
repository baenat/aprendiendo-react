import { useState } from "react";
import "./App.css";
import { ButtonTheme } from "./components/ButtonTheme";
import { TwitterFollowCard } from "./components/TwitterFollowCard";
import { users } from "./data/data";

export function App() {

  const format = (username) => `@${username}`;
  const [isDark, setIsDark] = useState(false);

  document.querySelector('body').setAttribute('class',`${isDark ? 'dark' : 'light'}`);

  const changeStateTheme = () => { setIsDark(!isDark) };

  return (
    <section className="App" data-theme={isDark ? 'dark' : 'light'}>
      {users.map((user) => {
        const { name, userName } = user;
        return (
          <TwitterFollowCard
            key={userName}
            name={name}
            userName={userName}
            formatUsername={format}
          ></TwitterFollowCard>
        );
      })}
      <ButtonTheme handleChangeTheme={changeStateTheme} theme={isDark}></ButtonTheme>
    </section>
  );
}
