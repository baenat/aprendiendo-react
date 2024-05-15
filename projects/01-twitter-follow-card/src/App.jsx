import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const format = (username) => `@${username}`;

  return (
    <section className="App">
      <TwitterFollowCard
        name="Julian Baena"
        userName="julianbaenaaa"
        formatUsername={format}
      ></TwitterFollowCard>

      <TwitterFollowCard
        name={"Carlos Vives"}
        userName={"carlosvives"}
        formatUsername={format}
      ></TwitterFollowCard>

      <TwitterFollowCard
        name={"Leo Messi"}
        userName={"leomessisite"}
        formatUsername={format}
      ></TwitterFollowCard>

      <TwitterFollowCard
        name={"MrBeast"}
        userName={"MrBeast"}
        formatUsername={format}
      ></TwitterFollowCard>

      <TwitterFollowCard
        name={"Kim Kardashian"}
        userName={"KimKardashian"}
        formatUsername={format}
      ></TwitterFollowCard>

      <TwitterFollowCard
        name={"Homer J. Simpson"}
        userName={"homerjsimpson"}
        formatUsername={format}
      ></TwitterFollowCard>

      <TwitterFollowCard
        name={"Taylor Swift"}
        userName={"taylorswift13"}
        formatUsername={format}
      ></TwitterFollowCard>
    </section>
  );
}
