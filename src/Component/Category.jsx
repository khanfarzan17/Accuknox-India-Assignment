import React from "react";
import Widget from "./Widget";
import styles from "./Category.module.css"; 

const Category = ({ category }) => {
  return (
    <div className={styles.category}>
      <h2 className={styles.categoryTitle}>{category.name}</h2>
      <div className={styles.categoryContent}>
        {category.widgets.map((widget) => (
          <div key={widget.id} className={styles.categoryItem}>
            <Widget categoryName={category.name} widget={widget} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
