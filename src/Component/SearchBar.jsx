import React, { useState } from "react";
import { useDashboard } from "../Context/DashBoradContext.jsx";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const { categories, theme } = useDashboard();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWidgets = categories
    .flatMap((category) => category.widgets)
    .filter((widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className={`styles.searchBar ${theme ? "dark-mode" : "light-mode"}`}>
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchBarInput}
      />

      <div className={styles.widgetContainer}>
        {searchTerm && filteredWidgets.length > 0 ? (
          filteredWidgets.map((widget) => (
            <div key={widget.id} className={styles.widgetCard}>
              <h4 className={styles.widgetCardTitle}>{widget.name}</h4>
              <p className={styles.widgetCardContent}>{widget.content}</p>
            </div>
          ))
        ) : searchTerm && filteredWidgets.length === 0 ? (
          <p className={styles.noResults}>No widgets found</p>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
