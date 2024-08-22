import React from "react";
import styles from "./Widget.module.css";
import { useDashboard } from "../Context/DashBoradContext";
import { AiOutlineClose } from "react-icons/ai";

const Widget = ({ categoryName, widget }) => {
  const { removeWidget } = useDashboard();

  return (
    <div className={styles.widget}>
      <h4 className={styles.widgetTitle}>{widget.name}</h4>
      <p className={styles.widgetContent}>{widget.content}</p>
      <button
        onClick={() => removeWidget(categoryName, widget.id)}
        className={styles.widgetButton}
      >
        <AiOutlineClose className={styles.widgetIcon} />{" "}
      </button>
    </div>
  );
};

export default Widget;
