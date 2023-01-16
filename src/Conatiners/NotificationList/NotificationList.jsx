import { useSelector } from "react-redux";
import { Box } from "../../Components/Conatiner/Conatiner";
import styles from "./Notification.module.css";

export default function Notification() {
  const Notify = useSelector((state) => state.data);
  console.log(Notify);
  return (
    <Box className={styles.mainBox}>
        <h2>Notification List</h2>
      <div className={styles.container}>
        {Notify && Notify.data.dasbhoardPage !== undefined
          ? Notify.data.dasbhoardPage.notifications.map((item , index) => {
              return (
                <div className={styles.notificationBox} key={index}>
                  <div className={styles.img}>
                    <img src={item.pic} alt="" />
                  </div>
                  <div className={styles.message}>
                    <h3>{item.message}</h3> <span>{item.time}</span>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </Box>
  );
}
