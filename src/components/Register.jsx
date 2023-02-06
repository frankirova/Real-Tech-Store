import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authContext } from "../Context/LoginContext";

import "../styles/Register.css";

export const Register = () => {
  const { signup, error, setIsLoggedIn } = useContext(authContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = await signup(user.email, user.password);

    if (!error) {
      navigate("/");
      setIsLoggedIn(true);
    }
  };

  return (
    <main className="d-flex flex-column align-items-center justify-content-center mx-auto vh-100">
      {error && <p>{error}</p>}
      <section className="register h-75 bg-light d-flex flex-column align-items-center mx-auto">
        <h2 className="fs-2 my-4">Sign up</h2>
        <form className="w-50 my-5" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label
              for="exampleInputEmail1"
              className="d-flex mx-2 text-secondary"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label
              for="exampleInputPassword1"
              className="d-flex mx-2 text-secondary"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-success w-100">
            Submit
          </button>
          <Link to="/Login" className="btn text-success w-100">
            Log in
          </Link>
        </form>
      </section>
    </main>
  );
};
