import { createRef, useState } from "react";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import Conatiner, { Box, Button } from "../../Components/Conatiner/Conatiner";
import styles from "./Addnew.module.css";

export default function AddNew() {
  const allData = JSON.parse(localStorage.getItem("Data"));
  let productImg = createRef();
  const [details, setDetails] = useState({
    category: "",
    description: "",
    expiryDate: "",
    name: "",
    stock: "",
    unitSold: "---",
  });
  const inputEvent = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  function addProduct(event) {
    event.stopPropagation();
    event.preventDefault();
    const newData = {
      ...allData,
      productsPage: {
        categories: [...allData.productsPage.categories],

        products: [...allData.productsPage.products, details],
      },
    };

    localStorage.setItem("Data", JSON.stringify(newData));
  }
  const uploadNewPhoto = (e) => {
    // alert(e)
    document.getElementById("uploadFile").click();
  };
  const uploadClick = (e) => {
    if (e.target.files[0].size > 1048576) {
      alert("upload failed, file is too big");
      return;
    }
    productImg.current.src = URL.createObjectURL(e.target.files[0]);
    alert("upload successfully");
  };
  return (
    <Conatiner>
      <Box className={styles.primaryBox}>
        <h3>Add Product</h3>
        <div className={styles.addProductConatiner}>
          <form onSubmit={addProduct} className={styles.addProduct}>
            <div className={styles.colGroup}>
              <label for="name">Product Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={details.name}
                onChange={inputEvent}
              />
            </div>
            <div className={styles.colGroup}>
              <label for="description">Description</label>
              <input
                type="text"
                id="description"
                name="description"
                value={details.description}
                onChange={inputEvent}
              />
            </div>
            <div className={styles.colGroup}>
              <label for="category">Category</label>
              <select
                className={styles.customSelect}
                name="category"
                id="category"
                value={details.category}
                onChange={inputEvent}
              >
                <option value="New Arrival">New Arrival</option>
                <option value="Most Popular">Most Popular</option>
                <option value="Trending">Trending</option>
              </select>
            </div>
            <div className={styles.rowgroup}>
              <div className={styles.colGroup}>
                <label for="expiry">Expiry Date</label>
                <input
                  type="text"
                  id="expiry"
                  name="expiryDate"
                  value={details.expiryDate}
                  onChange={inputEvent}
                />
              </div>
              <div className={styles.colGroup}>
                <label for="stock">Units in Stock</label>
                <input
                  type="text"
                  id="stock"
                  name="stock"
                  value={details.stock}
                  onChange={inputEvent}
                />
              </div>
            </div>
          </form>
          <div className={styles.imageUpload}>
            <div
              className={styles.colGroup2}
              onClick={() => uploadNewPhoto("UploadNewPhoto")}
            >
              {/*  */}
              <img
                src=""
                ref={productImg}
                className={styles.AccountImg}
                alt=""
              />

              <div className={styles.icon}>
                <BsFillCloudArrowUpFill />
              </div>
            </div>
            <Button onClick={() => uploadNewPhoto("UploadNewPhoto")}>
              UPLOAD PRODUCT IMAGE
            </Button>
            <input
              type="file"
              id="uploadFile"
              onChange={(e) => uploadClick(e)}
              style={{ display: "none" }}
            />
          </div>
        </div>
        <Button eventListener={addProduct}>Add Product Now</Button>
      </Box>
    </Conatiner>
  );
}
