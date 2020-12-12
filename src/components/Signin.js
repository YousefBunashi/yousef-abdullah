import { useState } from "react";
import { Redirect } from "react-router";
import authStore from "../store/authStore";
import { CreateButtonStyled } from "../styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Signin = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
  };

  if (authStore.user) return <Redirect to="/" />;
  return (
    <div style={customStyles} contentLabel="Signin">
      <h3>Signin</h3>
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
          Sign in
        </CreateButtonStyled>
      </form>
    </div>
  );
};

export default Signin;
