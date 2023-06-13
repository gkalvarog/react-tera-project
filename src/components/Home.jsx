import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";

export default function Home() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [curUser, setCurUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <h1>loading...</h1>
  ) : (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>

      <select
        onChange={(e) => setCurUser(e.target.value)}
        className="home__select-users"
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
