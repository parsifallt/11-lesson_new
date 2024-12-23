import React from 'react';
import NewsCard from './NewsCard';

function News({ news, deleteNews, editNews }) {
    return (
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {news.map(item => (
                <NewsCard
                    key={item.id}
                    newsItem={item}
                    deleteNews={deleteNews}
                    editNews={editNews}
                />
            ))}
        </div>
    );
}

export default News;
