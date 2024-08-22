import { useState } from "react";
import { useDashboard } from "../Context/DashBoradContext.jsx";
import "./Nav.css";
import AddWidgetForm from "./AddWidgetForm";
import SearchBar from "./SearchBar";

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
    <div className="dashboard">
      <header className="header">
        <div className="logo" onClick={handleLogoClick}>
          CSPM Dashboard
        </div>
        <div className="headerActions">
          {!showAddForm && (
            <button onClick={handleAddWidgetClick} className="addWidgetBtn">
              Add New Widget
            </button>
          )}
        </div>
      </header>

      <main className="mainContent">
        <SearchBar />

        {showAddForm && <AddWidgetForm onClose={handleFormClose} />}

        {!showAddForm &&
          categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
      </main>

      <footer className="footer">
        <p>© 2024 CSPM Dashboard</p>
      </footer>
    </div>
  );
};

export default Dashboard;
