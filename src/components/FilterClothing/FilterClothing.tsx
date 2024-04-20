import React, { useState } from "react";

import styles from "./FilterClothing.module.scss";
import { filterOptions } from "../../data/helper";

interface FilterClothingProps {
  onFilter: (type: string, size: string, color: string) => void;
}

const FilterClothing: React.FC<FilterClothingProps> = ({ onFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [type, setType] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    switch (name) {
      case "type":
        setType(checked ? value : "");
        break;
      case "size":
        setSize(checked ? value : "");
        break;
      case "color":
        setColor(checked ? value : "");
        break;
      default:
        break;
    }

    onFilter(
      name === "type" ? (checked ? value : "") : type,
      name === "size" ? (checked ? value : "") : size,
      name === "color" ? (checked ? value : "") : color
    );
  };

  const handleFilterClick = (filterby: string) => {
    setSelectedFilter(filterby === selectedFilter ? null : filterby);
    setSelectedGroup(null);
  };

  const handleGroupClick = (group: string) => {
    setSelectedGroup(group === selectedGroup ? null : group);
  };

  const resetFilters = () => {
    setType("");
    setSize("");
    setColor("");
    setSelectedFilter(null);
    setSelectedGroup(null);
    onFilter("", "", "");
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filterby}>
        Filter by:{" "}
        {filterOptions.map((option) => (
          <button
            key={option.filterby}
            onClick={() => handleFilterClick(option.filterby)}
          >
            {option.filterby.toUpperCase()}
          </button>
        ))}
        <button onClick={resetFilters} className={styles.reset}>
          Reset
        </button>
      </div>
      {selectedFilter && (
        <div className={styles.selectedFilter}>
          Select Group:{" "}
          {filterOptions.map(
            (option) =>
              option.filterby === selectedFilter && (
                <>
                  {option.data.map((category) => (
                    <div key={category.group} className={styles.group}>
                      <button onClick={() => handleGroupClick(category.group)}>
                        {category.group}
                      </button>
                      {selectedGroup === category.group && (
                        <div className={styles.inputs}>
                          {category.items.map((item) => (
                            <label key={item}>
                              <input
                                type="checkbox"
                                name={option.filterby}
                                value={item}
                                checked={
                                  (option.filterby === "type" &&
                                    type === item) ||
                                  (option.filterby === "size" &&
                                    size === item) ||
                                  (option.filterby === "color" &&
                                    color === item)
                                }
                                onChange={handleOptionChange}
                              />
                              {item}
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default FilterClothing;
