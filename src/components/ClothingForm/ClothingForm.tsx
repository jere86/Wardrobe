import React, { useEffect, useState } from "react";

import styles from "./ClothingForm.module.scss";

import { ClothingItem } from "../ClothingList/ClothingList";
import { typeOptions, sizeOptions, colorOptions } from "../../data/helper";

interface ClothingFormProps {
  onSubmit: (item: ClothingItem) => void;
  isEdit?: boolean;
  initialItem?: ClothingItem;
}

const ClothingForm: React.FC<ClothingFormProps> = ({
  onSubmit,
  isEdit = false,
  initialItem = { id: "", type: "", size: "", color: "", image: "" },
}) => {
  const [type, setType] = useState(initialItem.type);
  const [size, setSize] = useState(initialItem.size);
  const [color, setColor] = useState(initialItem.color);
  const [image, setImage] = useState(initialItem.image);

  useEffect(() => {
    setType(initialItem.type);
    setSize(initialItem.size);
    setColor(initialItem.color);
    setImage(initialItem.image);
  }, [
    isEdit,
    initialItem.type,
    initialItem.size,
    initialItem.color,
    initialItem.image,
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type && size && color && image) {
      const newItem: ClothingItem = {
        id: initialItem.id || `${Date.now()}`,
        type,
        size,
        color,
        image,
      };
      onSubmit(newItem);
      if (!isEdit) {
        setType("");
        setSize("");
        setColor("");
        setImage("");
      }
    } else {
      if (!type) {
        alert("Enter type!!!");
        return;
      }
      if (!size) {
        alert("Enter size!!!");
        return;
      }
      if (!color) {
        alert("Enter color!!!");
        return;
      }
      if (!image) {
        alert("Enter image!!!");
        return;
      }
    }
  };

  return (
    <div className={styles.clothingForm}>
      <p>{isEdit ? "Edit Item" : "Add New Item"}</p>
      <form onSubmit={handleSubmit}>
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="">Select Type</option>
          {typeOptions.map((category) => (
            <optgroup label={category.group} key={category.group}>
              {category.items.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Select Size</option>
          {sizeOptions.map((category) => (
            <optgroup label={category.group} key={category.group}>
              {category.items.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="">Select Color</option>
          {colorOptions.map((category) => (
            <optgroup label={category.group} key={category.group}>
              {category.items.map((item) => (
                <option
                  value={item}
                  key={item}
                  style={{ backgroundColor: item.toLowerCase() }}
                >
                  {item}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        <input
          type="link"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">{isEdit ? "Edit" : "Add"}</button>
      </form>
    </div>
  );
};

export default ClothingForm;
