import { createRef, useCallback, useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import Conatiner, { Box, Button } from "../../Components/Conatiner/Conatiner";
import styles from "./Account.module.css";

export default function Accounts() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("AccountData")));
  const [selectedDropDown , setSelectedDropDown] = useState("");
  const [profile, setProfile] = useState(true);
  const [newUpdatedData , setNewUpdatedData] = useState(JSON.parse(localStorage.getItem("AccountData")));
  let newData;

  let form = createRef();
  let profilePic = createRef();
  let picFile = createRef();

  const uploadNewPhoto = (e) => {
    // alert(e)
    e.target.click();
  };

  const uploadClick = (e) => {
    if (picFile.current.files[0].size > 1048576) {
      alert("upload failed, file is too big");
      return;
    }
    profilePic.current.src = URL.createObjectURL(picFile.current.files[0]);
    console.log(profilePic.current.src);
    alert("upload successfully");
  };

  const deleteImg = () => {
    profilePic.current.src = "";
    profilePic.current.alt = "";
    setProfile(false);
  };
  const changeSelected = (event) => {
    let values = event.target.value;
    let temp 
    if (values === "Admin") {
      newData = data.Admin;
      temp='Admin'
    } else if (values === "Editor") {
      newData = data.Editor;
      temp='Editor'  
    } else if (values === "Merchant") {
      newData = data.Merchant;
      temp='Merchant'
    } else if (values === "Customer") {
      newData = data.Customer;
      temp='Customer'
    }
console.log(newData)
    form.current[0].value = newData.name;
    form.current[1].value = newData.email;
    form.current[2].value = newData.password;
    form.current[3].value = newData.password;
    form.current[4].value = newData.phone;
    profilePic.current.src = newData.profilePic;
    profilePic.current.alt = "profile pic";
    setSelectedDropDown(temp)
    console.log(selectedDropDown)
    console.log(newData.name)
  };
const changeAvatar = (event) => {
  event.preventDefault();
  let temp=selectedDropDown
  let updatedData=newUpdatedData
  updatedData[temp].profilePic=profilePic.current.src
  localStorage.setItem('AccountData',JSON.stringify(updatedData));
  setProfile(true);
}

 const updateTheData=(event)=>{
  event.preventDefault();
    let temp=selectedDropDown, updatedData=newUpdatedData
    console.log(data[temp]);
    updatedData[temp].name=form.current[0].value
    updatedData[temp].email=form.current[1].value
    updatedData[temp].password=form.current[2].value
    updatedData[temp].phone=form.current[4].value
    updatedData[temp].profilePic=profilePic.current.src
    setNewUpdatedData({updatedData:data})
    localStorage.setItem('AccountData',JSON.stringify(updatedData));
    alert('updated your Account')
}
  return (
    <Conatiner>
      <Box className={styles.selectAccount}>
        <h3>List of Accounts</h3>
        <p>Accounts</p>
        <select
          name=""
          id=""
          className={styles.customSelect}
          onChange={changeSelected}
        >
          <option value="0">Select Account</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Merchant">Merchant</option>
          <option value="Customer">Customer</option>
        </select>
      </Box>
      <div className={styles.container}>
        <Box className={styles.primaryBox}>
          <h3> Change Avatar </h3>
          <div className={styles.imgBox}>
            <div className={styles.delete}>
              {!profile ? (
                <div className={styles.newPhoto}>
                  <input
                    type="file"
                    id="uploadFile"
                    ref={picFile}
                    onChange={uploadNewPhoto}
                  />
                  <div
                    className={styles.btn}
                    id="UploadNewPhoto"
                    onClick={uploadClick}
                  >
                    UPLOAD NEW PHOTO
                  </div>
                </div>
              ) : (
                <div className={styles.icon} onClick={deleteImg}>
                  <AiFillDelete />
                </div>
              )}
            </div>

            <img src="./avatar.png" alt="Avatar" ref={profilePic} />
          </div>
          <Button eventListener={changeAvatar}>Change Avatar</Button>
        </Box>
        <Box className={styles.secondaryBox}>
          <h3> Account Settings </h3>
          <form action="" className={styles.forms} ref={form}>
            <div className={styles.formRow}>
              <div className={styles.formColumn}>
                <label for="name">Account Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div className={styles.formColumn}>
                <label for="email">Account Email</label>
                <input type="text" id="email" name="email"  />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formColumn}>
                <label for="password">Password</label>
                <input type="text" id="password" name="password"  />
              </div>
              <div className={styles.formColumn}>
                <label for="password2">Re-enter Password</label>
                <input type="text" id="password2" name="password2"  />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formColumn}>
                <label for="Phone">Phone</label>
                <input type="text" id="Phone" name="Phone"  />
              </div>
              <div className={styles.formColumn}>
                <Button eventListener= {updateTheData}>Update Your Profile</Button>
              </div>
            </div>
          </form>
          <Button>Delete Your Account</Button>
        </Box>
      </div>
    </Conatiner>
  );
}
