import { useState } from "react";

const AddingItemsToList = () => {
    const [items, setItems] = useState(["Item 1", "Item 2"]);

    // Uses spread to copy the existing items and add a new item to the end of the array
    const addItem = () => {
        setItems([...items, `Item ${items.length + 1}`]);
    };

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>
    );
};

export default AddingItemsToList;