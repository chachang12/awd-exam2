import { useState } from "react";

const RemovingItemsFromList = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  // Filters out the item at the specified index, and sets the new items array
  const removeItem = (indexToRemove: number) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RemovingItemsFromList;