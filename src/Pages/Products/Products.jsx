import Conatiner, { Box, Button } from "../../Components/Conatiner/Conatiner";
import { AiFillDelete, AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Products() {
  const navigate = useNavigate();
  const allData = JSON.parse(localStorage.getItem("Data"));
  const products = allData.productsPage.products;
  const [selectedRows, setSelectedRows] = useState([]);
  const [deletedRows, setDeletedRows] = useState([]);
  const [deleteSelectedCategory, setDeleteSelectedCategory] = useState([]);
  const[addCategory , setAddCategory] = useState(false)
  const [categoryName, setCategoryName] = useState("")



  const rowClicked = (index) => {
    let temp = selectedRows;
    if (temp.includes(index)) {
      temp.splice(temp.indexOf(index), 1);
      setSelectedRows(temp);
      console.log("temp after ===  ", temp);
      return;
    }
    setSelectedRows([...temp, index]);
  };
  const deleteButton = (index) => {
    setDeletedRows([...deletedRows, index]);
  };
  const deleteSelectedRows = () => {
  };
  const deleteCategory = (index) => {
    setDeleteSelectedCategory([...deleteSelectedCategory, index]);
  };

  function changePage() {
    navigate("/addnewproduct");
  }

  const inputEvent = (e) => {
    setCategoryName(e.target.value);
  };
  const pushNewCategory = () => {
    const newData = {
      ...allData,
      productsPage: {
        categories: [...allData.productsPage.categories , categoryName],

        products: [...allData.productsPage.products],
      },
    };

    localStorage.setItem("Data", JSON.stringify(newData));
  }
  return (
    <Conatiner className={styles.main}>
      <Box className={styles.primaryBox}>
        <div className={styles.productsConatiner}>
          <table>
            <tr className={styles.names}>
              <th></th>
              <th className={styles.productsName}>Product Name</th>
              <th>Unit SOld</th>
              <th>In Stock</th>
              <th>Expiry Date</th>
              <th></th>
            </tr>
            <tbody>
              {products.map((item, index) => {
                if (!deletedRows.includes(index)) {
                  return (
                    <>
                      <tr
                        className={styles.row}
                        key={index}
                        onClick={() => rowClicked(index)}
                      >
                        <th className="checkbox">
                          <input type="checkbox" />
                        </th>
                        <td
                          className={`${styles.column} ${styles.productsName}`}
                        >
                          {item.name}
                        </td>
                        <td className={styles.column}>{item.unitSold}</td>
                        <td className={styles.column}>{item.stock}</td>
                        <td className={styles.column}>{item.expireDate}</td>
                        <td className={styles.column}>
                          {" "}
                          <div
                            className={styles.delete}
                            onClick={() => deleteButton(index)}
                          >
                            {" "}
                            <AiFillDelete />
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
        <Button eventListener={changePage}>ADD NEW PRODUCT</Button>
        <Button eventListener={deleteSelectedRows}>
          DELETE SELECTED PRODUCTS
        </Button>
      </Box>
      <Box className={styles.secondaryBox}>
        <h3 className={styles.title}>Products Categories</h3>
        <div className={styles.productsConatiner}>
          <div className="categoryBox">
            {allData.productsPage.categories.map((item, index) => {
              if (!deleteSelectedCategory.includes(index)) {
                return (
                  <div className={styles.boxCategory} key={index}>
                    {item}
                    <div
                      className={styles.delete}
                      onClick={() => deleteCategory(index)}
                    >
                      <AiFillDelete />
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <Button eventListener={() => setAddCategory(true)}>ADD NEW CATEGORY</Button>
      </Box>
      {addCategory ? <Box className={styles.addNewCategory}>
        <div className={styles.icon} onClick={() => setAddCategory(false)}>
        <AiOutlineCloseCircle />
        </div>
        <div className={styles.colGroup}>
              <label for="name">Category Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={inputEvent}
              />
              <Button eventListener = {pushNewCategory}>Add New Category</Button>
            </div>
      </Box> : ""}
    </Conatiner>
  );
}
