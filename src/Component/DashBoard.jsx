import React, { useState } from "react";
import { FiPlus } from "react-icons/fi"; // Import the plus icon from react-icons
import Category from "./Category";
import { useDashboard } from "../Context/DashBoradContext.jsx";
import AddWidgetForm from "./AddWidgetForm";
import SearchBar from "./SearchBar";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const { categories } = useDashboard();
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddWidgetClick = () => {
    setShowAddForm(true);
  };

  const handleFormClose = () => {
    setShowAddForm(false);
  };

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div className={styles.logo}>CSPM Dashboard</div>
        <div className={styles.headerActions}>
          {!showAddForm && (
            <button
              onClick={handleAddWidgetClick}
              className={styles.addWidgetBtn}
            >
              Add Widget
              <FiPlus className={styles.addIcon} />
            </button>
          )}
        </div>
      </header>

      <main className={styles.mainContent}>
        <SearchBar />

        {showAddForm && <AddWidgetForm onClose={handleFormClose} />}

        {!showAddForm &&
          categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
      </main>

      <footer className={styles.footer}>
        <p>© 2024 CSPM Dashboard</p>
      </footer>
    </div>
  );
};

export default Dashboard;
