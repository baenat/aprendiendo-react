import { useState } from "react";

export function TwitterFollowCard({ name, userName, formatUsername }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const textButton = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button isFollowing"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt={`Avatar de ${userName}`}
          src={`https://unavatar.io/twitter/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUser">
            {formatUsername(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {textButton}
        </button>
      </aside>
    </article>
  );
}
