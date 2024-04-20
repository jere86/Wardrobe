import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./Wardrobe.module.scss";

import ClothingList, { ClothingItem } from "../ClothingList/ClothingList";
import FilterClothing from "../FilterClothing/FilterClothing";
import ClothingForm from "../ClothingForm/ClothingForm";

const Wardrobe: React.FC = () => {
  const [items, setItems] = useState<ClothingItem[]>([]);
  const [initialItem, setInitialItem] = useState<ClothingItem>();
  const [filteredItems, setFilteredItems] = useState<ClothingItem[]>([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/wardrobe")
      .then((response) => {
        setItems(response.data);
        setFilteredItems(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filterItems = (type: string, size: string, color: string) => {
    setFilteredItems(
      items.filter(
        (item) =>
          (type.trim() === "" ||
            item.type.toLowerCase().includes(type.toLowerCase())) &&
          (size.trim() === "" ||
            item.size.toLowerCase() === size.toLowerCase()) &&
          (color.trim() === "" ||
            item.color.toLowerCase() === color.toLowerCase())
      )
    );
  };

  const addItem = (item: ClothingItem) => {
    axios
      .post("http://localhost:3001/wardrobe", item)
      .then((response) => {
        setItems([...items, response.data]);
        setFilteredItems([...filteredItems, response.data]);
      })
      .catch((error) => console.error("Error adding item:", error));
  };

  const editItem = (editedItem: ClothingItem) => {
    axios
      .put(`http://localhost:3001/wardrobe/${editedItem.id}`, editedItem)
      .then(() => {
        axios.get("http://localhost:3001/wardrobe").then((response) => {
          setItems(response.data);
          setFilteredItems(response.data);
        });
      })
      .catch((error) => console.error("Error deleting item:", error));
    setIsEdit(false);
    setInitialItem({ id: "", type: "", size: "", color: "", image: "" });
  };

  const deleteItem = (id: string) => {
    axios
      .delete(`http://localhost:3001/wardrobe/${id}`)
      .then(() => {
        axios.get("http://localhost:3001/wardrobe").then((response) => {
          setItems(response.data);
          setFilteredItems(response.data);
        });
      })
      .catch((error) => console.error("Error deleting item:", error));
  };

  const handleEdit = (id: string) => {
    const itemToEdit = items.find((item) => item.id === id);
    if (itemToEdit) {
      setInitialItem(itemToEdit);
      setIsEdit(true);
    }
  };

  return (
    <div className={styles.wardrobe}>
      <div className={styles.title}>
        <p>My Wardrobe</p>
      </div>
      <div className={styles.sections}>
        <ClothingForm
          onSubmit={isEdit ? editItem : addItem}
          initialItem={initialItem}
          isEdit={isEdit}
        />
        <div className={styles.view}>
          <FilterClothing onFilter={filterItems} />
          <ClothingList
            items={filteredItems}
            onEdit={handleEdit}
            onDelete={deleteItem}
          />
        </div>
      </div>
    </div>
  );
};

export default Wardrobe;
