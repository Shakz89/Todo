import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
import AddItem from "./components/additem/AddItem";
import SearchItem from "./components/searchitem/SearchItem";

import React, { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todolist")) || []
  );

  // const [items, setItems] = useState([
  //   {
  //     key: 1,
  //     id: 1,
  //     checked: true,
  //     item: "loren longer",
  //   },
  //   {
  //     key: 2,
  //     id: 2,
  //     checked: true,
  //     item: "loren longer",
  //   },
  // ]);

  const [newItems, setNewItems] = useState("");
  const [serchItem, setSerchItem] = useState("");

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItems) return;
    addItem(newItems);
    console.log(newItems);
    setNewItems("");
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };
  return (
    <div className="App">
      <Header />
      <AddItem
        newItems={newItems}
        setNewItems={setNewItems}
        handleSubmit={handleSubmit}
      />
      <SearchItem serchItem={serchItem} setSerchItem={setSerchItem} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(serchItem.toLowerCase())
        )}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
