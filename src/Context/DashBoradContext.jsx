import { createContext, useState, useContext, useEffect } from "react";
import categoriesData from "../Data/categories.json";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  const addWidget = (categoryName, widget) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.name === categoryName
          ? { ...category, widgets: [...category.widgets, widget] }
          : category
      )
    );
  };

  const removeWidget = (categoryName, widgetId) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.name === categoryName
          ? {
              ...category,
              widgets: category.widgets.filter(
                (widget) => widget.id !== widgetId
              ),
            }
          : category
      )
    );
  };

  return (
    <DashboardContext.Provider value={{ categories, addWidget, removeWidget }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
