import { useState } from "react";
import { Redirect, Route } from "react-router";
import authStore from "../store/authStore";
import { CreateButtonStyled, styledForm } from "../styles";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
  };
  if (authStore.user) return <Redirect to="/" />;

  return (
    <Route path="/signup">
      <styledForm>
        <h3>Signup</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              name="username"
              value={user.username}
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              value={user.password}
              type="password"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <CreateButtonStyled className="btn float-right" type="submit">
            Sign up
          </CreateButtonStyled>
        </form>
      </styledForm>
    </Route>
  );
};

export default Signup;
