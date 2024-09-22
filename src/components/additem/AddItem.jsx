import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItems, setNewItems, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input
        type="text"
        autoFocus
        ref={inputRef}
        id="addForm"
        placeholder="Добавить!!!"
        required
        value={newItems}
        onChange={(e) => setNewItems(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
