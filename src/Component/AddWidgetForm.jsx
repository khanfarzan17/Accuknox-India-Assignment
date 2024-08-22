import React, { useState } from "react";
import { useDashboard } from "../Context/DashBoradContext.jsx";
import styles from "./AddWidgetForm.module.css";
import { IoIosAdd } from "react-icons/io";

const AddWidgetForm = ({ onClose }) => {
  const { addWidget } = useDashboard();
  const [widgetName, setWidgetName] = useState("");
  const [widgetContent, setWidgetContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    "CSPM Executive Dashboard"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      content: widgetContent,
    };
    addWidget(selectedCategory, newWidget);
    onClose();
  };

  return (
    <div className={styles.addWidgetForm}>
      <h3 className={styles.formTitle}>Add New Widget</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          required
          className={styles.formInput}
        />
        <input
          type="text"
          placeholder="Widget Content"
          value={widgetContent}
          onChange={(e) => setWidgetContent(e.target.value)}
          required
          className={styles.formInput}
        />
        <button type="submit" className={styles.submitButton}>
          Add Widget{" "}
        </button>
        <button type="button" onClick={onClose} className={styles.cancelButton}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddWidgetForm;
