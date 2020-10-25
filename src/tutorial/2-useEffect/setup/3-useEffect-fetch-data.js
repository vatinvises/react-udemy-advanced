import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users); //trigger rerender in getUser ->infiniteloop!!!!!
  };
  useEffect(() => {
    //async await return a promise, cant be used
    getUsers();
  }, []); //prevent infinite loop!!!!!

  //ul = unordered list
  //when there is a list-> use unique key --> key={id}
  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_hrl } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_hrl}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
