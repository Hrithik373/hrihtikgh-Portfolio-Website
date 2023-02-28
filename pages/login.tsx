import React, { useState } from "react";
import styles from "./login.module.css";

interface Props {
  onClose: () => void;
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<Props> = (props: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    if (event.target.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onLogin(username, password);
    setUsername("");
    setPassword("");
    setIsActive(false);
  };

  return (
    <div className={styles["login-modal"]}>
      <div className={`${styles.card}${isActive ? " is-active" : ""}`}>
        <div className={styles["card-header"]}>
          <h1 className={styles["card-header-title"]}>Login</h1>
          <button
            className={styles["card-header-icon"]}
            aria-label="close"
            onClick={() => {
              props.onClose();
              setUsername("");
              setPassword("");
              setIsActive(false);
            }}
          >
            <span className={styles.icon}>
              <i className="fas fa-times" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className={styles["card-content"]}>
          <form onSubmit={handleSubmit}>
            <div className={`${styles.field}${isFilled ? " is-filled" : ""}`}>
              <label className={styles.label} htmlFor="username">
                Username
              </label>
              <div className={styles.control}>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  className={styles.input}
                  required
                />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <div className={styles.control}>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className={styles.input}
                  required
                />
              </div>
            </div>
            <div className={styles.field}>
              <button
                type="submit"
                className={`${styles.button} ${styles["is-primary"]} ${styles["is-fullwidth"]} login-btn`}
              >
                Login
                <span className={styles.icon}>
                  <i className="fas fa-sign-in-alt"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <button
        className={styles["neon-button"]}
        onClick={() => setIsActive(true)}
      >
        <span></span>
        <span></span>
        <span></span>
        Login
      </button>
    </div>
  );
};

export default Login;