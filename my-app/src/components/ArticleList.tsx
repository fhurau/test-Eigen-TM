import React, { useState, useEffect } from 'react';
import { Card, Typography } from 'antd';
import Axios from 'axios'
import { Link } from 'react-router-dom';


interface Props {
  articles: {
    title: string;
    author: string;
    urlToImage:string;
    description:string;
  }[];
}

const ArticleList: React.FC <Props> = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <Card
          key={article.title}
          style={{ width: 500, margin: "auto" }}
          cover={
            <img
              alt={article.title}
              src={article.urlToImage}
              style={{ width: 500, height: 300 }}
            />
          }
          actions={[
            <Link to={`/article/${article.title}`}>View</Link>
          ]}
        >
          <Card.Meta
            title={article.title}
            description={article.description}
          />
        </Card>
      ))}
    </div>
  );
};

export default ArticleList;
