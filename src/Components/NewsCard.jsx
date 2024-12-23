import React, { useState } from "react";

function NewsCard({ newsItem, deleteNews, editNews }) {
  const { id, title, description } = newsItem;
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleEdit = () => {
    if (isEditing) {
      editNews(id, { title: newTitle, description: newDescription });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="block border-gray-300 mb-2 p-2 border rounded-md w-full"
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="block border-gray-300 mb-2 p-2 border rounded-md w-full"
          ></textarea>
        </div>
      ) : (
        <div>
          <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      )}
      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={handleEdit}
          className="bg-blue-500 hover:bg-blue-800 p-2 rounded-md text-white transition"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => deleteNews(id)}
          className="bg-red-500 hover:bg-red-800 p-2 rounded-md text-white transition"
        >
          O'chirish
        </button>
      </div>
    </div>
  );
}

export default NewsCard;
