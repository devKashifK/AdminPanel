import Conatiner from "../../Components/Conatiner/Conatiner";
import LatestHits from "../../Conatiners/LatestHits/Latesthits";
import Notification from "../../Conatiners/NotificationList/NotificationList";
import Orders from "../../Conatiners/OrderList/Order";
import Performance from "../../Conatiners/Performance/Performance";
import Storage from "../../Conatiners/StorageInformation/Storage";
import styles from "./Dashboard.module.css";

export default function Dashboard() {

  return (
    <>
   
      <Conatiner className={styles.adminContainer}>
      <h3 style={{color : "white"}}> Welcome Back, Admin </h3>
      <div className={styles.Dashboard}>
        <LatestHits />
        <Performance/>
        <Storage />
        <Notification />
        <Orders />
      </div>
      </Conatiner>
      </>
   
  );
}
