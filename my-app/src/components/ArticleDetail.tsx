import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

interface Props {
  articles: {
    title: string;
    author: string;
    urlToImage: string;
    content: string;
  }[];
}

const ArticleDetail: React.FC<Props> = ({ articles }) => {
  const { title } = useParams();
  const article = articles.find((article) => article.title === title);

  return (
    <div>
      <Title>{article?.title}</Title>
      <img
        alt={article?.title}
        src={article?.urlToImage}
        style={{ width: 500, height: 400 }}
      />
      <Paragraph>by {article?.author}</Paragraph>
      <Divider />
      <Paragraph>{article?.content}</Paragraph>
    </div>
  );
};

export default ArticleDetail;