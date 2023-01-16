import { Box,} from "../../Components/Conatiner/Conatiner";
import styles from "./Order.module.css";

export default function Orders() {
  // const Order = useSelector((state) => state.data);
  const allData = JSON.parse(localStorage.getItem("Data"));
  // const dispatch = useDispatch();
  return (
    <Box className={styles.mainBox}>
      <h2>Orders List</h2>
      <div className={styles.container}>
        <table>
          <tr>
            <th className={styles.names}>Order No.</th>
            <th className={styles.names}>Status</th>
            <th className={styles.names}>Operators</th>
            <th className={styles.names}>Location</th>
            <th className={styles.names}>Distance</th>
            <th className={styles.names}>Start Date</th>
            <th className={styles.names}>East Delivery Due</th>
          </tr>
          {/* <tbody> */}
          { allData.dasbhoardPage.orders.map((item, index) => {
                return (
                  <tr className={styles.row} key={index}>
                    <td className={styles.column}>{item.orderNo}</td>
                    <td className={styles.statusBox}>
                      <div
                        className={`${styles.status} ${
                          item.status === "Moving"
                            ? styles.moving
                            : item.status === "Cancelled"
                            ? styles.cancelled
                            : item.status === "Delivered"
                            ? styles.delivered
                            : styles.pending
                        } `}
                      ></div>
                      {item.status}
                    </td>
                    <td className={styles.column}>{item.operators}</td>
                    <td className={styles.column}>{item.location}</td>
                    <td className={styles.column}>{item.distance} km</td>
                    <td className={styles.column}>{item.startDate}</td>
                    <td className={styles.column}>{item.deliveryDate}</td>
                  </tr>
                );
              })
            }
          {/* </tbody> */}
        </table>
      </div>
    </Box>
  );
}
