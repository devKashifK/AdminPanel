import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header";
import Accounts from "./Pages/Accounts/Accounts";
import AddNew from "./Pages/AddNew/AddNew";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import Products from "./Pages/Products/Products";
import { dataAction } from "./Store/Data-slice";

function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const url = "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json";

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      console.log(res.data);
      dispatch(dataAction.addData(res.data));

      if (localStorage.getItem("Data") === null) {
        localStorage.setItem("Data", JSON.stringify(res.data));
      } else {
        console.log(res.data);
      }
      if (localStorage.getItem("AccountData") === null) {
        localStorage.setItem(
          "AccountData",
          JSON.stringify(res.data.accountsPage)
        );
      } else {
        console.log(res.data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Dashboard"
          element={
            isLoggedIn ? <Dashboard /> : <Navigate to="/login"></Navigate>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/addnewproduct" element={<AddNew />} />
        <Route
          path="/accounts"
          element={
            isLoggedIn ? <Accounts /> : <Navigate to="/login"></Navigate>
          }
        />
        <Route
          path="/products"
          element={
            isLoggedIn ? <Products /> : <Navigate to="/login"></Navigate>
          }
        />
      </Routes>
    </>
  );
}

export default App;
