import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import {BsCartFill, BsSpeedometer} from "react-icons/bs";
import {BiUser} from "react-icons/bi"
import { useSelector } from "react-redux";

export default function Header() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  // const userName = useSelector((state) => state.login.username)
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>ProductAdmin</div>
        <nav>
          <li>
            <NavLink className={styles.links} to="/Dashboard"  style={({ isActive }) => {
              return { backgroundColor: isActive ? "#f5a623" : "" };
            }}>
             <strong> <BsSpeedometer /> </strong>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.links} to="/products"  style={({ isActive }) => {
              return { backgroundColor: isActive ? "#f5a623" : "" };
            }}>
            <strong> <BsCartFill /> </strong>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.links} to="/accounts"  style={({ isActive }) => {
              return { backgroundColor: isActive ? "#f5a623" : "" };
            }}>
            <strong> <BiUser /> </strong>
              Accounts
            </NavLink>
          </li>
        </nav>
        {isLoggedIn ?
        <div className={styles.username}>
          userName, <span>logout</span>
        </div>
        : ""
        }
      </div>
    </div>
  );
}
