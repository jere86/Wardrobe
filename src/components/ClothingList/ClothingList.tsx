import React from "react";

import styles from "./ClothingList.module.scss";

export interface ClothingItem {
  id: string;
  type: string;
  size: string;
  color: string;
  image: string;
}

interface ClothingListProps {
  items: ClothingItem[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ClothingList: React.FC<ClothingListProps> = ({
  items,
  onEdit,
  onDelete,
}) => {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png";
  };

  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Size</th>
            <th>Color</th>
            <th>Image</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.size}</td>
              <td>{item.color}</td>
              <td>
                <img
                  src={item.image}
                  alt={item.type}
                  onError={handleImageError}
                />
              </td>
              <td>
                <button onClick={() => onEdit(item.id)}>Edit</button>
                <button onClick={() => onDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClothingList;
