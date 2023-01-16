import styles from "./Login.module.css";

import Conatiner, { Button } from "../../Components/Conatiner/Conatiner";
import { useDispatch, useSelector } from "react-redux";
import { LogInAction } from "../../Store/logIn-slice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const userId = useSelector((state) => state.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error , setError] = useState(false);

  const LogIn = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const users = userId.data.accountsPage;

    if (
      (users.Admin.email === email && users.Admin.password === password) ||
      (users.Customer.email === email &&
        users.Customer.password === password) ||
      (users.Editor.email === email && users.Editor.password === password) ||
      (users.Merchant.email === email && users.Merchant.password === password)
    ){
        dispatch(LogInAction.changeLogin());
        // dispatch(LogInAction.changeUsername())
        navigateTo();
        console.log(users.name)
    }
    else{
        setError(true)
    }
  };
  const navigateTo = () => {
    navigate("/Dashboard");
  };

  function emailChangeHandler(event) {
    const value = event.target.value;
    setEmail(value);
  }
  function passwordChangeHandler(event) {
    const value = event.target.value;
    setPassword(value);
  }
  return (
    <Conatiner className={styles.logInContainer}>
      <div className={styles.loginForm}>
        <h3>Welcome to DashBoard , Login</h3>
        <form onSubmit={LogIn} className={styles.userLogInForm}>
          <div className={styles.colGroup}>
            <label for="email">Username</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={emailChangeHandler}
            />
          </div>
          <div className={styles.colGroup}>
            <label for="email">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              value={password}
              onChange={passwordChangeHandler}
            />
          </div>
          {error ? <p className={styles.errorMsg}>* Enter a valid E-mail and Password</p> : ""}
          <Button>LOGIN</Button>
        </form>
      </div>
    </Conatiner>
  );
}
