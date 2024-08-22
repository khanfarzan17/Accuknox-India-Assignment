import { useState } from "react";
import { useDashboard } from "../Context/DashBoradContext.jsx";

import AddWidgetForm from "./AddWidgetForm";
import SearchBar from "./SearchBar";
import styles from "./Dashboard.module.css";
import Category from "./Category.jsx";

const Dashboard = () => {
  const { categories } = useDashboard();
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddWidgetClick = () => {
    setShowAddForm(true);
  };

  const handleFormClose = () => {
    setShowAddForm(false);
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div className={styles.logo} onClick={handleLogoClick}>
          CSPM Dashboard
        </div>
        <div className={styles.headerActions}>
          {!showAddForm && (
            <button
              onClick={handleAddWidgetClick}
              className={styles.addWidgetBtn}
            >
              Add New Widget
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
