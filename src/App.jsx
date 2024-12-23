import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import Create from "./Components/Create";
import News from "./Components/News";

function App() {
  const [news, setNews] = useState([]);

  const addNews = (newItem) => {
    setNews([...news, { ...newItem, id: uuidv4() }]);
  };

  const deleteNews = (id) => {
    setNews(news.filter((item) => item.id !== id));
  };

  const editNews = (id, updatedItem) => {
    setNews(
      news.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
  };

  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <h1 className="mb-6 font-bold text-3xl text-blue-400  text-center">
        Title List
      </h1>
      <Create addNews={addNews} />
      <News news={news} deleteNews={deleteNews} editNews={editNews} />
    </div>
  );
}

export default App;
