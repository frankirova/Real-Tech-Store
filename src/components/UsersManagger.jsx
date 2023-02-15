import React, { useEffect, useState } from "react";

export const UsersManagger = () => {
  const [res, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3300/?timestamp=" + new Date().getTime())
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });
  }, []);
  console.log(res);
  // console.log(res);
  return (
    <div key={res.id}>
      <ul className="d-flex flex-wrap w-100 justify-content-around">
        {res.map((response) => (
          <div className="d-flex flex-column align-items-center ">
            <li>id: {response.id}</li>
            <li>email: {response.email}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};
