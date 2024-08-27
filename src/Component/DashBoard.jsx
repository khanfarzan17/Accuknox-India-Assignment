import { useState, Suspense, lazy } from "react";
import { useDashboard } from "../Context/DashBoradContext.jsx";
import "./Nav.css";
import AddWidgetForm from "./AddWidgetForm";
import SearchBar from "./SearchBar";
import { CiLight, CiDark } from "react-icons/ci";

// Lazy load the Category component
const Category = lazy(() => import("./Category.jsx"));

const Dashboard = () => {
  const { categories, theme, toggleTheme } = useDashboard();
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
    <div className={`dashboard ${theme ? "dark-mode" : "light-mode"}`}>
      <header className={`header ${theme ? "dark-mode" : "light-mode"}`}>
        <div className="logo" onClick={handleLogoClick}>
          CSPM Dashboard
        </div>
        <div className="headerActions">
          {!showAddForm && (
            <button onClick={handleAddWidgetClick} className="addWidgetBtn">
              Add New Widget
            </button>
          )}
          <div className="theme-btn-container">
            <button onClick={toggleTheme} className="themeToggleBtn">
              {theme ? (
                <CiLight className="cilight" />
              ) : (
                <CiDark className="cidark" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main className={`mainContent ${theme ? "dark-mode" : "light-mode"}`}>
        <SearchBar />

        {showAddForm && <AddWidgetForm onClose={handleFormClose} />}

        {!showAddForm && (
          <Suspense fallback={<div>Loading categories...</div>}>
            {categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
          </Suspense>
        )}
      </main>

      <footer className={`footer ${theme ? "dark-mode" : "light-mode"}`}>
        <p>© 2024 CSPM Dashboard</p>
      </footer>
    </div>
  );
};

export default Dashboard;
