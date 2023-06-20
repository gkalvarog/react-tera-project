import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import Loading from "../atoms/Loading";
import styles from "./Home.module.css";

import { CurUserContext } from "../contexts/CurUserContext";

export default function Home() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { curUser, setCurUser } = useContext(CurUserContext);

  useEffect(() => {
    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className={`${styles.home} center`}>
      <div className={styles.logo}>
        <img src={logo} className="responsive" alt="" />
      </div>

      <select
        onChange={(e) => setCurUser(e.target.value)}
        className={styles.selectUsers}
        defaultValue={curUser}
      >
        <option value="">Select the user</option>
        {users
          .sort((a, b) => a.fn.localeCompare(b.fn))
          .map((user) => (
            <option value={user.id} key={user.id}>
              {user.fn} {user.ln}
            </option>
          ))}
      </select>

      {!!curUser && (
        <button
          onClick={() => navigate(`/users/${curUser}`)}
          className="button-primary"
        >
          Enter
        </button>
      )}
    </div>
  );
}
